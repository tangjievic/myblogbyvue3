import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/main/Main.vue';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';
import Fond from '../views/fond/Fond.vue';
import My from '../views/my/MyCenter.vue';
import Setting from '../views/setting/Setting.vue';

const routers = [{
        path: "/",
        name: 'main',
        component: Main,
        children: [{
                name: 'home',
                path: 'home',
                component: Home
            },
            {
                name: "search",
                path: "search",
                component: Fond
            },
            {
                name: "my",
                path: 'my',
                component: My
            },
            {
                path: '/',
                redirect: { path: 'home' }
            },
        ]
    },
    {
        path:'/artlist',
        name:'artlist',
        component:()=>import('../views/art/ArtList.vue')
    },
    {
        path:'/artdetail',
        name:'artdetail',
        component:()=>import('../views/art/ArtDetail.vue')
    },
    {
        name: 'setting',
        path: '/setting',
        component: Setting
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router;