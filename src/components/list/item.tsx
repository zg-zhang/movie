import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/list.module.less'

interface dataType {
    cover: string,
    name: string,
    nameEn: string,
}

interface listItemProps {
    data: dataType
    info: string
}

function ListItem(props: listItemProps) {
    const { data, info } = props

    return (
        <div className={styles.item}>
            <div className={styles.box}>
                <div className={styles.shade}>
                    <button>
                        <FontAwesomeIcon className={styles.icon} icon={faHeart} />
                    </button>
                </div>
                <div className={styles.cover}>
                    <img src={data.cover} alt={data.name}/>
                </div>
                <div
                    className={styles.shadow}
                    style={{ background: `url("${data.cover}")`}}
                />
            </div>

            <div className={styles.text}>
                <div className={styles.title}>
                    <a>{data.name}</a>
                </div>
                <div className={styles.info}>
                    <span>{data.nameEn || info}</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ListItem)