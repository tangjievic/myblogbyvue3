<template>
<div>
    <LeftTool></LeftTool>
    <ViewBubble></ViewBubble>
    <RightTool></RightTool>
</div>
</template>

<script>
import {
    onMounted
} from 'vue';
import LeftTool from '../components/LeftTool.vue';
import ViewBubble from '../components/ViewBubble.vue';
import $ from 'jquery';
import showReel from '../tselement/showreel';
import RightTool from '../components/RightTool.vue';

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
    name: 'Index',
    components: {
        LeftTool,
        ViewBubble,
        RightTool
    },
    setup() {
        onMounted(() => {
            pageLoadInit();
            showReel($, $);
            $(".ato-content").slide({
                titCell: ".ato-list-fl ul",
                mainCell: ".ato-list ul",
                autoPage: true,
                effect: "leftLoop",
                autoPlay: true,
                vis: 3
            });
        })
    }
}
</script>

<style lang="less">
@import '../admin/assets/css/icons.min.css';
@import '../style/lesselement/showreel.less';
@import '../style/lesselement/reward.less';
@import '../style/lesselement/hotart.less';
</style>
