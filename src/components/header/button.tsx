import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import styles from "../../styles/header.module.less"

interface headerButtonProps {
    children: string,
    path: string,
    active: string,
    setActive: any
}

function HeaderButton(props: headerButtonProps) {
    const { children, path, active, setActive } = props

    return (
        <Link
            to={path}
            onClick={() => setActive(path)}
            className={path === active ? classNames(styles.button, styles.active) : classNames(styles.button)}
        >
            {children}
        </Link>
    )
}

export default React.memo(HeaderButton)