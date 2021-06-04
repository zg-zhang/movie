import React, {useCallback, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import styles from '../styles/mainLayout.module.less'

interface mainLayoutProps {
    children: React.ReactNode
}

function MainLayout(props: mainLayoutProps) {
    const location = useLocation()
    const { children } = props

    const onRouteChange = useCallback(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
            window.scrollTo(0,0)
        }
    }, [])

    useEffect(() => {
        onRouteChange()
        return () => onRouteChange()
    }, [location])

    return (
        <main className={styles.main}>
            { children }
        </main>
    )
}

export default React.memo(MainLayout)