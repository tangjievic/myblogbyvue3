<style lang="less">

</style>

<template>
<div class="my-5 pt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="text-center my-5">
                    <h1 class="font-weight-bold text-error">4 <span class="error-text">0</span> 4</h1>
                    <h3 class="text-uppercase">哇呜！！！页面走丢了</h3>
                    <div class="mt-5 text-center">
                        <a class="btn btn-primary waves-effect waves-light" href="javascript: void(0);" @click="goBack">返回管理端主页</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    useRouter
} from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const goBack = () => {
            router.go(-2)
        }
        return {
            goBack
        }
    }
}
</script>
