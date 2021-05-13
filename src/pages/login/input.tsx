import React, {useState} from "react";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../../styles/login.module.less'

interface loginInputProps {
    placeholder: string,
    value: string,
    setValue: any,
    icon: any,
    type: string
}

function LoginInput(props: loginInputProps) {
    const { icon, type, value, setValue } = props

    const [focus, setFocus] = useState(false)
    const [placeholder, setPlaceholder] = useState(props.placeholder)

    function handleFocus() {
        setFocus(true)
        setPlaceholder('')
    }

    function handleBlur() {
        setFocus(false)
        setPlaceholder(props.placeholder)
    }

    return (
        <div className={focus ? classNames(styles.inputBox, styles.focus) : classNames(styles.inputBox)}>
            <div className={focus ? classNames(styles.icon, styles.iconActive): classNames(styles.icon)}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <input
                    type={type}
                    className={styles.input}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export default React.memo(LoginInput)