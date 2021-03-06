import React, {useState} from "react";
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from '../../styles/login.module.less'

interface loginInputProps {
    placeholder: string,
    icon: any,
    type: string
}

const LoginInput = React.forwardRef((props: loginInputProps, ref: any) => {
    const { icon, type } = props

    const [focus, setFocus] = useState(false)
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [text, setText] = useState('')

    function handleFocus() {
        setFocus(true)
        setPlaceholder('')
    }

    function handleBlur() {
        setFocus(false)
        setPlaceholder(props.placeholder)
    }

    function handleChange(value: string) {
        setText(value)
    }

    return (
        <div className={focus ? classNames(styles.inputBox, styles.focus) : classNames(styles.inputBox)}>
            <div className={focus ? classNames(styles.icon, styles.iconActive): classNames(styles.icon)}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div>
                <input
                    ref={ref}
                    type={type}
                    className={styles.input}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={text}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    )
})

export default React.memo(LoginInput)