import React from "react";
import styles from '../../styles/user.module.less'
import UserInput from "./input";

interface userItemProps {
    text: string
    placeholder: string
    ref: string
}

const UserItem = React.forwardRef((props: userItemProps, ref: any) => {
    const { text, placeholder } = props

    return (
        <div className={styles.item}>
            <div className={styles.left}>{text}</div>
            <div className={styles.right}>
                {placeholder}
                {/*<UserInput placeholder={placeholder} ref={ref}/>*/}
            </div>
        </div>
    )
})

export default React.memo(UserItem)