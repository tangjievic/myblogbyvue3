<template>
<div id="layout-wrapper">
    <Header headertitle='TANGJIE-BLOG'></Header>
    <Lefttool></Lefttool>
    <div class="main-content">
        <div class="page-content">
            <div class="right">
                <section class="page_section box-boder" style="margin:0">
                    <h3 class="section_hd">基本信息</h3>
                    <div class="rt_bg">
                        <div class="rt_dot"></div>
                    </div>
                    <div>
                        <div class="text-center">
                            <div class="media-body">
                                <h5>
                                    <i class="mdi mdi-account mr-1"></i> 昵称
                                </h5>
                                <div>
                                    <span class="wet-tag wet-tag__lg wet-tag__risk">VIP</span>
                                </div>
                            </div>
                        </div>

                        <hr class="my-4">

                        <div class="row text-center">
                            <div class="col-4">
                                <h6 class="text-muted mb-2">绑定邮箱</h6>
                                <p>981955667@qq.com</p>
                            </div>
                            <div class="col-4">
                                <h6 class="text-muted mb-2">当前职业</h6>
                                <p>前端</p>
                            </div>
                            <div class="col-4">
                                <h6 class="text-muted mb-2">个性签名</h6>
                                <p>进则九州，退则四海</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="page_section box-boder">
                    <Tabs @change="tabChanges">
                        <template v-slot:allart>
                            <AllArt></AllArt>
                        </template>
                        <template v-slot:hotart>
                            <HotArt></HotArt>
                        </template>
                        <template v-slot:mylike>
                            <div>全部s文章</div>
                        </template>
                        <template v-slot:mycollect>
                            <div>全部s文章</div>
                        </template>
                        <template v-slot:vip>
                            <div>全部s文章</div>
                        </template>
                        <template v-slot:video>
                            <div>全部s文章</div>
                        </template>
                        <template v-slot:artquery>
                            <div>全部s文章</div>
                        </template>
                    </Tabs>
                </section>
            </div>
            <aside class="left">
                <section class="page_section box-boder" style="margin:0">
                    <h3 class="section_hd">每日签到</h3>
                    <div class="text-center">
                        <div class="media-body">
                            <div class="dybtn_wrapper">
                                <DyBtn></DyBtn>
                            </div>
                            <p class="text-muted" style="padding-top:60px">
                                <i class="mdi mdi-calendar-check mr-1"></i>签到奖积分，解锁"新姿势"
                            </p>
                        </div>
                    </div>

                    <hr class="my-4">

                    <div class="row text-center">
                        <div class="col-6">
                            <p class="text-muted mb-2">今日运气值</p>
                            <h5>72</h5>
                        </div>
                        <div class="col-6">
                            <p class="text-muted mb-2">今日赚取积分</p>
                            <h5>50分</h5>
                        </div>
                    </div>
                </section>
                <section class="page_section box-boder">
                    <h3 class="section_hd">友情广告</h3>
                    <div>
                        <a href="#">
                            <img alt="广告图片" src="../../image/adnot.png">
                        </a>
                    </div>
                    <div>
                        <a href="#" class="wet-btn wet-btn__info wet-btn__block">暂无广告</a>
                    </div>
                </section>
            </aside>
        </div>
    </div>
    <Footer></Footer>
    <ViewBubble></ViewBubble>
</div>
</template>

<script>
import {
    provide,
} from 'vue';
import Header from '../components/Header';
import Lefttool from '../../components/LeftTool';
import Footer from '../components/Footer';
import Tabs from '../../admin/components/Tabs';
import DyBtn from '../components/DyBtn.vue';
import ViewBubble from '../../components/ViewBubble.vue';
import AllArt from '../components/AllArt.vue';
import HotArt from '../components/HotArt.vue';
export default {
    components: {
        Header,
        Lefttool,
        Footer,
        Tabs,
        DyBtn,
        ViewBubble,
        AllArt,
        HotArt
    },
    setup() {
        provide('tabsPage', [{
                name: '全部文章',
                key: "allart"
            },
            {
                name: '热门文章',
                key: "hotart"
            },
            {
                name: "我的点赞",
                key: 'mylike'
            },
            {
                name: "我的收集",
                key: 'mycollect'
            },
            {
                name: "vip专享",
                key: 'vip'
            },
            {
                name: "视频资源",
                key: "video"
            },
            {
                name: '文章查询',
                key: 'artquery'
            }
        ])
        const tabChanges = (event)=>{
            console.log(event)
        }
        return{
            tabChanges,
        }
    }
}
</script>

