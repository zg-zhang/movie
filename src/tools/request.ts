import axios from 'axios'
import urlConstants from "../constants/url";

const request = axios.create({
    baseURL: urlConstants.baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

request.interceptors.response.use(res => res.data, err => {
    let config = err.config
    if (!config) return Promise.reject(err)

    config.__retryCount = config.__retryCount || 0

    if (config.__retryCount >= 10) {
        return Promise.reject(err)
    }

    config.__retryCount += 1
    console.log(`[请求超时 重新请求 第${config.__retryCount}次] @${config.url}`)

    let backoff = new Promise<void>(resolve => {
        setTimeout(() => {
            resolve()
        }, 3000)
    })

    return backoff.then(() => request(config))
})

export default request