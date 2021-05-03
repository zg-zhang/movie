import React from "react";
import styles from '../../styles/title.module.less'

interface titleProps {
    title: string,
    right?: string,
}

function Title(props: titleProps) {
    const { title, right } = props

    return (
        <div className={styles.title}>
            <div className={styles.left}>
                {title}
            </div>
            <div className={styles.right}>
                { right ? right : '' }
            </div>
        </div>
    )
}

export default React.memo(Title)