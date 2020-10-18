<template>
<div class="main-content">
    <header id="page-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <a href="index.html" class="logo logo-light">
                        <span class="logo-sm">
                            TB
                        </span>
                        <span class="logo-lg">
                            TANGJIE-BLOG
                        </span>
                    </a>
                </div>
            </div>

            <div class="d-flex">
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon" @click="goHome">
                        <i class="ri-home-smile-2-fill"></i>
                        <span class="gohome_txt">返回首页</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <div class="row justify-content-center">
        <div class="col-xl-10">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">更新时间线</h4>
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">更新</a></li>
                        <li class="breadcrumb-item active">时间线</li>
                    </ol>
                </div>
            </div>
            <div class="timeline" dir="ltr">
                <div v-for="(item,index) in updataTime" :key="index">
                    <div :class="['timeline-item','timeline-left']">
                        <div class="timeline-block">
                            <div class="time-show-btn mt-0">
                                <a href="#" :class="['btn',index %2===0?'btn-danger':'btn-success','btn-rounded','w-lg']">{{item.year}}</a>
                            </div>
                        </div>
                    </div>

                    <div :class="['timeline-item',idx %2===0?'timeline-left':'']" v-for="(its,idx) in item.detail" :key="idx">
                        <div class="timeline-block">
                            <div class="timeline-box card">
                                <div class="card-body">
                                    <span class="timeline-icon"></span>
                                    <div class="timeline-date">
                                        <i class="mdi mdi-circle-medium circle-dot"></i> {{its.time}}
                                    </div>
                                    <h5 class="mt-3 foont-size-15">{{its.event}}</h5>
                                    <div class="text-muted">
                                        <p class="mb-0">{{its.desc}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div :class="['timeline-item','timeline-left']">
                    <div class="timeline-block">
                        <div class="time-show-btn mt-0">
                            <a href="#" :class="['btn','btn-primary','btn-rounded','w-lg']">开始</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="footer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    The technique support by tangjie
                </div>
                <div class="col-sm-6">
                    <div class="text-sm-right d-none d-sm-block">
                        践行社会主义<i class="mdi mdi-heart text-danger"></i> 价值观
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>

<script>
import { onMounted,reactive } from 'vue';
function pageLoadInit(){
    const view = document.getElementById('loading_init');
    if(view){
        setTimeout(() => {
            view.style.opacity = '0';
        }, 1000);
        setTimeout(() => {
            view.style.display = 'none';
        }, 1500);
    }
}
function goHome(){
    window.open('/','_self');
}
export default {
    name: 'Update',
    components: {

    },
    setup(){
        let state = reactive({
            updataTime:[
                {
                    year:2020,
                    detail:[
                        {
                            time:'10月8号',
                            event:'博客更新至6.1.2',
                            desc:'新增react打造的移动端'
                        },
                        {
                            time:"07月04号",
                            event:"博客更新至6.1.0",
                            desc:'初步的规范了博客ui组件库样式的设计，登录模块重新开放，由于后台重写当中，因此暂时关停收藏，点赞等功能'
                        },
                        {
                            time:'05月15号',
                            event:"博客更新至6.0.1",
                            decs:"后台文章修改提交bug修复"
                        },
                        {
                            time:'04月05号',
                            event:"博客更新至6.0.0",
                            decs:"基础样式和排版大改"
                        }
                    ]
                },
                {
                    year:2019,
                    detail:[
                        {
                            time:'09月28号',
                            event:'博客更新至5.0.0',
                            desc:'后台改用Think-PHP6'
                        },
                        {
                            time:'03月04号',
                            event:'博客更新至4.0.0',
                            desc:'后台弃用thinkcmf框架改用Think-PHP5进行重构'
                        },
                    ]
                },
                {
                    year:2018,
                    detail:[
                        {
                            time:'11月23号',
                            event:'博客更新至3.1.0',
                            desc:'由于是虚拟机无法做服务器渲染，为此搭建webpack工程，做普通网页和单页面混合，对具有较高seo权重的页面用普通页面，低的用vue单页面'
                        },
                        {
                            time:'09月28号',
                            event:'博客更新至3.0.0',
                            desc:'前端采用vue进行单页面重构'
                        },
                    ]
                },
                {
                    year:2017,
                    detail:[
                        {
                            time:'11月78号',
                            event:'博客更新至2.0.0,采用了thinkCMF框架',
                            desc:'自此网站在也不是静态网站了，有了后台的支持'
                        },
                        {
                            time:'04月16号',
                            event:'博客第一版发布',
                            desc:'全静态网站，主要是jq的使用'
                        },
                    ]
                }
            ]
        })
        onMounted(()=>{
            pageLoadInit();
        })
        return{
            goHome,
            ...state
        }
    }
}
</script>

<style lang="less">
@import '../admin/assets/css/icons.min.css';
@import '../admin/assets/css/app.css';
@import '../admin/assets/css/bootstrap.min.css';
@primary:#1abc9c;
#page-topbar{
    z-index: 500;
}
.main-content{
    margin-left: 0;
    margin-top: 90px;
    margin-bottom: 80px;
    .navbar-brand-box{
        background-color: #ffffff!important;
        .logo.logo-light{
            font-size: 22px;
            color:@primary;
        }
    }
    .gohome_txt{
        margin-left: 5px;
        position: relative;
        bottom: 4px;
    }
    .footer{
        left:0;
    }
}
</style>
