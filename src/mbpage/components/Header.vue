<style lang="less">
.site-brand {
    h1.title {
        font-size: 16px;
    }
}
</style>
<template>
<div class="navbar-top">
    <div class="side-nav-panel-left">
        <a href="javascript:;" @click="goBack" data-activates="slide-out-left" class="side-nav-left"><i class="fa fa-chevron-left"></i></a>
    </div>
    <div class="site-brand">
        <a href="index.html">
            <h1 class="title">TANGJIE-BLOG</h1>
        </a>
    </div>
    <div class="side-nav-panel-right"></div>
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
            router.go(-1)
        }
        return {
            goBack
        }
    }
}
</script>
