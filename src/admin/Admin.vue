<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
import {
    useRouter
} from 'vue-router';
//import { computed } from 'vue'
import {
    useStore
} from 'vuex'

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
    name: 'Admin',
    setup() {
        pageLoadInit();
        const router = useRouter();
        const store = useStore()
        console.log(store)
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

@import './style/pagination.less';
@import './style/index.less';
</style>
