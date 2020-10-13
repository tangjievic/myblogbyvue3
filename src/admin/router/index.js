import {createRouter,createWebHashHistory } from 'vue-router';
import Main from '../views/main/Main.vue';

const routers = [
    {
        path:'/',
        name:'main',
        component:Main
    },
    {
        path:'/login',
        name:'login'
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:routers
})

export default router;