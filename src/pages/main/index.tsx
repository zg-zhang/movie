import React, {useEffect, useState} from "react";
import Title from "../../components/title";
import {getMain} from "../../events/getData";
import List from "../../components/list";
import storageConstants from "../../constants/storage";
import {getSessionStorage, setSessionStorage} from "../../tools/storage";
import routesConstants from "../../constants/routes";

interface getMainType {
    movieList: never[]
    popularList: never[]
    comingListNeiDi: never[]
    comingListOther: never[]
}

function Main() {
    const defaultList = Array(10).fill({})

    const [movieList, setMovieList] = useState(defaultList)
    const [popularList, setPopularList] = useState(defaultList)
    const [comingListNeiDi, setComingListNeiDi] = useState(defaultList)
    const [comingListOther, setComingListOther] = useState(defaultList)

    useEffect(() => {
        const data = getSessionStorage(storageConstants.mainData)
        if (data) {
            _setData(data)
        } else {
            getMain<getMainType>().then(res => {
                setSessionStorage(storageConstants.mainData, res.data)
                _setData(res.data)
            })
        }
    }, [])

    function _setData(data: getMainType) {
        setMovieList(data.movieList)
        setPopularList(data.popularList)
        setComingListNeiDi(data.comingListNeiDi)
        setComingListOther(data.comingListOther)
    }

    return (
        <>
            <Title title='正在热映' type={1}/>
            <List list={movieList} info='正在热映'/>
            <Title title='最受欢迎' type={2}/>
            <List list={popularList} info='最受欢迎'/>
            <Title title='内地即将上映' type={3}/>
            <List list={comingListNeiDi} info='内地即将上映'/>
            <Title title='其他即将上映' type={4}/>
            <List list={comingListOther} info='其他即将上映'/>
        </>
    )
}

export default React.memo(Main)