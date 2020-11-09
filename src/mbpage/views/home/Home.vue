<style lang="less">
@import './home.less';
</style>
<template>
<div class="home">
    <div class="navbar-top">
        <div class="side-nav-panel-left"></div>
        <div class="site-brand">
            <a>
                <h1 class="title">TANGJIE-BLOG</h1>
            </a>
        </div>
        <div class="side-nav-panel-right"></div>
    </div>
    <div class="slider">
        <ul class="slides">
            <li>
                <div class="caption slider-content center-align ">
                    <div class="container">
                        <h2>TANGJIE-BLOG</h2>
                        <h4>欢迎访问本站</h4>
                    </div>
                </div>
            </li>
            <li>
                <div class="caption slider-content center-align">
                    <div class="container">
                        <h2>加活不加班，前端改变视界</h2>
                        <h4>学习</h4>
                    </div>
                </div>
            </li>
            <li>
                <div class="caption slider-content center-align">
                    <div class="container">
                        <h2>一路向前，所过皆是阳光</h2>
                        <h4>快乐</h4>
                    </div>
                </div>
            </li>
        </ul>

    </div>

    <div class="section who-we-are boder-bos_shaow">
        <div class="container">
            <div class="row">
                <div class="col s4">
                    <div class="content" @click="openModel">
                        <i class="fa fa-th-large"></i>
                        <h5 class="cotent_label">分类</h5>
                    </div>
                </div>
                <div class="col s4">
                    <div class="content" @click="goPage('video')">
                        <i class="fa fa-laptop"></i>
                        <h5 class="cotent_label">视频</h5>
                    </div>
                </div>
                <div class="col s4">
                    <div class="content" @click="goPage('tool')">
                        <i class="fa fa-leaf"></i>
                        <h5 class="cotent_label">工具</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section quote">
        <div class="slider-tag warn">最新更新</div>
        <div class="container">
            <h4 class="title">文章标题</h4>
            <p>文章简介</p>
            <button class="button-default">阅读详情</button>
        </div>
    </div>
    <div class="blog-list">
        <div class="list_hd slider-tag warn">文章列表</div>
        <ul class="list_ul">
            <li class="blog-detailt border-1px" v-for="(item,index) in state.artlist" :key="index">
                <h5 class="art_title"><a href="">{{item.title}}</a></h5>
                <div class="art_tag">
                    <span>
                        <i class="fa fa-calendar-minus-o"></i>{{moment(item.createtime*1000).format('YYYY-MM-DD')}}
                    </span>
                    <span>
                        <i class="fa fa-pencil-square-o"></i>{{item.author}}
                    </span>
                    <span>
                        <i class="fa fa-fire"></i>{{item.seenum}}
                    </span>
                </div>
                <p>简介</p>
                <div class="btn_box">
                    <button class="button-default" @click="goArtDetail">阅读详情</button>
                </div>
            </li>
        </ul>
        <div class="pagenation">
            <button class="pre">上一页</button>
            <div class="txt">第{{state.page}}页</div>
            <button class="next">下一页</button>
        </div>
    </div>
    <div class="ios"></div>
    <AntModal
        title="文章分类选择"
        :visible="state.visible"
        @ok="handleOk"
        @cancel="handleCancel"
        cancelText="取消"
        okText="确定"
    >
        <ul class="blog-artlist">
            <li v-for="item in catelist" :key="item.id">
                <ant-btn block>{{item.catename}}</ant-btn>
            </li>
        </ul>
    </AntModal>
</div>
</template>

<script>
import Home from './home';
export default Home;
</script>
