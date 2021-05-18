import React from "react";
import styles from '../../styles/user.module.less'

const Title = ({title}: {title: string}) => (
    <h3 className={styles.title}>
        {title}
    </h3>
)

function User() {
    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <Title title='基础信息' />

                <div className={styles.footer}>
                    <p className={styles.author}>
                        MADE BY <a href="https://github.com/zg-zhang">zeguo_zhang</a>
                    </p>
                    <p className={styles.version}>
                        v0.0.1
                    </p>
                </div>
            </div>
        </div>
    )
}

export default React.memo(User)