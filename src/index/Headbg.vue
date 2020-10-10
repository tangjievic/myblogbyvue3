<template>
<div class="tjblog-hd_bg">
    <div v-for="(item,index) in 11" :key="index" :class="'box_'+index"></div>
</div>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style lang="less" scoped>
.tjblog-hd_bg {
    width: 790px;
    height: 300px;
    background-color: fade(#666ee8, 80%);
}
</style>
