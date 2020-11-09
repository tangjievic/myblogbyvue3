// 这里是axios封装文件
import axios from 'axios';
import message from 'ant-design-vue/lib/message';
import Cookies from 'js-cookie';
let SEVERURL = '';
// 环境的切换
if (process.env.NODE_ENV == 'development') {
    SEVERURL = 'http://www.wetcms.com'
} else {
    SEVERURL = 'https://tangjietop.cn'
}

axios.defaults.baseURL = SEVERURL;
// 请求超时
axios.defaults.timeout = 10000;

// post 头设置
axios.defaults.headers.post['Content-Type'] = 'application/json'

//请求拦截，这里的tooken 我是采用的cookie
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    const token = Cookies.get('token');
    const username = Cookies.get('username');
    token && (config.headers.token = token);
    username && (config.headers.username = username);
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(
    function(response) {
        // 对响应数据做点什么
        if (response.status === 200 || response.status === 201 || response.status === 204) {
            return Promise.resolve(response);
        }
        return response
    },
    function(error) {
        // 对响应错误做点什么
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    return Promise.reject(error.response)
                case 403:
                    return Promise.reject(error.response)
                default:
                    message.error(error.response.data.message)
                    break;
            }
        }
        return Promise.reject(error.response)
    }
);

// 封装get方法
export function getCgi(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(error => {
            reject(error.data)
        })
    })
}

// 封装post方法
export function postCgi(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then((res) => {
            resolve(res.data)
        }).catch((err) => {
            reject(err.data)
        })
    })
}