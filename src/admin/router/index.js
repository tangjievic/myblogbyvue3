import { createRouter, createWebHashHistory, } from 'vue-router';
import Main from '../views/main/Main.vue';
import WelCome from '../views/WelCome.vue';
import AdminList from '../views/main/AdminList.vue';
import ArtWritte from '../views/main/artpage/ArtWritte.vue';
import UserList from '../views/main/UserList';
import ArtCate from '../views/main/artpage/ArtCate.vue';
import ArtList from '../views/main/artpage/ArtList.vue';
import ArtEdite from '../views/main/artpage/ArtEdite.vue';
import SysSeting from '../views/main/SysSeting.vue';
import VideoPage from '../views/main/VideoPage.vue';
const routers = [{
        path: '/',
        name: 'main',
        component: Main,
        children: [{
                path: "welcome",
                name: "welcome",
                component: WelCome,
            },
            {
                path: "admin",
                name: "admin",
                component: AdminList
            },
            {
                path: 'artwritte',
                name: 'artwritte',
                component: ArtWritte,
            },
            {
                path: 'artlist',
                name: 'artlist',
                component: ArtList
            },
            {
                path: 'artedite',
                name: 'artedite',
                component: ArtEdite
            },
            {
                path: "artcate",
                name: 'artcate',
                component: ArtCate
            },
            {
                path: 'userlist',
                name: 'userliset',
                component: UserList
            },
            {
                path: "system",
                name: 'system',
                component: SysSeting
            },
            {
                path: 'videopage',
                name: 'videopage',
                component: VideoPage
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
    {
        path: '/404',
        name: '404',
        component: () =>
            import ('../views/404.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routers
})

export default router;