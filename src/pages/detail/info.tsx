import React, {useEffect, useState} from "react";
import styles from '../../styles/detail.module.less'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {changeStar, isStar} from "../../events/users";

interface infoProps {
    data: any
}

interface tagsItem {
    name: string,
    id: string
}

function Info(props: infoProps) {
    const { data } = props
    const countries = data.countries && JSON.parse(data.countries)
    const country = countries && countries.length !== 0 ? countries[0].name : ''

    const [star, setStar] = useState(false)

    useEffect(() => {
        isStar(data.id).then(res => {
            setStar(res)
        })
    })

    function handleStar(id: string) {
        changeStar(id).then(res => {
            setStar(res)
        })
    }

    return (
        <div className={styles.info}>
            <div className={styles.cover}>
                <img src={data.cover} alt={data.name}/>
                <div
                    className={styles.shadow}
                    style={{ background: `url("${data.cover}")` }}
                />
                <div className={styles.background} />
            </div>
            <div className={styles.context}>
                <div className={styles.infoBox}>
                    <div className={styles.name}>
                        {data.name}
                    </div>

                    <div className={styles.nameEn}>
                        {data.nameEn}
                    </div>

                    <div className={styles.time}>
                        {country} {country && data.releaseDateNew ? '-' : null} {data.releaseDateNew}
                    </div>

                    <div className={styles.story}>
                        {data.story}
                    </div>

                    <div className={styles.tags}>
                        {data.tags && JSON.parse(data.tags).map((item: tagsItem) => {
                            return <span>{item.name}</span>
                        })}
                    </div>
                </div>
                <div className={styles.buttonBox} onClick={() => handleStar(data.id)}>
                    <div className={styles.star}>
                        <FontAwesomeIcon icon={faHeart} style={{ marginRight: '8px' }}/>
                        { star ? '已收藏' : '收藏'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Info)