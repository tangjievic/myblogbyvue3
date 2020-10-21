import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/main/Main.vue';
import Login from '../views/login/Login.vue';
import Home from '../views/home/Home.vue';
const routers = [
    {
        path:"/",
        name:'main',
        component:Main,
        children:[
            {
                name:'home',
                path:'home',
                component:Home
            },
            {
                path: '/',
                redirect: { path: 'home' }
            },
        ]
    },
    {
        path:'/login',
        name:'login',
        component:Login
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})
export default router;