import { reactive, toRefs } from "vue";
import SendCode from '../../../components/SendCode';
import $alert from '../../../wetui/base/alert/alert';
import { useRouter } from 'vue-router';
import { userLogin,getCode,userCreate,userFindPassword} from '../../apilist'
export default {
    components:{
        SendCode
    },
    setup() {
        const router = useRouter();
        const status = reactive({
            hdtitle:'登录页·登录',
            submitdatascence: 0, // 0登录，1注册，2忘记密码
            repassword:''
        })
        const registerdata = reactive({
            username:'',
            email:'',
            password:'',
            code:''
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
        const createUser = ()=>{
            if(registerdata.password !== status.repassword){
                $alert({
                    content:"两次密码输入不一致，请检查",
                    type:'risk'
                })
                return
            }
            userCreate(registerdata).then(res=>{
                $alert({
                    content:res.message,
                    type:'success'
                })
            })
        }
        const usertoLogin = ()=>{
            userLogin(logindata).then((res) => {
                $alert({
                    content: res.message,
                    type: 'success'
                })
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

        const findPasswrod = ()=>{
            if(finddata.password !== status.password){
                $alert({
                    content:"两次密码输入不一致，请检查",
                    type:'risk'
                })
                return
            }
            userFindPassword(finddata).then((res)=>{
                $alert({
                    content:res.message,
                    type:'success'
                })
            })
        }

        const statuChange = (typenum) => {
            status.submitdatascence = typenum;
            status.repassword = '';
            switch(typenum){
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
        const goBack = () =>{
            router.go(-1)
        }
        const sendEmailCode = ()=>{
            let email = '';
            switch(status.submitdatascence){
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
            if(!email){
                $alert({
                    content: "邮箱为空发送失败,请稍后",
                    type: 'risk'
                })
                return
            }
            getCode({
                email
            }).then(res=>{
                $alert({
                    content: res.message,
                    type: 'success'
                })
            })
        }
        return{
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