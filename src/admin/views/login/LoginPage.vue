<template>
<div class="auth-body-bg">
    <div>
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-4">
                    <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                        <div class="w-100">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <div>
                                        <div class="text-center">
                                            <div>
                                                <h1>
                                                    <div class="wetui_logo"></div>
                                                    WetCMS
                                                </h1>
                                            </div>
                                            <h4 class="font-size-18 mt-4">欢迎回来 !</h4>
                                            <p class="text-muted">登录WetCMS,基于vue3</p>
                                        </div>

                                        <div class="p-2 mt-5">
                                            <form class="form-horizontal" action="index.html">

                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-user-2-line auti-custom-input-icon"></i>
                                                    <label for="username">用户名</label>
                                                    <input type="text" class="form-control" id="username" placeholder="输入管理员名">
                                                </div>

                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                                                    <label for="userpassword">密码</label>
                                                    <input type="password" class="form-control" id="userpassword" placeholder="输入密码">
                                                </div>
                                                <div class="form-group auth-form-group-custom mb-4">
                                                    <i class="ri-lock-2-line auti-custom-input-icon"></i>
                                                    <label for="userpassword">二次密码验证</label>
                                                    <input type="password" class="form-control" id="userpassword" placeholder="输入密码">
                                                </div>
                                                <div class="mt-4 text-center">
                                                    <button class="btn btn-primary w-md waves-effect waves-light" type="submit">点击登录</button>
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <i class="mdi mdi-lock mr-1"></i> 忘记密码?管理端不支持找回，请联系管理员
                                                </div>
                                            </form>
                                        </div>

                                        <div class="mt-5 text-center">
                                            <p>没有账号,管理端不支持注册，请联系主管理员 ！</p>
                                            <p>© 2020 WetCMS. Crafted with <i class="mdi mdi-heart text-danger"></i> By <a href="https://cn.vuejs.org/">vue3</a></p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="authentication-bg">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.authentication-bg {
    background-image: url(../../assets/images/login.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 35% auto;
}
</style>
