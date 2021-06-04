import React from "react";
import styles from './index.module.less'
import LazyLoad from "react-lazyload";
import Zmage from "react-zmage";

const Item = ({data, index}: {data: {src: string, alt: string}[], index: number}) => (
    <div className={styles.item}>
        <LazyLoad once>
            <Zmage src={data[index].src} set={data} defaultPage={index} />
        </LazyLoad>
    </div>
)

function ImgList({data}: {data: {imgUrl: string}[]}) {
    const defaultImg:string = 'http://img5.mtime.cn/img1x/pi/7619088_1000X1000.jpg'
    const arr: {src: string, alt: string}[] = []

    data && data.map(item => {item.imgUrl !== defaultImg ? arr.push({src: item.imgUrl, alt: ''}) : null})

    return (
        <div className={styles.list}>
            {
                arr && arr.map((item, index) => {
                    return <Item index={index} data={arr} />
                })
            }
        </div>
    )
}

export default React.memo(ImgList)