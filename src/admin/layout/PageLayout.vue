<style lang="less">

</style>

<template>
<div id="layout-wrapper">
    <Header></Header>
    <LeftMenu></LeftMenu>
    <div class="main-content">
        <slot></slot>
    </div>
</div>
</template>

<script>
import Header from "./Header";
import LeftMenu from './LeftMenu';
export default {
    components: {
        Header,
        LeftMenu
    }
}
</script>
