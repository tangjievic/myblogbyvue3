<style lang="less">

</style>

<template>
<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title">基础菜单</li>
                <li>
                    <a href="javascript:;" class="waves-effect" @click="goPage('welcome')">
                        <i class="dripicons-monitor"></i>
                        <span>欢迎</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" class="waves-effect" @click="goPage('admin')">
                        <i class="dripicons-user"></i>
                        <span>管理员类</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" class="waves-effect" @click="goPage('videopage')">
                        <i class="ri-slideshow-4-fill"></i>
                        <span>视频管理</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" class=" waves-effect" @click="goPage('system')">
                        <i class="ri-settings-2-line"></i>
                        <span>系统设置</span>
                    </a>
                </li>
                <li class="menu-title">用户菜单</li>
                <li>
                    <a href="javascript:;" class=" waves-effect" @click="goPage('userliset')">
                        <i class="ri-contacts-line"></i>
                        <span>用户管理</span>
                    </a>
                </li>
                <li class="menu-title">文章系统</li>
                <li>
                    <a href="javascript: void(0);" class="waves-effect" @click="goPage('artcate')">
                        <i class="ri-store-2-line"></i>
                        <span>分类&标签</span>
                    </a>
                </li>
                <li>
                    <a href="javascript: void(0);" class="has-arrow waves-effect">
                        <i class="ri-layout-3-line"></i>
                        <span>文章管理</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="javascript:;" @click="goPage('artwritte')">文章列表</a></li>
                        <li><a href="javascript:;" @click="goPage('artwritte')">文章写作</a></li>
                        <li><a href="javascript:;" @click="goPage('artwritte')">文章修改</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
</template>

<script>
import {
    useRouter
} from 'vue-router';
import {
    onMounted,
} from 'vue';
let $ = window.$;
let initMenu = () => {
    $("#side-menu").metisMenu();
}
export default {
    setup() {
        const router = useRouter();
        onMounted(() => {
            //初始化左侧导航
            initMenu();
        })
        //跳转页面
        const goPage = (name) => {
            router.push({
                name: name
            })
        }
        return {
            goPage
        }
    }
}
</script>
