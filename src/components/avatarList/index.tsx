import React from "react";
import Zmage from "react-zmage"
import styles from './index.module.less'
import LazyLoad from "react-lazyload";

interface avatarListProps {
    data: itemProps[]
    actor?: boolean
}

interface itemProps {
    name: string
    img: string
    roleName: string
    nameEn: string
}

const Item = ({ item, actor }: {item: itemProps, actor?: boolean}) => (
    <div className={styles.item}>
        <div className={styles.cover}>
            <Zmage src={item.img} alt=""/>
        </div>
        <div className={styles.name}>
            {item.name || item.nameEn}
        </div>
        {actor && <div className={styles.roleName}>{item.roleName && `饰演：${item.roleName}`}</div>}
    </div>
)

function AvatarList(props: avatarListProps) {
    const { data, actor } = props

    return (
        <div className={styles.list}>
            {
                data.map(item => {
                    return (
                        <LazyLoad once>
                            <Item item={item} actor={actor}/>
                        </LazyLoad>
                    )
                })
            }
        </div>
    )
}

export default React.memo(AvatarList)