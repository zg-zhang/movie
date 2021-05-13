import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {getDetail} from "../../events/getData";
import Info from "./info";

interface paramsProps {
    id: string
}

interface detailProps {
    data: any
}

function Detail() {
    const { id } = useParams<paramsProps>()
    const [data, setData] = useState({})

    useEffect(() => {
        getDetail<detailProps>(id).then(res => {
            console.log(res);
            setData(res.data)
        })
    }, [])

    return (
        <>
            <Info data={data}/>
        </>
    )
}

export default React.memo(Detail)