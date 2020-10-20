import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../view/Main.vue';
import Login from '../view/Login.vue';
import NotFond from '../../admin/views/404.vue';
const routers = [
    {
        path:'/',
        name:'main',
        component:Main,
    },
    {
        path:'/login',
        name: 'login',
        component:Login
    },
    {
        path:'/404',
        name:'404',
        component:NotFond
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router;
