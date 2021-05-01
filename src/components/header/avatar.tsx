import React from "react";
import styles from '../../styles/header.module.less'

function HeaderAvatar() {

    return (
        <>
            <img className={styles.avatar} src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60" alt="头像"/>
        </>
    )
}

export default React.memo(HeaderAvatar)