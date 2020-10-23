<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
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
    setup() {
        pageLoadInit()
    }
}
</script>

<style lang="less">
@import '../admin/assets/libs/fullcalendar/fullcalendar.min.css';
@import '../admin/assets/css/bootstrap.min.css';
@import '../admin/assets/css/icons.min.css';
@import '../admin/assets/css/app.css';
</style>
