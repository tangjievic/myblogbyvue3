import { getCgi, postCgi } from './http';
//这里就是统一的api管理
const getAdminList = () => {
    return getCgi('admin/list', {})
}
const getAdminMsg = () => {
    return getCgi('admin/msg', {})
}
const addAdmin = (pramas) => {
    return postCgi('admin/add', pramas)
}
const deleAdmin = (params) => {
    return postCgi('admin/delete', params)
}

const addVcate = (params) => {
    return postCgi('vcate/add', params)
}
const deleVcate = (params) => {
    return postCgi('vcate/delete', params)
}
const editeVcate = (params) => {
    return postCgi('vcate/edite', params)
}
const getVcate = () => {
    return getCgi('vcate/get', {})
}

export {
    getAdminList,
    getAdminMsg,
    addAdmin,
    deleAdmin,
    addVcate,
    deleVcate,
    editeVcate,
    getVcate
}