import request from "../tools/request";
import urlConstants from "../constants/url";

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