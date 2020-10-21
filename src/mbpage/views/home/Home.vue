<style lang="less">
@import './home.less';
</style>
<template>
<div class="home">
    <div class="navbar-top">
        <div class="side-nav-panel-left"></div>
        <div class="site-brand">
            <a href="index.html">
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
                    <div class="content">
                        <i class="fa fa-th-large"></i>
                        <h5 class="cotent_label">分类</h5>
                    </div>
                </div>
                <div class="col s4">
                    <div class="content">
                        <i class="fa fa-laptop"></i>
                        <h5 class="cotent_label">视频</h5>
                    </div>
                </div>
                <div class="col s4">
                    <div class="content">
                        <i class="fa fa-leaf"></i>
                        <h5 class="cotent_label">工具</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="section quote">
        <div class="container">
            <h4>文章标题</h4>
            <p>文章简介</p>
            <button class="button-default">阅读详情</button>
        </div>
    </div>

    <ul class="blog-list">
        <li class="list_hd">文章列表</li>
        <li class="blog-detailt">
            <h5><a href="">How To Design Fresh and Clean</a></h5>
            <div class="date"><span><i class="fa fa-calendar"></i>July 22, 2016</span></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quasi sit aperiam quia voluptatem odio, facere iusto magni sunt, cumque quae, molestias temporibus ducimus repellendus!</p>
            <div class="button-default">阅读详情</div>
        </li>
    </ul>
</div>
</template>

<script>
import Home from './home';
export default Home;
</script>
