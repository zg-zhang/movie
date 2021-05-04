import React, {useEffect, useState} from "react";
import LazyLoad from 'react-lazyload'
import styles from '../../styles/explore.module.less'
import Tab from "../../components/tab";
import {getList} from "../../events/getData";
import {getSessionStorage, setSessionStorage} from "../../tools/storage";
import storageConstants from "../../constants/storage";
import List from "../../components/list";

interface getListProps {
    data: never[]
}

function Explore() {
    const tabList = ['全部', '正在热映', '最受欢迎', '内地即将上映', '其他即将上映']
    const [active, setActive] = useState(0)
    const [list, setList] = useState([])

    useEffect(() => {
        const data = getSessionStorage(storageConstants.listData)
        if (data) {
            setList(data.data)
        } else {
            getList<getListProps>().then(res => {
                console.log(res)
                setSessionStorage(storageConstants.listData, res.data)
                setList(res.data.data)
            })
        }
    }, [])

    return (
        <>
            <h1 className={styles.explore}>发现</h1>
            <Tab list={tabList} active={active} setActive={setActive}/>
            <div className={styles.playList}>
                <LazyLoad offset={200} once>
                    { active === 0 ? <List list={list} info='全部影片' /> : null}
                    { active === 1 ? <List list={list} info='正在热映' limit='0'/> : null}
                    { active === 2 ? <List list={list} info='最受欢迎' limit='3'/> : null}
                    { active === 3 ? <List list={list} info='内地即将上映' limit='1'/> : null}
                    { active === 4 ? <List list={list} info='其他即将上映' limit='2'/> : null}
                </LazyLoad>
            </div>
        </>
    )
}

export default Explore