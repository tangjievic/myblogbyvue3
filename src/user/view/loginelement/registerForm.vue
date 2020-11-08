<style lang="less">

</style>
<template>
    <div>
        <div class="text-center">
            <div>
                <h1>
                    <div class="wetui_logo"></div>
                    TANGJIE-BLOG用户注册
                </h1>
            </div>
        </div>

        <div class="p-2 mt-5">
            <form class="form-horizontal">
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-user-2-line auti-custom-input-icon"></i>
                    <label for="username">用户名</label>
                    <input type="text" class="form-control" placeholder="输入用户名" v-model="submitdata.username" />
                </div>
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-mail-star-line auti-custom-input-icon"></i>
                    <label for="username">电子邮箱</label>
                    <input type="text" class="form-control" placeholder="输入用户名" v-model="submitdata.email" />
                </div>
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                    <label for="userpassword">密码</label>
                    <input type="password" class="form-control" placeholder="输入密码" v-model="submitdata.password" />
                </div>
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                    <label for="userpassword">密码二次验证</label>
                    <input type="password" class="form-control" placeholder="输入密码" v-model="submitdata.repassword" />
                </div>
                <div class="form-group auth-form-group-custom mb-4 row">
                    <div class="col-md-7"> 
                        <i class="ri-at-fill auti-custom-input-icon" style="left:30px"></i>
                        <label for="userpassword" style="left:70px">邮箱验证码</label>
                        <input type="text" class="form-control" placeholder="输入邮箱验证码" v-model="submitdata.code" />
                    </div>
                    <div class="col-md-5">
                        <SendCode @sendcode="sendCodeEvent(submitdata.email)"></SendCode>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <button class="btn btn-primary w-md waves-effect waves-light" @click="createUser">
                        创建账号
                    </button>
                </div>
            </form>
            <div class="mt-4 text-center">
                <i class="mdi mdi-lock mr-1"></i>
                <a href="javascript:;" @click="statuChange(0)">返回登录</a>
            </div>
        </div>

        <div class="mt-5 text-center">
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
import { userCreate } from '../../apilist';
import $alert from '../../../wetui/base/alert/alert';
import sendCodeEvent from './sendcode';
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
        const submitdata = reactive({
            username:'',
            email:'',
            password:'',
            repassword:'',
            code:''
        });
        const createUser = ()=>{
            if(submitdata.password !== submitdata.repassword){
                $alert({
                    content:"两次密码输入不一致，请检查",
                    type:'risk'
                })
                return
            }
            userCreate({
                username:submitdata.username,
                email:submitdata.email,
                password:submitdata.password,
                code:submitdata.code
            }).then(res=>{
                $alert({
                    content:res.message,
                    type:'success'
                })
            })
        }
        return{
            submitdata,
            createUser,
            sendCodeEvent
        }
    }
}
</script>