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

export {
    getAdminList,
    getAdminMsg,
    addAdmin,
    deleAdmin
}