import { reactive, toRefs } from "vue";
import Cookies from 'js-cookie';
import SendCode from '../../../components/SendCode';
import message from 'ant-design-vue/lib/message';
import { useRouter, useRoute } from 'vue-router';
import { userLogin, getCode, userCreate, userFindPassword } from '../../apilist'
export default {
    components: {
        SendCode
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const status = reactive({
            hdtitle: '登录页·登录',
            submitdatascence: 0, // 0登录，1注册，2忘记密码
            repassword: ''
        })
        const registerdata = reactive({
            username: '',
            email: '',
            password: '',
            code: ''
        })
        const logindata = reactive({
            email: '',
            password: '',
            code: ''
        })
        const finddata = reactive({
            email: '',
            password: '',
            code: ''
        })
        const createUser = () => {
            if (registerdata.password !== status.repassword) {
                message.error("两次密码输入不一致，请检查")
                return
            }
            userCreate(registerdata).then(res => {
                message.success(res.message)
            })
        }
        const usertoLogin = () => {
            userLogin(logindata).then((res) => {
                message.success(res.message)
                Cookies.set('token', res.result.token, {
                    expires: 3
                });
                Cookies.set('username', res.result.username, {
                    expires: 3
                });

                setTimeout(() => {
                    if (route.query.redirect) {
                        router.push({
                            name: route.query.redirect
                        })
                    } else {
                        window.history.go(-1)
                    }
                }, 2000)
            })
        }

        const findPasswrod = () => {
            if (finddata.password !== status.password) {
                message.error("两次密码输入不一致，请检查")
                return
            }
            userFindPassword(finddata).then((res) => {
                message.success(res.message)
            })
        }

        const statuChange = (typenum) => {
            status.submitdatascence = typenum;
            status.repassword = '';
            switch (typenum) {
                case 0:
                    status.hdtitle = '登录页·登录';
                    break;
                case 1:
                    status.hdtitle = '登录页·注册';
                    break;
                case 2:
                    status.hdtitle = '登录页·找回密码';
                    break;
                default:
                    status.hdtitle = "登录页";
                    break
            }
        }
        const goBack = () => {
            router.go(-1)
        }
        const sendEmailCode = () => {
            let email = '';
            switch (status.submitdatascence) {
                case 0:
                    email = logindata.email
                    break;
                case 1:
                    email = registerdata.email
                    break;
                case 2:
                    email = logindata.email
                    break;
                default:
                    email = logindata.email
                    break
            }
            if (!email) {
                message.error('邮箱为空发送失败,请稍后')
                return
            }
            getCode({
                email
            }).then(res => {
                message.success(res.message)
            })
        }
        return {
            ...toRefs(status),
            statuChange,
            createUser,
            usertoLogin,
            findPasswrod,
            goBack,
            sendEmailCode,
            registerdata,
            logindata,
            finddata
        }
    }
}