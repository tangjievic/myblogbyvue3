import { getCgi, postCgi } from './http';

const getVcate = () => {
    return getCgi('vcate/get', {})
}
const getFriendLink = () => {
    return getCgi('friendlink/get', {})
}
const getCate = () => {
    return getCgi('cate/get', {})
}
const getTag = () => {
    return getCgi('tag/get', {})
}
const getArtList = (params) => {
    return getCgi('art/list', params)
}

const getCode = (params) => {
    return postCgi('user/getcode', params)
}
const userLogin = (params) => {
    return postCgi('user/login', params)
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
const signinScroe = (parmas) => {
    return postCgi('user/signinscroe', parmas)
}
export {
    getVcate,
    getFriendLink,
    getCate,
    getTag,
    getArtList,
    userLogin,
    userCreate,
    userFindPassword,
    getCode,
    getUserMsg,
    signinScroe
}