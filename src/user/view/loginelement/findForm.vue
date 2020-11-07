<style lang="less">

</style>
<template>
    <div>
        <div class="text-center">
            <div>
                <h1>
                    <div class="wetui_logo"></div>
                    TANGJIE-BLOG召唤密码
                </h1>
            </div>
        </div>

        <div class="p-2 mt-5">

            <form class="form-horizontal">

                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-mail-star-line auti-custom-input-icon"></i>
                    <label for="username">电子邮箱</label>
                    <input type="text" class="form-control" placeholder="输入用户名" />
                </div>
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                    <label for="userpassword">密码</label>
                    <input type="password" class="form-control" placeholder="输入密码" />
                </div>
                <div class="form-group auth-form-group-custom mb-4">
                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                    <label for="userpassword">密码二次验证</label>
                    <input type="password" class="form-control" placeholder="输入密码" />
                </div>
                <div class="form-group auth-form-group-custom mb-4 row">
                    <div class="col-md-7"> 
                        <i class="ri-at-fill auti-custom-input-icon" style="left:30px"></i>
                        <label for="userpassword" style="left:70px">邮箱验证码</label>
                        <input type="text" class="form-control" placeholder="输入邮箱验证码" />
                    </div>
                    <div class="col-md-5">
                            <SendCode></SendCode>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <button class="btn btn-primary w-md waves-effect waves-light" @click="toLogin">
                        点击重置密码
                    </button>
                </div>

                <div class="mt-4 text-center">
                    <i class="mdi mdi-lock mr-1"></i>
                    <a href="javascript:;" @click="statuChange(0)">返回登录</a>
                </div>
            </form>

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
import SendCode from '../../../components/SendCode';
export default {
    components:{
        SendCode
    },
    methods:{
        statuChange(typenum){
            this.$emit('changeform',typenum)
        }
    }
}
</script>