<style lang="less">
#layout-wrapper{
    &::after{
        content: '';
        display: block;
        height: 90px;
    }
}
.main-content {
    margin-left: 70px;
}

.page-content {
    margin: 0 auto;
    width: 1160px;

    .left {
        width: 320px;
        float: right;

        .media-body {
            position: relative;
        }

        .dybtn_wrapper {
            position: absolute;
            top: -10px;
            left: -20px;
            bottom: -20px;
            right: -20px;
        }
    }

    .right {
        width: 790px;
        float: right;
        margin-left: 20px;

        .card {
            margin-bottom: 0px;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            background-color: transparent;

            .card-body {
                padding: 0px;
            }
        }
    }

    .box-boder {
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 5px 38px -6px rgba(0, 0, 0, 0.14);
    }
}

.page_section {
    margin-top: 20px;
    padding: 20px;
    background-color: fade(#ffffff, 85%);
    position: relative;

    .section_hd {
        position: relative;
        padding-left: 55px;
        margin-top: 0;
        font-size: 1.17em;
        font-weight: 600;

        &.new_hd {
            &::after {
                content: "";
                position: absolute;
                right: 0;
                top: -10px;
                right: -10px;
                display: block;
                width: 36px;
                height: 36px;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: cover;
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAaVBMVEUAAAD/ej7/ej3/eT7/eD3/eT3/eT3/eT3/eT3/ej3/eT3/eDz/eT7/eT3/eT3/ejz/eT3/eTr/ej3/ej3/ej3/eT3/eT3/ej3/ej3/eDz/ej7/ez3/ejv/ejD/ej3/eT7/ej3/eTz/ej4bMlMCAAAAInRSTlMAgOv7Lu/byLduWEK9r3pMNCHm4sOhnJN0VTsnGgrRsYqHhHXhxQAAALNJREFUOMuFz1cSwyAMBNA1JYB7707h/odMvmAsZiL96s1Ki8z/H3ACidAEUJE38g6IyIv6fCQAWdxLv64URPH45YvO3AHJGLqp3FwfARXtPMJZJQKgQvvmvT+djSDJKErRdn0uAqDCnnU1l4dMQOzyGX3xEk5EkHQx7aKuIYBUbMe0ZL7SAVAhpFaVUiaANKO+dktOkE8NaUFEGHACnAAnwAlwApwAJ8AJcAKcACfACXDiC5d3OnB8OHynAAAAAElFTkSuQmCC);
            }
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 50px;
            margin-top: -1px;
            border-bottom: 2px solid var(--wet-primary);
            //background-color: var(--wet-primary);
        }
    }

    .secton_box {
        display: flex;

        .item-img {
            flex: 0 0 auto
        }

        .item {
            flex: 1;
        }
    }

    .rt_dot {
        width: 20px;
        height: 20px;
        border: 1px solid var(--wet-warn);
        box-shadow: 0 0 2px 0 var(--wet-warn);
        right: 30px;
        bottom: 0;
        border-radius: 50%;
    }

    .rt_bg {
        position: absolute;
        right: 8px;
        top: 8px;
        height: 50px;

        &::before,
        &::after {
            content: '';
            display: block;
            border-radius: 50%;
            position: absolute;
        }

        &::before {
            width: 30px;
            height: 30px;
            border: 1px solid var(--wet-primary);
            right: 0;
            box-shadow: 0 0 2px 0 var(--wet-primary);
            top: 50%;
            margin-top: -15px;
        }

        &::after {
            border: 1px solid var(--wet-success);
            box-shadow: 0 0 2px 0 var(--wet-success);
            width: 10px;
            height: 10px;
            top: 0;
            right: 30px;
        }
    }
}
</style>
