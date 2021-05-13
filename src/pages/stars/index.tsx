import React, {useEffect, useState} from "react";
import styles from '../../styles/explore.module.less'
import List from "../../components/list";
import {getMain} from "../../events/getData";

function Stars() {
    const [list, setList] = useState([])

    useEffect(() => {
        getMain().then(res => {
            // @ts-ignore
            setList(res.data.popularList)
        })
    }, [])

    return (
        <>
            <h1 className={styles.explore}>收藏</h1>
            <div className={styles.playList}>
                <List list={list} info='我的收藏' />
            </div>
        </>
    )
}

export default React.memo(Stars)