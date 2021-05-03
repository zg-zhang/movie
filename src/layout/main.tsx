import React from "react";
import styles from '../styles/mainLayout.module.less'

interface mainLayoutProps {
    children: React.ReactNode
}

function MainLayout(props: mainLayoutProps) {
    const { children } = props

    return (
        <main className={styles.main}>
            { children }
        </main>
    )
}

export default React.memo(MainLayout)