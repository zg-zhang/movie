import React, {useEffect} from "react";
import { useParams } from 'react-router-dom'
import {getDetail} from "../../events/getData";

interface paramsProps {
    id: string
}

function Detail() {
    const { id } = useParams<paramsProps>()

    useEffect(() => {
        getDetail(id).then(res => {
            console.log(res);
        })
    }, [])

    return (
        <>
            {id}
        </>
    )
}

export default React.memo(Detail)