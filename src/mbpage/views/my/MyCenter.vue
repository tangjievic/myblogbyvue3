<style lang="less" scoped>
.view_page{
    &::before{
        content: '';
        display: block;
        height: 70px;
    }
}
</style>
<template>
    <div class="view_page">
        <div class="navbar-top">
            <div class="side-nav-panel-left"></div>
            <div class="site-brand">
                <a href="index.html">
                    <h1 class="title">个人中心</h1>
                </a>
            </div>
            <div class="side-nav-panel-right"></div>
        </div>
        <div class="my-center msg"><div class="username">用户名:想要飞翔的猪</div><div class="userwork">职业：web前端工程师</div><i class="icontext right_row"></i></div>
        <ul class="my-center list"><li class="item"><i class="icontext zan"></i><div class="label">我赞过的</div><div class="label_sub">1篇</div></li><li class="item"><i class="icontext star"></i><div class="label">我收藏的</div><div class="label_sub">0篇</div></li><li class="item"><i class="icontext vip"></i><div class="label">vip专享</div><div class="label_sub">0篇</div></li></ul>
        <ul class="my-center list"><li class="item"><i class="icontext yijian"></i><div class="label">意见反馈</div><div class="label_sub"></div></li><li class="item"><i class="icontext setting"></i>
        <div class="label" @click="goPage(router,'setting')">设置</div><div class="label_sub"></div></li></ul>

    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import { goPage } from '../commen'
export default {
    setup(){
        const router = useRouter();
        return{
            router,
            goPage
        }
    }
}
</script>