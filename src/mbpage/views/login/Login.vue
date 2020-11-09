<style lang="less" scoped>
@import './login.less';
</style>
<template>
<div class="view_page">
    <div class="navbar-top">
        <div class="side-nav-panel-left">
            <a href="javascript:;" @click="goBack" data-activates="slide-out-left" class="side-nav-left"><i class="fa fa-chevron-left"></i></a>
        </div>
        <div class="site-brand">
            <a href="index.html">
                <h1 class="title">{{hdtitle}}</h1>
            </a>
        </div>
        <div class="side-nav-panel-right"></div>
    </div>
    <div class="section">
        <div class="container">
            <div class="register">
                <div :class="['row','rotate_box',submitdatascence===0?'show':'']">
                    <form class="col s12">
                        <div class="input-field">
                            <input type="email" class="validate" placeholder="电子邮箱" v-model="logindata.email">
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="登录密码" class="validate" v-model="logindata.password">
                        </div>
                        <div class="input-field row">
                            <div class="col s6">
                                <input type="password" placeholder="邮箱验证码" class="validate" v-model="logindata.code">
                            </div>
                            <div class="col s6">
                                <SendCode class="mbsendcode" @sendcode="sendEmailCode"></SendCode>
                            </div>
                        </div>
                        <div class="btn-box">
                            <button class="button-default" @click="usertoLogin">点击登录</button>
                        </div>
                    </form>
                    <div class="other_click">
                        <a href="javascript:;" @click="statuChange(1)">注册</a>
                        <a href="javascript:;" @click="statuChange(2)">找回密码</a>
                    </div>
                </div>
                <div :class="['row','rotate_box',submitdatascence===1?'show':'']">
                    <form class="col s12">
                        <div class="input-field">
                            <input type="text" class="validate" placeholder="用户名" v-model="registerdata.username">
                        </div>
                        <div class="input-field">
                            <input type="email" class="validate" placeholder="电子邮箱" v-model="registerdata.email">
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="登录密码" class="validate" v-model="registerdata.password">
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="二次密码验证" class="validate" v-model="repassword">
                        </div>
                        <div class="input-field row" style="margin-bottom:0">
                            <div class="col s6">
                                <input type="password" placeholder="邮箱验证码" class="validate" v-model="registerdata.code">
                            </div>
                            <div class="col s6">
                                <SendCode class="mbsendcode" @sendcode="sendEmailCode"></SendCode>
                            </div>
                        </div>
                        <div class="btn-box">
                            <button class="button-default" @click="createUser">点击注册</button>
                        </div>
                    </form>
                    <div class="other_click">
                        <a href="javascript:;"></a>
                        <a href="javascript:;" @click="statuChange(0)">返回登录</a>
                    </div>
                </div>
                <div :class="['row','rotate_box',submitdatascence===2?'show':'']">
                    <form class="col s12">
                        <div class="input-field">
                            <input type="email" class="validate" placeholder="电子邮箱" v-model="finddata.email">
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="新密码" class="validate" v-model="finddata.password">
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="二次密码验证" class="validate" v-model="repassword">
                        </div>
                        <div class="input-field row">
                            <div class="col s6">
                                <input type="password" placeholder="验证码" class="validate" v-model="finddata.code">
                            </div>
                            <div class="col s6">
                                <SendCode class="mbsendcode" @sendcode="sendEmailCode"></SendCode>
                            </div>
                        </div>
                        <div class="btn-box">
                            <button class="button-default" @click="findPasswrod">重置密码</button>
                        </div>
                    </form>
                    <div class="other_click">
                        <a href="javascript:;"></a>
                        <a href="javascript:;" @click="statuChange(0)">返回登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="about-us-foot">
                <h6>TANGJIE-BLOG</h6>
                <p>持续的前端技术分享·深圳柏林家政友情赞助</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Login from './login.js';
export default Login
</script>
