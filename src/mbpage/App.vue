<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',
    setup() {

    }
}
</script>

<style lang="less">
@import url('assets/css/materialize.css');
@import url('assets/font-awesome/css/font-awesome.min.css');
@import url('assets/css/normalize.css');
@import url('assets/css/owl.carousel.css');
@import url('assets/css/owl.theme.css');
@import url('assets/css/owl.transitions.css');
@import url('assets/css/fakeLoader.css');
@import url('assets/css/magnific-popup.css');
@import url('assets/css/style.css');

.boder-bos_shaow {
    box-shadow: 0 5px 38px -6px rgba(0, 0, 0, 0.14);
}
</style>
