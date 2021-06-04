import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {getDetail} from "../../events/getData";
import Info from "./info";
import ListTitle from "../../components/listTitle";
import AvatarList from "../../components/avatarList";
import Footer from "../../components/footer";
import Tab from "../../components/tab";
import ImgList from "../../components/imgList";
import VideoList from "../../components/videoList";

interface paramsProps {
    id: string
}

interface detailProps {
    data: any
}

function Detail() {
    const { id } = useParams<paramsProps>()
    const [data, setData] = useState({
        directors: "[]",
        actors: "[]",
        stageImg: "[]",
        videos: "[]"
    })
    const tabs = ['剧照', '预告片', '导演', '主演', '全部']
    const [tab, setTab] = useState(0)

    useEffect(() => {
        getDetail<detailProps>(id).then(res => {
            console.log(res);
            // @ts-ignore
            setData(res.data)
        })
    }, [])

    const DirectorBox = () => (
        <>
            <ListTitle title='导演' />
            <AvatarList data={JSON.parse(data.directors)} />
        </>
    )

    const ActorBox = () => (
        <>
            <ListTitle title='主演' />
            <AvatarList data={JSON.parse(data.actors)} actor/>
        </>
    )

    const ImgBox = () => (
        <>
            <ListTitle title='剧照' />
            <ImgList data={JSON.parse(data.stageImg).list} />
        </>
    )

    const MovieBox = () => (
        <>
            <ListTitle title='预告片' />
            <VideoList data={JSON.parse(data.videos)} />
        </>
    )

    const AllBox = () => (
        <>
            <DirectorBox />
            <ActorBox />
            <ImgBox />
            <MovieBox />
        </>
    )

    return (
        <>
            <Info data={data}/>
            <Tab list={tabs} setActive={setTab} active={tab} />
            { tab === 0 && <ImgBox /> }
            { tab === 1 && <MovieBox /> }
            { tab === 2 && <DirectorBox /> }
            { tab === 3 && <ActorBox /> }
            { tab === 4 && <AllBox /> }
            <Footer />
        </>
    )
}

export default React.memo(Detail)