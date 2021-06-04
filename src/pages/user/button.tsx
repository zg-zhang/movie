import React from "react";
import styles from '../../styles/user.module.less'
import classNames from "classnames";

interface userButtonProps {
    text: string
    type: 'primary' | 'warning'
    onClick: any
}

function UserButton(props: userButtonProps) {
    const { text, type, onClick } = props

    return (
        <div className={styles.buttonBox} onClick={onClick}>
            <div className={classNames(styles.button, styles[type])}>
                {text}
            </div>
        </div>
    )
}

export default React.memo(UserButton)