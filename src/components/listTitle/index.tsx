import React from "react";
import styles from './index.module.less'

function ListTitle({title}: {title: string}) {
    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default React.memo(ListTitle)