import { getCgi, postCgi } from './http';
//这里是主要处理多页面用户api请求
//文章收集
const userLikeArt = (params) => {
        return postCgi('user/likeart', params)
    }
    //文章点赞
const userCollectArt = (params) => {
        return postCgi('user/collecart', params)
    }
    // 查询文章是否被点赞被收集
const getArtLikeCollect = (params) => {
        return getCgi('user/getartlc', params)
    }
    // 文章评论
const giveRemak = (params) => {
        return postCgi('remark/add', params)
    }
    // 查询文章历史评论
const getHisRemark = (params) => {
    return getCgi('remark/get', params)
}
export {
    userLikeArt,
    userCollectArt,
    getArtLikeCollect,
    getHisRemark,
    giveRemak
}