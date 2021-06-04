import React, {useContext, useEffect, useState} from "react";
import { useHistory } from 'react-router-dom'
import styles from '../../styles/user.module.less'
import Footer from "../../components/footer";
import UserButton from "./button";
import storage from "../../constants/storage";
import {clearLocalStorage, getLocalStorage} from "../../tools/storage";
import {DataContext} from "../../contexts/dataContextProvider";
import urlConstants from "../../constants/url";
import UserInput from "./input";
import UserItem from "./item";

const Title = ({title}: {title: string}) => (
    <h3 className={styles.title}>
        {title}
    </h3>
)

function User() {
    const history = useHistory()
    // @ts-ignore
    const { changeData, data } = useContext(DataContext)
    const [id, setId] = useState('')
    const [nickName, setNickName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        const userInfo = getLocalStorage(storage.userInfo)
        setAvatar(userInfo.avatar)
        setId(userInfo.id)
        setNickName(userInfo.nickName)
        setPhone(userInfo.phone)
    }, [])

    function handleLogout() {
        clearLocalStorage()
        changeData({avatar: urlConstants.baseAvatar})
        history.push('/')
    }

    function handleSave() {

    }

    return (
        <div className={styles.box}>
            <div className={styles.content}>
                <div className={styles.avatar}>
                    <img src={avatar} alt=""/>
                </div>
                <Title title='基础信息' />
                <UserItem text={'id'} placeholder={id} />
                <UserItem text={'昵称'} placeholder={nickName} />
                {/*<UserItem text={'个性签名'} placeholder={'滴滴滴'} />*/}
                <Title title='账户信息' />
                <UserItem text={'手机号'} placeholder={phone} />
                {/*<UserItem text={'密码'} placeholder={'123456'} />*/}
                {/*<UserButton text='保 存' type='primary' onClick={handleSave}/>*/}
                <UserButton text='登 出' type='warning' onClick={handleLogout}/>
                <Footer />
            </div>
        </div>
    )
}

export default React.memo(User)