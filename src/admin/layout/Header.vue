<style lang="less">
#page-topbar{
    z-index: 999;
}
</style>

<template>
<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="javascript:;" class="logo logo-dark" style="color:#ffffff;text-align:center">
                    <span class="logo-sm">
                        WS
                    </span>
                    <span class="logo-lg">
                        WetCms
                    </span>
                </a>

                <a href="javascript:;" class="logo logo-light" style="color:#ffffff;text-align:center">
                    <span class="logo-sm">
                        WS
                    </span>
                    <span class="logo-lg">
                        WetCms
                    </span>
                </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect" ref="menubtn">
                <i class="ri-menu-2-line align-middle"></i>
            </button>
        </div>

        <div class="d-flex">
            <div class="dropdown d-none d-lg-inline-block ml-1">
                <button type="button" class="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                    <i class="ri-fullscreen-line"></i>
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
                                <h6 class="m-0"> 消息提示 </h6>
                            </div>
                            <div class="col-auto">
                                <a href="#!" class="small"> 未读消息</a>
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
                                    <h6 class="mt-0 mb-1">管理系统1.0</h6>
                                    <div class="font-size-12 text-muted">
                                        <p class="mb-1">欢迎使用</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i>更新:2020/10/14</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-2 border-top">
                        <a class="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                            <i class="mdi mdi-arrow-right-circle mr-1"></i> 更多消息
                        </a>
                    </div>
                </div>
            </div>

            <div class="dropdown d-inline-block user-dropdown">
                <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="d-none d-xl-inline-block ml-1">tangjie</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                    <!-- item-->
                    <a class="dropdown-item" href="#"><i class="ri-wallet-2-line align-middle mr-1"></i>在线</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger" href="#"><i class="ri-shut-down-line align-middle mr-1 text-danger"></i> 退出登录</a>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon right-bar-toggle waves-effect">
                    <i class="ri-settings-2-line"></i>
                </button>
            </div>

        </div>
    </div>
</header>
</template>

<script>
import {
    ref,
    onMounted
} from 'vue';

function initMenuCollapse(dom) {
    let $ = window.$;
    $(dom).on('click', function (event) {
        event.preventDefault();
        $('body').toggleClass('sidebar-enable');
        if ($(window).width() >= 992) {
            $('body').toggleClass('vertical-collpsed');
        } else {
            $('body').removeClass('vertical-collpsed');
        }
    });
    $('body,html').click(function (e) {
        const container = $(dom);
        if (!container.is(e.target) && container.has(e.target).length === 0 && !(e.target).closest('div.vertical-menu')) {
            $("body").removeClass("sidebar-enable");
        }
    });
}
export default {
    setup() {
        const menubtn = ref(null);
        onMounted(() => {
            initMenuCollapse(menubtn.value);
        })
        return {
            menubtn
        }
    }
}
</script>
