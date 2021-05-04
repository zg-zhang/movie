import React from "react";
import { useHistory } from 'react-router-dom'
import styles from '../../styles/title.module.less'
import routesConstants from "../../constants/routes";
import {setSessionStorage} from "../../tools/storage";
import storageConstants from "../../constants/storage";

interface titleProps {
    title: string,
    type: number
}

function Title(props: titleProps) {
    const { title, type } = props
    const history = useHistory()

    function handleMore() {
        setSessionStorage(storageConstants.listActive, type)
        history.push(routesConstants.explore)
    }

    return (
        <div className={styles.title}>
            <div className={styles.left}>
                {title}
            </div>
            <div className={styles.right} onClick={handleMore}>
                查看更多
            </div>
        </div>
    )
}

export default React.memo(Title)