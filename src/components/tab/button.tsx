import React from "react";
import classNames from "classnames";
import styles from '../../styles/tab.module.less'

interface tabButtonProps {
    text: string
    index: number
    active: number
    setActive: any
}

function TabButton(props: tabButtonProps) {
    const { text, index, active, setActive } = props

    return (
        <div
            onClick={() => setActive(index)}
            className={active === index ? classNames(styles.button, styles.active): styles.button}
        >
            {text}
        </div>
    )
}

export default React.memo(TabButton)