import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom'
import styles from '../../styles/header.module.less'
import HeaderButton from "./button";
import HeaderSearch from "./search";
import HeaderAvatar from "./avatar";
import routesConstants from "../../constants/routes";
import {getSessionStorage, setSessionStorage} from "../../tools/storage";
import storage from '../../constants/storage'

function Header() {
    const [tab, setTab] = useState(routesConstants.main)
    const location = useLocation()

    useEffect(() => {
        let tabSession = getSessionStorage(storage.tab)
        tabSession = tabSession === location.pathname ? tabSession : location.pathname
        if (tabSession) setTab(tabSession)
    }, [location])

    function handleChangeTab(path: string): void {
        setTab(path)
        setSessionStorage(storage.tab, path)
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>时光电影</h1>
            </div>
            <div className={styles.tab}>
                <HeaderButton path={routesConstants.main} active={tab} setActive={handleChangeTab}>首页</HeaderButton>
                <HeaderButton path={routesConstants.explore} active={tab} setActive={handleChangeTab}>发现</HeaderButton>
                <HeaderButton path={routesConstants.library} active={tab} setActive={handleChangeTab}>影库</HeaderButton>
            </div>
            <div className={styles.rightPart}>
                <HeaderSearch />
                <HeaderAvatar />
            </div>
        </header>
    )
}

export default React.memo(Header)