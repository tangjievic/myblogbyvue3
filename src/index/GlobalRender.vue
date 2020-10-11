<template>
<div>
    <LeftTool></LeftTool>
    <ViewBubble></ViewBubble>
</div>
</template>

<script>
import { onMounted } from 'vue';
import LeftTool from '../components/LeftTool.vue';
import ViewBubble from '../components/ViewBubble.vue';
import $ from 'jquery';
import showReel from '../tselement/showreel';
export default {
    name: 'Index',
    components: {
        LeftTool,
        ViewBubble
    },
    setup(){
        onMounted(()=>{
            showReel($,$);
            $(".ato-content").slide({
                titCell:".ato-list-fl ul",
                mainCell:".ato-list ul",
                autoPage:true,
                effect:"leftLoop",
                autoPlay:true,vis:3
            });
            console.log('xxx')
        })
    }
}
</script>

<style lang="less">
@import '../style/lesselement/showreel.less';
@import '../style/lesselement/reward.less';
@import '../style/lesselement/hotart.less';
</style>
