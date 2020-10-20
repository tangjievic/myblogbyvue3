<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
import {
    useRouter
} from 'vue-router';
export default {
    name: 'Admin',
    setup() {
        const router = useRouter();
        router.beforeEach((to, from, next) => {
            // ...
            if (to.matched.length === 0) {
                next('/404')
            } else {
                next()
            }
            //console.log(to, from, next, '路由守卫')
        })
    }
}
</script>

<style lang="less">
@import './assets/libs/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css';
@import './assets/libs/datatables.net-bs4/css/dataTables.bootstrap4.min.css';
@import './assets/libs/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.css';
@import './assets/css/bootstrap.min.css';
@import './assets/css/icons.min.css';
@import './assets/css/app.css';
</style>
