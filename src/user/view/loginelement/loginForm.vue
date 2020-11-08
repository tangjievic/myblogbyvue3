<style lang="less">

</style>
<template>
    <div>
        <div class="text-center">
            <div>
                <h1>
                    <div class="wetui_logo"></div>
                    TANGJIE-BLOG
                </h1>
            </div>
            <h4 class="font-size-18 mt-4">欢迎回来 !</h4>
            <p class="text-muted">登录TANGJIE-BLOG个人小站,基于vue3</p>
        </div>

        <div class="p-2 mt-5">

            <form class="form-horizontal">
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-mail-star-line auti-custom-input-icon"></i>
                    <label for="username">电子邮箱</label>
                    <input type="email" class="form-control" placeholder="输入注册邮箱" v-model="submitData.email" />
                </div>

                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                    <label for="userpassword">密码</label> 
                    <input type="password" class="form-control" placeholder="输入密码" v-model="submitData.password" />
                </div>
                <div class="form-group auth-form-group-custom mb-4 row">
                    <div class="col-md-7"> 
                        <i class="ri-at-fill auti-custom-input-icon" style="left:30px"></i>
                        <label for="userpassword" style="left:70px">邮箱验证码</label>
                        <input type="text" class="form-control" placeholder="输入邮箱验证码" v-model="submitData.code" />
                    </div>
                    <div class="col-md-5">
                            <SendCode @sendcode="sendCodeEvent(submitData.email)"></SendCode>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <button class="btn btn-primary w-md waves-effect waves-light" @click="submitEvent">
                        点击登录
                    </button>
                </div>

                <div class="mt-4 text-center">
                    <i class="mdi mdi-lock mr-1"></i>
                    <a href="javascript:;" @click="statuChange(2)">忘记密码?</a>
                </div>
            </form>

        </div>

        <div class="mt-5 text-center">
            <p>还没有账户？赶紧<a href="javascript:;" @click="statuChange(1)" class="font-weight-medium text-primary"> 注册 </a>吧 </p>
            <p>
                © 2020 WetCMS. Crafted with
                <i class="mdi mdi-heart text-danger"></i> By
                <a href="https://cn.vuejs.org/">vue3</a>
            </p>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import SendCode from '../../../components/SendCode';
import { userLogin } from '../../apilist';
import sendCodeEvent from './sendcode';
import $alert from '../../../wetui/base/alert/alert';
import Cookies from 'js-cookie';
import { useRoute,useRouter } from 'vue-router';
export default {
    components:{
        SendCode
    },
    methods:{
        statuChange(typenum){
            this.$emit('changeform',typenum)
        }
    },
    setup(){
        const route = useRoute();
        const router = useRouter();
        const submitData = reactive({
            email:'',
            password:'',
            code:''
        })

        const submitEvent = ()=>{
            userLogin(submitData).then((res)=>{
                $alert({
                    content:res.message,
                    type:'success'
                })
                Cookies.set('token', res.result.token, { expires: 3 });
                Cookies.set('username',res.result.username,{ expires: 3 });

                setTimeout(()=>{
                    if(route.query.redirect){
                        router.push({
                            name:route.query.redirect
                        })
                    }else{
                        router.push({
                            name:'main'
                        })
                    }
                },2000)
            })
        }

        return{
            sendCodeEvent,
            submitData,
            submitEvent
        }
    }
}
</script>