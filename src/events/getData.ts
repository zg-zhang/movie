import request from "../tools/request";
import urlConstants from "../constants/url";

export const getMain = async <T>() => {
    return await request.get<T>(urlConstants.getAllData)
}

export const getList = async <T>() => {
    return await request.get<T>(urlConstants.getAllList)
}

export const getDetail = async <T>(id: string) => {
    return await request.get<T>(urlConstants.getDetail(id))
}