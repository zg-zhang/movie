import React, {useState} from "react";
import { faPhoneAlt, faLock } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assert/logo.png'
import styles from '../../styles/login.module.less'
import LoginInput from "./input";
import LoginButton from "./button";

function Login() {
    const [login, setLogin] = useState(true)
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    function handleChangeLogin() {
        setLogin(!login)
        setPhone('')
        setPassword('')
    }

    const LoginBox = () => (
        <>
            <div className={styles.title}>登录时光网账号</div>
            <LoginInput
                type='text'
                placeholder='手机号'
                icon={faPhoneAlt}
                value={phone}
                setValue={setPhone}
            />
            <LoginInput
                type='password'
                placeholder='密码'
                icon={faLock}
                value={password}
                setValue={setPassword}
            />
            <LoginButton text='登录' />
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
                value={phone}
                setValue={setPhone}
            />
            <LoginInput
                type='password'
                placeholder='密码'
                icon={faLock}
                value={password}
                setValue={setPassword}
            />
            <LoginButton text='注册' />
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