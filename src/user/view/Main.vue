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
                    <p>
                        Vue3.x出来了，本博客迈入了第7个大版本，之前为了考虑SEO，整个博客使用的技术比较杂乱，普通网页和单页面应用混杂，维护性较差，本次版本，统一采用vue3框架，构建多页面应用。因为穷，买不起服务器，采用的虚拟主机，没法做服务器渲染，所以借助vue/cli4.x对静态文件的处理，构建文件，优化了SEO问题;当然优化的不仅仅是前端，还有看不见的后端！
                    </p>
                </section>
                <section class="page_section box-boder">
                    <Tabs></Tabs>
                </section>
            </div>
            <aside class="left">
                <section class="page_section box-boder" style="margin:0">
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
</div>
</template>

<script>
import {
    provide
} from 'vue';
import Header from '../components/Header';
import Lefttool from '../../components/LeftTool';
import Footer from '../components/Footer';
import Tabs from '../../admin/components/Tabs';
export default {
    components: {
        Header,
        Lefttool,
        Footer,
        Tabs
    },
    setup() {
        provide('tabsPage', [{
                name: '全部文章',
                key: "friendlink"
            },
            {
                name: '热门文章',
                key: "friendlinkforms"
            }
        ])
    }
}
</script>

<style lang="less" scoped>
.main-content {
    margin-left: 70px;
}

.page-content {
    margin: 0 auto;
    width: 1200px;

    .left {
        width: 320px;
        float: right;
    }

    .right {
        width: 790px;
        float: right;
        margin-left: 20px;

        .card {
            margin-bottom: 0px;
            box-shadow: 0 0 0 rgba(0, 0, 0, 0);
            background-color: transparent;
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
