import React, {useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import LazyLoad from "react-lazyload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/list.module.less'
import {changeStar, isStar} from "../../events/users";
import classNames from "classnames";

interface dataType {
    cover: string,
    name: string,
    nameEn: string,
    id: string,
}

interface listItemProps {
    data: dataType
    info: string
    stars: string[]
    hideStar?: boolean
}

function ListItem(props: listItemProps) {
    const { data, info, stars, hideStar } = props
    const history = useHistory()

    const [star, setStar] = useState(false)

    function handleClick(e: any, id: string) {
        const name = e.target.nodeName
        if (name === 'BUTTON' || name === 'path' || name === 'svg') return
        history.push(`/detail/${id}`)
    }

    useEffect(() => {
        setStar(stars.indexOf(data.id) !== -1)
    }, [])

    function handleClickStar() {
        changeStar(data.id).then(res => {
            setStar(res)
        })
    }

    return (
        <LazyLoad once height={400}>
            <div className={styles.item}>
                <div className={styles.box}>
                    <div className={styles.shade} onClick={(e) => handleClick(e, data.id)}>
                        { hideStar || <button onClick={handleClickStar}>
                            <FontAwesomeIcon
                                className={star ? classNames(styles.icon, styles.active) : styles.icon}
                                icon={faHeart} />
                        </button> }
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
                    <div className={styles.title} onClick={e => handleClick(e, data.id)}>
                        <span>{data.name}</span>
                    </div>
                    <div className={styles.info}>
                        <span>{data.nameEn || info}</span>
                    </div>
                </div>
            </div>
        </LazyLoad>
    )
}

export default React.memo(ListItem)