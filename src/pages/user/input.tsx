import React, {useState} from "react";
import classNames from "classnames";
import styles from '../../styles/user.module.less'

interface userInputProps {
    placeholder: string,
}

const UserInput = React.forwardRef((props: userInputProps, ref: any) => {
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
            <div>
                <input
                    ref={ref}
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

export default React.memo(UserInput)