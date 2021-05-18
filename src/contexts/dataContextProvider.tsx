import React, {useEffect, useState} from "react";
import urlConstants from "../constants/url";
import {getLocalStorage} from "../tools/storage";
import storageConstants from "../constants/storage";

const defaultInfo = {
    id: '',
    phone: '',
    nickName: '',
    avatar: urlConstants.baseAvatar,
    signature: '',
}

export const DataContext = React.createContext({data: defaultInfo})

function DataContextProvider({ children }: { children: any}) {
    const [data, setData] = useState({
        id: '',
        phone: '',
        nickName: '',
        avatar: urlConstants.baseAvatar,
        signature: '',
    })

    useEffect(() => {
        const userInfo = getLocalStorage(storageConstants.userInfo)
        userInfo ? setData(userInfo) : null
    }, [])

    return (
        // @ts-ignore
        <DataContext.Provider value={{data, changeData: setData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider