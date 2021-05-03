import request from "../tools/request";
import urlConstants from "../constants/url";

export const getMain = async <T>() => {
    return await request.get<T>(urlConstants.getAllData)
}
