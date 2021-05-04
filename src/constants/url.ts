const urlConstants = {
    baseURL: 'http://127.0.0.1:10000',

    getAllData: '/main/getAllData',
    getAllList: '/main/getAllList',
    getDetail: (id: string) =>  `/main/getDetail/${id}`,
}

export default urlConstants