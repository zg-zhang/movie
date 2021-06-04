import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import styles from '../../styles/explore.module.less'
import List from "../../components/list";
import Footer from "../../components/footer";
import {getLocalStorage} from "../../tools/storage";
import storage from "../../constants/storage";
import routesConstants from "../../constants/routes";
import {getStars} from "../../events/users";

function Stars() {
    const defaultList = Array(10).fill({})

    const [list, setList] = useState(defaultList)
    const history = useHistory()

    useEffect(() => {
        const info = getLocalStorage(storage.userInfo)
        if (info) {
            const stars = typeof info.stars === 'string' ? JSON.parse(info.stars) : info.stars
            getStars(stars).then(res => {
                // @ts-ignore
                setList(res)
            })
        } else {
            history.push(routesConstants.login)
        }
    }, [])

    return (
        <>
            <h1 className={styles.explore}>收藏</h1>
            <div className={styles.playList}>
                <List list={list} info='我的收藏' hideStar/>
            </div>
            <Footer />
        </>
    )
}

export default React.memo(Stars)