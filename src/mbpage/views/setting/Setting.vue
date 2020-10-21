<style lang="less" scoped>
.view_page{
    &::before{
        content: '';
        display: block;
        height: 70px;
    }
}
.footer-blog_desc{
        margin-top: 20px;
    text-align: center;
    font-size: 12px;
    color: rgba(0,0,0,.5);
}
</style>
<template>
    <div class="view_page">
        <Header></Header>
        <ul class="my-center list setting"><li class="item"><i class="icontext loginout"></i><div class="label setting">退出账户</div></li></ul>
        <div class="footer-blog_desc">TANGJIE-BLOG</div>
    </div>
</template>
<script>
import Header from '../../components/Header'
export default {
    components:{
        Header
    }
}
</script>