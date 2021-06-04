import React, {useContext, useEffect, useRef, useState} from "react";
import { useHistory } from 'react-router-dom'
import { faPhoneAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assert/logo.png'
import styles from '../../styles/login.module.less'
import LoginInput from "./input";
import LoginButton from "./button";
import { doLogin, doRegister } from "../../events/users";
import {checkHas, checkLength, checkPhone, throttle, toast} from "../../tools";
import useKeyPress from "../../hooks/useKeyPress";
import {getLocalStorage, setLocalStorage} from "../../tools/storage";
import storageConstants from "../../constants/storage";
import {DataContext} from "../../contexts/dataContextProvider";
import routesConstants from "../../constants/routes";

function Login() {
    const [login, setLogin] = useState(true) // 显示登录还是注册

    const phoneRef = useRef({value: ''})
    const passwordRef = useRef({value: ''})

    // @ts-ignore
    const { changeData } = useContext(DataContext)
    const history = useHistory()

    useEffect(() => {
        const info = getLocalStorage(storageConstants.userInfo)
        if (info) history.push(routesConstants.user)
    }, [])

    const loginAction = throttle(handleLogin, 1100)
    const registerAction = throttle(handleRegister, 1100)

    useKeyPress(['13', '108'], () => {
        if (login) {
            loginAction()
        } else {
            registerAction()
        }
    })

    function handleChangeLogin() {
        setLogin(!login)
    }

    const pre = (phone: string, password: string) => checkHas(phone, '手机号') && checkHas(password, '密码') && checkPhone(phone) && checkLength(password, 8, '密码')

    function handleLogin() {
        const phone = phoneRef.current.value
        const password = passwordRef.current.value
        if (pre(phone, password)) {
            // @ts-ignore
            doLogin({phone, password}).then((res: {data: any, code: number}) => {
                console.log(res)
                // @ts-ignore
                toast(res.data.status, res.message, 3)
                if (res.code === 200) {
                    setLocalStorage(storageConstants.token, res.data.token)
                    setLocalStorage(storageConstants.userInfo, res.data.info)
                    changeData(res.data.info)
                    history.push('/')
                }
            })
        }
    }

    function handleRegister() {
        const phone = phoneRef.current.value
        const password = passwordRef.current.value
        if (pre(phone, password)) {
            doRegister({phone, password}).then(res => {
                console.log(res)
                // @ts-ignore
                toast(res.data, res.message, 3)
                if (res.data === 'success') {
                    handleChangeLogin()
                }
            })
        }
    }

    const LoginBox = () => (
        <>
            <div className={styles.title}>登录时光网账号</div>
            <LoginInput
                type='text'
                placeholder='手机号'
                icon={faPhoneAlt}
                ref={phoneRef}
            />
            <LoginInput
                type='password'
                placeholder='密码'
                icon={faLock}
                ref={passwordRef}
            />
            <LoginButton text='登录' click={throttle(handleLogin, 1100)}/>
            <span onClick={handleChangeLogin}>还没有账户？去注册</span>
        </>
    )

    const RegisterBox = () => (
        <>
            <div className={styles.title}>注册时光网账号</div>
            <LoginInput
                type='text'
                placeholder='手机号'
                icon={faPhoneAlt}
                ref={phoneRef}
            />
            <LoginInput
                type='password'
                placeholder='密码'
                icon={faLock}
                ref={passwordRef}
            />
            <LoginButton text='注册' click={throttle(handleRegister, 1100)}/>
            <span onClick={handleChangeLogin}>有账户了？去登录</span>
        </>
    )

    return (
        <div className={styles.box}>
            <img className={styles.logo} src={logo} alt="logo"/>
            { login ? <LoginBox /> : <RegisterBox />}
        </div>
    )
}

export default React.memo(Login)