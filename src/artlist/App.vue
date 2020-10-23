<template>
<div>
    <LeftTool></LeftTool>
    <ViewBubble></ViewBubble>
</div>
</template>

<script>
import LeftTool from '../components/LeftTool.vue';
import ViewBubble from '../components/ViewBubble.vue';

function pageLoadInit() {
    const view = document.getElementById('loading_init');
    if (view) {
        setTimeout(() => {
            view.style.opacity = '0';
        }, 1500);
        setTimeout(() => {
            view.style.display = 'none';
        }, 2000);
    }
}

export default {
    name: 'App',
    components: {
        LeftTool,
        ViewBubble
    }
}
</script>

<style lang="less">
@import '../admin/assets/css/icons.min.css';
@import '../style/lesselement/reward.less';
@import '../style/lesselement/hotart.less';

.page-right {
    .list_hd {
        border-radius: 5px;
        box-sizing: border-box;
        padding: 50px 15px;
        color: #ffffff;
        font-size: 15px;
        height: 165px;
        background-size: 100%;
        background-position: center;
        background-image: url(../image/callbg.png);
        background-repeat: no-repeat;
    }

    .art_list {
        min-height: 960px;
    }

    .page_section:first-child {
        margin-top: 0;
    }
}
</style>
