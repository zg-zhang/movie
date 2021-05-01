import React, {useEffect, useState} from "react";
import styles from '../../styles/header.module.less'
import HeaderButton from "./button";
import HeaderSearch from "./search";
import HeaderAvatar from "./avatar";
import {library, main, rank} from "../../constants/routes";
import {getSessionStorage, setSessionStorage} from "../../tools/storage";
import storage from '../../constants/storage'

function Header() {
    const [tab, setTab] = useState(main)

    useEffect(() => {
        const tabSession = getSessionStorage(storage.tab)
        if (tabSession) setTab(tabSession)
    }, [])

    function handleChangeTab(path: string): void {
        setTab(path)
        setSessionStorage(storage.tab, path)
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1>时光电影</h1>
            </div>
            <div className={styles.tab}>
                <HeaderButton path={main} active={tab} setActive={handleChangeTab}>首页</HeaderButton>
                <HeaderButton path={rank} active={tab} setActive={handleChangeTab}>榜单</HeaderButton>
                <HeaderButton path={library} active={tab} setActive={handleChangeTab}>影库</HeaderButton>
            </div>
            <div className={styles.rightPart}>
                <HeaderSearch />
                <HeaderAvatar />
            </div>
        </div>
    )
}

export default React.memo(Header)