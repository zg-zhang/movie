import request from "../tools/request";
import urlConstants from "../constants/url";
import {getLocalStorage, setLocalStorage} from "../tools/storage";
import storage from "../constants/storage";

interface loginObject {
    phone: string,
    password: string
}

export const doRegister = async (data: loginObject) => {
    return await request.post(urlConstants.register, data)
}

export const doLogin = async (data: loginObject) => {
    return await request.post(urlConstants.login, data)
}

export const changeStar = async (mid: string) => {
    const info = getLocalStorage(storage.userInfo)
    const uid = info.id
    const data: {stars: string} = await request.post(urlConstants.changeStar, {uid, mid})
    setLocalStorage(storage.userInfo, data)
    return JSON.parse(data.stars).indexOf(mid) !== -1
}

export const isStar = async (mid: string) => {
    const info = getLocalStorage(storage.userInfo)
    const stars = info && JSON.parse(info.stars)
    return stars && stars.indexOf(mid) !== -1
}

export const getStars = async (stars: string[]) => {
    return await request.post(urlConstants.getStars, {stars})
}