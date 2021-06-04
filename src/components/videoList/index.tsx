import React from "react";
import Player from "griffith";
import styles from './index.module.less'
import LazyLoad from "react-lazyload";

interface itemProps {
    url: string
    hightUrl: string
    img: string
    title: string
}

const Item = ({item}: {item: itemProps}) => (
    <div className={styles.item}>
        <div className={styles.movie}>
            <LazyLoad once>
                <Player
                    locale={'zh-Hans'}
                    cover={item.img}
                    title={item.title}
                    hiddenPlayButton={true}
                    // @ts-ignore
                    sources={{hd: {play_url: item.hightUrl}}}
                />
            </LazyLoad>
        </div>
        <div className={styles.title}>{item.title}</div>
    </div>
)

function VideoList({data}: {data: itemProps[]}) {
    console.log(data);

    return (
        <div className={styles.list}>
            {
                data.map(item => (
                    <Item item={item} />
                ))
            }
        </div>
    )
}

export default React.memo(VideoList)