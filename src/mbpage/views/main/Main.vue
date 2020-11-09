<style lang="less">
@import './main.less';
</style>
<template>
<MainLayout>
    <router-view v-slot="{Component}">
        <keep-alive v-if="route.meta.keepAlive">
            <component :is="Component"></component>
        </keep-alive>
        <component v-else :is="Component"></component>
    </router-view>
    <Footer></Footer>
</MainLayout>
</template>

<script>
import Main from './main.js';
export default Main
</script>
