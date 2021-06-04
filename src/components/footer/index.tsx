import React from "react";
import styles from './index.module.less'

function Footer() {
    return (
        <div className={styles.footer}>
            <p className={styles.author}>
                MADE BY <a href="https://github.com/zg-zhang">zeguo_zhang</a>
            </p>
            <p className={styles.version}>
                v0.0.1
            </p>
        </div>
    )
}

export default React.memo(Footer)