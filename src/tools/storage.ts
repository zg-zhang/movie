function setSessionStorage(key: string, value: any): void {
    console.log(`[set sessionStorage] key: ${key} value: ${value}`)
    sessionStorage.setItem(key, JSON.stringify(value))
}

function getSessionStorage(key: string): any {
    const value = JSON.parse(<string>sessionStorage.getItem(key))
    console.log(`[get sessionStorage] key: ${key} value: ${value}`)
    return value
}

function removeSessionStorage(key: string): void {
    console.log(`[remove sessionStorage] key: ${key}`)
    sessionStorage.removeItem(key)
}

function clearSessionStorage(): void {
    console.log(`[clear sessionStorage]`)
    sessionStorage.clear()
}

function setLocalStorage(key: string, value: any): void {
    console.log(`[set localStorage] key: ${key} value: ${value}`)
    localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key: string): any {
    const value = JSON.parse(<string>localStorage.getItem(key))
    console.log(`[get localStorage] key: ${key} value: ${value}`)
    return value
}

function removeLocalStorage(key: string): void {
    console.log(`[remove localStorage] key: ${key}`)
    localStorage.removeItem(key)
}

function clearLocalStorage(): void {
    console.log(`[clear localStorage]`)
    localStorage.clear()
}

export {
    setSessionStorage,
    getSessionStorage,
    removeSessionStorage,
    clearSessionStorage,
    setLocalStorage,
    getLocalStorage,
    removeLocalStorage,
    clearLocalStorage
}