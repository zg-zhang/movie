import React from "react";
import styles from '../../styles/login.module.less'

interface loginButtonProps {
    text: string,
    click: any
}

function LoginButton(props: loginButtonProps) {
    const { text, click } = props

    return (
        <>
            <button className={styles.button} onClick={click}>{text}</button>
        </>
    )
}

export default React.memo(LoginButton)