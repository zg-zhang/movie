import React from "react";
import styles from '../../styles/infoList.module.less'

interface infoListTitleProps {
    title: string
}

function InfoListTitle(props: infoListTitleProps) {
    const { title } = props

    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default React.memo(InfoListTitle)