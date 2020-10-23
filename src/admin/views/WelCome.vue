<style lang="less" scoped>
</style>

<template>
<div class="container-fluid">

    <!-- start page title -->
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">欢迎页面</h4>

                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">欢迎</a></li>
                    </ol>
                </div>

            </div>
        </div>
    </div>
    <!-- end page title -->

    <div class="row justify-content-center">
        <div class="col-lg-5">
            <div class="text-center mb-5">
                <h4>WetCms</h4>
                <p class="text-muted mb-4">
                    基于bootstrap4,vue3等打造的管理系统
                </p>

                <ul class="nav nav-pills pricing-nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="javascript:;" @click="addCount">要点{{count}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row">
        <div class="col-xl-3 col-sm-6">
            <div class="card pricing-box">
                <div class="card-body p-4">
                    <div class="text-center">
                        <div class="mt-3">
                            <i class="ri-edit-box-line text-primary h1"></i>
                        </div>
                        <h5 class="mt-4">友好的编辑界面</h5>

                        <div class="font-size-14 mt-4 pt-2">
                            <ul class="list-unstyled plan-features">
                                <li>支持Markdown编写</li>
                                <li>友好的插件提示</li>
                                <li>优化的颜色匹配</li>
                            </ul>
                        </div>

                        <div class="mt-5">
                            <p class="text-muted">自由</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6">
            <div class="card pricing-box">
                <div class="card-body p-4">
                    <div class="text-center">
                        <div class="mt-3">
                            <i class="ri-medal-line text-primary h1"></i>
                        </div>
                        <h5 class="mt-4">专业化</h5>

                        <div class="font-size-14 mt-4 pt-2">
                            <ul class="list-unstyled plan-features">
                                <li>前端界面源码开源</li>
                                <li>友好的权限管理</li>
                                <li>简单的路由配置</li>
                            </ul>
                        </div>

                        <div class="mt-5">
                            <p class="text-muted">民主</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6">
            <div class="card pricing-box">
                <div class="card-body p-4">
                    <div class="text-center">
                        <div class="mt-3">
                            <i class="ri-stack-line text-primary h1"></i>
                        </div>
                        <h5 class="mt-4">企业化</h5>

                        <div class="font-size-14 mt-4 pt-2">
                            <ul class="list-unstyled plan-features">
                                <li>原生支持家政类企业</li>
                                <li>简单的家政管理</li>
                                <li>方便小型家政管理</li>
                            </ul>
                        </div>

                        <div class="mt-5">
                            <p class="text-muted">和谐</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-xl-3 col-sm-6">
            <div class="card pricing-box">
                <div class="card-body p-4">
                    <div class="text-center">
                        <div class="mt-3">
                            <i class="ri-vip-crown-line text-primary h1"></i>
                        </div>
                        <h5 class="mt-4">限制</h5>

                        <div class="font-size-14 mt-4 pt-2">
                            <ul class="list-unstyled plan-features">
                                <li>几乎限制</li>
                                <li>提供完整的ui组件</li>
                                <li>提供图表功能</li>
                            </ul>
                        </div>

                        <div class="mt-5">
                            <p class="text-muted">平等</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- end row -->
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="text-sm-right d-none d-sm-block">
                        践行社会主义
                        <i class="mdi mdi-heart text-danger"></i>核心价值观
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import {
    onMounted,
    reactive,
    computed
} from 'vue';
import {
    useStore
} from 'vuex';
export default {
    setup() {
        const store = useStore();
        const addCount = () => {
            store.commit('increment')
        };
        onMounted(() => {

        })

        return reactive({
            count: computed(() => store.state.count),
            addCount
        })
    }
}
</script>
