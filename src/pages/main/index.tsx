import React, {useEffect, useState} from "react";
import Title from "../../components/title";
import {getMain} from "../../events/getData";
import List from "../../components/list";

interface getMainType {
    movieList: never[]
    popularList: never[]
    comingListNeiDi: never[]
    comingListOther: never[]
}

function Main() {
    const [movieList, setMovieList] = useState([])
    const [popularList, setPopularList] = useState([])
    const [comingListNeiDi, setComingListNeiDi] = useState([])
    const [comingListOther, setComingListOther] = useState([])

    useEffect(() => {
        getMain<getMainType>().then(res => {
            setMovieList(res.data.movieList)
            setPopularList(res.data.popularList)
            setComingListNeiDi(res.data.comingListNeiDi)
            setComingListOther(res.data.comingListOther)
        })
    }, [])

    return (
        <>
            <Title title='正在热映' right='查看更多' />
            <List list={movieList}/>
            <Title title='最受欢迎' right='查看更多' />
            <List list={popularList}/>
            <Title title='内地即将上映' right='查看更多' />
            <List list={comingListNeiDi}/>
            <Title title='其他即将上映' right='查看更多' />
            <List list={comingListOther} />
        </>
    )
}

export default React.memo(Main)