<style lang="less">
.ant-drawer-close{
    top:-5px!important;
}

#page-topbar {
    z-index: 500;
}

.navbar-header {
    max-width: 1130px;
    padding: 0 0 0 100px;
    .header-title {
        font-size: 22px;
        color: var(--wet-primary);
    }

    .nav-actived {
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            border-top: 4px solid var(--wet-primary);
        }
    }
}
</style>
<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="dropdown dropdown-mega d-none d-lg-block ml-2">
                <button type="button" class="btn header-item waves-effect header-title">
                    {{$attrs.headertitle}}
                </button>
            </div>
        </div>
        <div class="d-flex">
            <div class="dropdown d-none d-sm-inline-block">
                <button type="button" class="btn header-item waves-effect" v-on:click="goHome">
                    博客首页
                </button>
            </div>
            <div class="dropdown d-none d-sm-inline-block nav-actived">
                <button type="button" class="btn header-item waves-effect">
                    {{nav_one}}
                </button>
            </div>
            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="ri-notification-3-line"></i>
                    <span class="noti-dot"></span>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div class="p-3">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="m-0"> 通知 </h6>
                            </div>
                            <div class="col-auto">
                                消息通知
                            </div>
                        </div>
                    </div>
                    <div data-simplebar style="max-height: 230px;">
                        <a href="" class="text-reset notification-item">
                            <div class="media">
                                <div class="avatar-xs mr-3">
                                    <span class="avatar-title bg-success rounded-circle font-size-16">
                                        <i class="ri-checkbox-circle-line"></i>
                                    </span>
                                </div>
                                <div class="media-body">
                                    <h6 class="mt-0 mb-1">TANGJIE-BLOG7.0</h6>
                                    <div class="font-size-12 text-muted">
                                        <p class="mb-1">欢迎使用</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i>更新:2020/10/14</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-2 border-top">
                        <a class="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)" @click="lookMore">
                            <i class="mdi mdi-arrow-right-circle mr-1"></i> 查看更多
                        </a>
                    </div>
                </div>
            </div>

            <div class="dropdown d-inline-block user-dropdown">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="d-none d-xl-inline-block ml-1">{{usermsg.nickname?usermsg.nickname:usermsg.username}}</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- item-->
                    <a class="dropdown-item" href="javascript:;" @click="applyVip"><i class="ri-user-line align-middle mr-1"></i> 申请vip</a>
                    <a class="dropdown-item d-block" href="javascript:;" @click="showDrawer"><i class="ri-settings-2-line align-middle mr-1"></i> 设置</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="javascript:;" @click="logOutEvent"><i class="ri-shut-down-line align-middle mr-1 text-danger"></i> 退出登录</a>
                </div>
            </div>
        </div>
    </div>
    <Drawer 
    placement="right"
    :closable="true"
    width="400"
    v-model:visible="visible"
    title="个人信息设置">

    </Drawer>
</header>
</template>

<script>
import { logOutEvent } from '../../common';
import $alert from '../../wetui/base/alert/alert';
import { SEVERURL } from '../apilist/http';
import Drawer from 'ant-design-vue/lib/drawer';
import 'ant-design-vue/lib/drawer/style/index.css';
//console.log(this),在vue3中是没有this这个东西的
import {
    onMounted, reactive, toRefs,
} from 'vue';
// const goHome = () => {
//     console.log(this, '直接定义方法,然后通过setup return出去')
// }
export default {
    components:{
        Drawer
    },
    props:{
        usermsg:{
            type:Object,
            default(){
                return{
                    username:'未传入',
                    nickname:'',
                    email:''
                }
            }
        }
    },
    data() {
        return {
            nav_one: "个人中心"
        }
    },
    methods: {
        goHome() {
            console.log(this, '在methods里面定义')
            this.$parent.$emit('tofooter', '我給组件Footer发消息')
        }
    },
    created() {
        console.dir(this)
    },
    setup() {
        const status = reactive({
            visible:false
        })
        const applyVip = ()=>{
            $alert({
                type:'warn',
                content:'暂无开通，敬请期待'
            })
        }
        const lookMore = ()=>{
            window.open(`${SEVERURL}/timeline`)
        }
        const showDrawer = ()=>{
            status.visible = true
        }
        onMounted(() => {
            //console.log(this)
        })
        return {
            logOutEvent,
            applyVip,
            lookMore,
            showDrawer,
            ...toRefs(status)
        }
    }
}
</script>
