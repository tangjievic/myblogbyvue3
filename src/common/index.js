//请求文章列表
import Cookies from 'js-cookie';
import Model from '../wetui/base/modal/modal';
import $alert from '../wetui/base/alert/alert';
import $ from 'jquery';
let SEVERURL = '';
// 环境的切换
if (process.env.NODE_ENV == 'development') {
    SEVERURL = 'http://www.wetcms.com'
} else {
    SEVERURL = 'https://tangjietop.cn'
}
//登录退出函数
const logOutEvent = (username, token) => {
    Model({
        type: 'info',
        content: '确认退出登录？',
        confirm: () => {
            Cookies.remove(username);
            Cookies.remove(token);
            $alert({
                type: 'success',
                content: '退出成功'
            })
            window.open(`${SEVERURL}/user#/login`)
        }
    }, $)
}

export {
    logOutEvent
}