import React, {useContext} from "react";
import { useHistory } from 'react-router-dom'
import styles from '../../styles/header.module.less'
import routesConstants from "../../constants/routes";

import { DataContext } from "../../contexts/dataContextProvider";
import {getLocalStorage} from "../../tools/storage";
import storageConstants from "../../constants/storage";

function HeaderAvatar() {
    const history = useHistory()
    const { data } = useContext(DataContext)
    const avatar = data.avatar

    function handleClick() {
        const info = getLocalStorage(storageConstants.userInfo)
        history.push(info ? routesConstants.user : routesConstants.login)
    }

    return (
        <>
            <img
                className={styles.avatar}
                src={avatar}
                alt="头像"
                onClick={handleClick}
            />
        </>
    )
}

export default React.memo(HeaderAvatar)