import React from "react";
import styles from '../../styles/login.module.less'

interface loginButtonProps {
    text: string
}

function LoginButton(props: loginButtonProps) {
    const { text } = props

    return (
        <>
            <button className={styles.button}>{text}</button>
        </>
    )
}

export default React.memo(LoginButton)