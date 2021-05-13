import React from "react";
import { useHistory } from 'react-router-dom'
import styles from '../../styles/header.module.less'
import routesConstants from "../../constants/routes";

function HeaderAvatar() {
    const history = useHistory()

    function handleClick() {
        history.push(routesConstants.login)
    }

    return (
        <>
            <img
                className={styles.avatar}
                src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60"
                alt="头像"
                onClick={handleClick}
            />
        </>
    )
}

export default React.memo(HeaderAvatar)