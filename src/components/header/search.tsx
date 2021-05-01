import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../../styles/header.module.less'
import classNames from "classnames";

function HeaderSearch() {

    const [focus, setFocus] = useState(false)
    const [placeholder, setPlaceholder] = useState('搜索')
    const [text, setText] = useState('')

    function handleFocus() {
        setFocus(true)
        setPlaceholder('')
    }

    function handleBlur() {
        setFocus(false)
        setPlaceholder('搜索')
    }

    return (
        <div className={focus ? classNames(styles.search, styles.focus) : classNames(styles.search)}>
            <div className={focus ? classNames(styles.icon, styles.iconActive) : classNames(styles.icon)}>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div>
                <input
                    className={styles.input}
                    type="text"
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </div>
        </div>
    )
}

export default React.memo(HeaderSearch)