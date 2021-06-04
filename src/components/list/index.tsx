import React, {useEffect, useState} from "react";
import styles from '../../styles/list.module.less'
import ListItem from "./item";
import {getLocalStorage} from "../../tools/storage";
import storage from "../../constants/storage";

interface listProps {
    list: any[],
    info: string,
    limit?: string
    hideStar?: boolean
}

interface itemProps {
    type: string,
    isPopular: string
}

function List(props: listProps) {
    const { list, info, limit, hideStar } = props


    const [stars, setStars] = useState([])

    useEffect(() => {
        const info = getLocalStorage(storage.userInfo)
        if (info) setStars(info.stars)
    }, [])

    const isShow = (item: itemProps, limit: string) => item.type.indexOf(limit) !== -1 || (limit === '3' && item.isPopular === '1')

    return (
        <div className={styles.list}>
            {
                !limit ?
                list.map(item => {
                    return <ListItem key={item.id} data={item} info={info} stars={stars} hideStar={hideStar}/>
                }) :
                list.map(item => {
                    return isShow(item, limit) ? <ListItem key={item.id} data={item} info={info} stars={stars} hideStar={hideStar}/> : null
                })
            }
        </div>
    )
}

export default React.memo(List)