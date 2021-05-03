import React from "react";
import styles from '../../styles/list.module.less'
import ListItem from "./item";

interface listProps {
    list: any[]
}

function List(props: listProps) {
    const { list } = props

    return (
        <div className={styles.list}>
            {list && list.map(item => {
                return <ListItem key={item.id} data={item} />
            })}
        </div>
    )
}

export default React.memo(List)