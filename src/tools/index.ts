import { message } from "antd";

// 全局提示封装
export const toast = (type: 'success'|'error'|'warning', content: string, duration?: number) => {
    duration = duration || 1
    // @ts-ignore
    message[type]({
        content,
        duration,
        style: {
            marginTop: '64px'
        }
    })
}

// 防抖
export const debounce = (fn: Function, wait: number) => {
    let timer: number | null = null
    return function (...args: any) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            // @ts-ignore
            fn.apply(this, args)
        }, wait)
    }
}

// 节流
export const throttle = (fn: Function, wait: number) => {
    let prevTime = +new Date()
    return function (...args: any) {
        let nowTime = +new Date()
        if (nowTime - prevTime > wait) {
            prevTime = nowTime
            // @ts-ignore
            return fn.apply(this, args)
        }
    }
}

// 是否为空验证
export const checkHas = (str: string, message?: string): boolean => {
    message = `${message}不能为空哦～` || '数据不能为空哦～'
    if (!str) {
        toast("error", message)
        return false
    } else {
        return true
    }
}

// 长度验证
export const checkLength = (str: string, len: number, message?: string): boolean => {
    message = `${message}不能少低于${len}位哦～` || `数据不能低于${len}位哦～`
    if (str.length < len) {
        toast("error", message)
        return false
    } else {
        return true
    }
}

// 是否是手机号验证
export const checkPhone = (phone: string): boolean => {
    if (!(/^1[3456789]\d{9}$/.test(phone))) {
        toast("error", '请填写正确的手机号哦～')
        return false
    } else {
        return true
    }
}