import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom'
import {search} from "../../events/getData";
import styles from './index.module.less'
import List from "../../components/list";

function Search() {
    const params: ({id: string}) = useParams()
    const [list, setList] = useState([])
    const id = params.id

    useEffect(() => {
        search(id).then(res => {
            console.log(res);
            setList(res.data)
        })
    }, [id])

    const Zero = () => (
        <div className={styles.zero}>
            什么都没有找到哦～
        </div>
    )

    return (
        <>
            <h1 className={styles.explore}>搜索</h1>
            { !list.length && <Zero /> }
            { list.length && <List list={list} info='搜素' />}
        </>
    )
}

export default React.memo(Search)