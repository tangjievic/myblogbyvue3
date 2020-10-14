import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '../views/main/Main.vue';
import WelCome from '../views/WelCome.vue';
import AdminList from '../views/main/AdminList.vue'
const routers = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children:[
            {
                path:"welcome",
                name:"welcome",
                component:WelCome
            },
            {
                path:"admin",
                name:"admin",
                component:AdminList
            },
            {
                path: '/',
                redirect: { path: 'welcome' }
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/LoginPage.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router;