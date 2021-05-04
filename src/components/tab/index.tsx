import React, {useState} from "react";
import styles from '../../styles/tab.module.less'
import TabButton from "./button";

interface tabProps {
    list: string[]
    active: number,
    setActive: any
}

function Tab(props: tabProps) {
    const { list, active, setActive } = props

    return (
        <div className={styles.tab}>
            {list && list.map((item, index) => {
                return <TabButton
                    text={item}
                    key={item}
                    index={index}
                    active={active}
                    setActive={setActive}
                />
            })}
        </div>
    )
}

export default React.memo(Tab)