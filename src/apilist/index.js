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

const getSys = () => {
    return getCgi('setsys/getmsg', {})
}
const editeSys = (params) => {
    return postCgi('setsys/edite', params)
}

const getFriendLink = () => {
    return getCgi('friendlink/get', {})
}
const addFriendLink = (params) => {
    return postCgi('friendlink/add', params)
}

const addCate = (pramas) => {
    return postCgi('cate/add', pramas)
}
const editeCate = (params) => {
    return postCgi('cate/edite', params)
}
const getCate = () => {
    return getCgi('cate/get', {})
}

const addTag = (pramas) => {
    return postCgi('tag/add', pramas)
}
const editeTag = (params) => {
    return postCgi('tag/edite', params)
}
const getTag = () => {
    return getCgi('tag/get', {})
}

const getUserLisr = (params) => {
    return getCgi('user/list', params)
}

const getArtList = (params) => {
    return getCgi('art/list', params)
}

const addArt = (params) => {
    return postCgi('art/add', params)
}

const editeArt = (params) => {
    return postCgi('art/edite', params)
}

export {
    getAdminList,
    getAdminMsg,
    addAdmin,
    deleAdmin,
    addVcate,
    deleVcate,
    editeVcate,
    getVcate,
    getSys,
    editeSys,
    getFriendLink,
    addFriendLink,
    addCate,
    editeCate,
    getCate,
    addTag,
    editeTag,
    getTag,
    getUserLisr,
    getArtList,
    addArt,
    editeArt
}