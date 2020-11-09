import { getCgi, postCgi } from './http';

const getCate = () => {
    return getCgi('cate/get', {})
}

const getArtList = (params) => {
    return getCgi('art/list', params)
}

const userLogin = (params) => {
    return postCgi('user/login', params)
}

const getCode = (params) => {
    return postCgi('user/getcode', params)
}

const userCreate = (params) => {
    return postCgi('user/create', params)
}
const userFindPassword = (params) => {
    return postCgi('user/forget', params)
}
const getUserMsg = () => {
    return getCgi('user/getmsg', {})
}

export {

    getCate,
    getArtList,
    userLogin,
    userCreate,
    userFindPassword,
    getCode
}