import React from "react";
import styles from '../../styles/list.module.less'
import ListItem from "./item";

interface listProps {
    list: any[],
    info: string,
    limit?: string
}

interface itemProps {
    type: string,
    isPopular: string
}

function List(props: listProps) {
    const { list, info, limit } = props

    const isShow = (item: itemProps, limit: string) => item.type.indexOf(limit) !== -1 || (limit === '3' && item.isPopular === '1')

    return (
        <div className={styles.list}>
            {
                !limit ?
                list.map(item => {
                    return <ListItem key={item.id} data={item} info={info}/>
                }) :
                list.map(item => {
                    return isShow(item, limit) ? <ListItem key={item.id} data={item} info={info}/> : null
                })
            }
        </div>
    )
}

export default React.memo(List)