<template>
<div class="auth-body-bg">
    <div>
        <div class="container-fluid p-0">
            <div class="row no-gutters">
                <div class="col-lg-5">
                    <div class="authentication-page-content p-4 d-flex align-items-center min-vh-100">
                        <div class="w-100">
                            <div class="row justify-content-center">
                                <div class="col-lg-9 form_rotate_box">
                                    <div :class="['rotate_box',submitdatascence!==0?'hide':'']">
                                        <LoginForm @changeform="statuChange"></LoginForm>
                                    </div>
                                    <div :class="['rotate_box',submitdatascence!==1?'hide':'']">
                                        <RegisterForm @changeform="statuChange"></RegisterForm>
                                    </div>
                                    <div :class="['rotate_box',submitdatascence!==2?'hide':'']">
                                        <FindForm @changeform="statuChange"></FindForm>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <LoginBg></LoginBg>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
import {
    onMounted,
    reactive,
    toRefs
} from "vue";
import LoginBg from './loginelement/loginBg';
import LoginForm from './loginelement/loginForm';
import RegisterForm from './loginelement/registerForm';
import FindForm from './loginelement/findForm';

export default {
    components: {
        LoginBg,
        LoginForm,
        FindForm,
        RegisterForm
    },
    setup() {
        const status = reactive({
            submitdatascence: 0 // 0登录，1注册，2忘记密码
        })
        //改变数据提交场景
        const statuChange = (typenum) => {
            status.submitdatascence = typenum
        }
        onMounted(() => {});
        return {
            statuChange,
            ...toRefs(status)
        }
    },
};
</script>

<style lang="less" scoped>
.form_rotate_box {
    position: relative;
    height: 680px;

    .rotate_box {
        position: absolute;
        left: 0;
        right: 0;
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        opacity: 1;

        &.hide {
            transform: rotateY(90deg);
            opacity: 0;
        }
    }
}
</style>
