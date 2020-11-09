<style lang="less" scoped>
.find-section_hd {
    width: 100%;
    background-color: #ffffff;
    font-size: 16px;
    padding-bottom: 10px;
}

.container {
    position: relative;
    margin: auto;
    width: 300px;
    height: 100px;
}

.container .search {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 65px;
    height: 65px;
    background: #2bb9ad;
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
}

.container .search:hover {
    cursor: pointer;
}

.container .search::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 22px;
    right: 0;
    bottom: 0;
    left: 22px;
    width: 12px;
    height: 2px;
    background: white;
    transform: rotate(45deg);
    transition: all .5s;
}

.container .search::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -5px;
    right: 0;
    bottom: 0;
    left: -5px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid white;
    transition: all .5s;
}

.container input {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    background: #2bb9ad;
    color: white;
    text-shadow: 0 0 10px #2bb9ad;
    padding: 0 80px 0 20px;
    border-radius: 30px;
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;
    letter-spacing: 0.1em;
}

.container input:hover {
    cursor: pointer;
}

.container input:focus {
    width: 300px;
    opacity: 1;
    cursor: text;
}

.container input:focus~.search {
    right: -250px;
    background: #3498DB;
    z-index: 6;
}

.container input:focus~.search::before {
    top: 0;
    left: 0;
    width: 25px;
}

.container input:focus~.search::after {
    top: 0;
    left: 0;
    width: 25px;
    height: 2px;
    border: none;
    background: white;
    border-radius: 0%;
    transform: rotate(-45deg);
}

.container input::placeholder {
    color: white;
    opacity: 0.5;
    font-weight: bolder;
}
</style>
<template>
<div class="view_page">
    <div class="navbar-top">
        <div class="side-nav-panel-left"></div>
        <div class="site-brand">
            <a>
                <h1 class="title">SEARCH-BLOG</h1>
            </a>
        </div>
        <div class="side-nav-panel-right"></div>
    </div>
    <div class="find-section_hd">
        <div class="hd_box">
            <div class="container">
                <input type="text" placeholder="查找文章">
                <div class="search"></div>
            </div>
        </div>
    </div>
    <div class="blog-list">
        <div class="list_hd slider-tag warn">查找结果</div>
        <ul class="list_ul">
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
            <li class="blog-detailt border-1px">
                <h5 class="art_title"><a href="">文章标题</a></h5>
                <div class="art_tag"><span><i class="fa fa-calendar-minus-o"></i>2021/08/09 </span><span><i class="fa fa-pencil-square-o"></i>TANGJIE </span><span><i class="fa fa-fire"></i>33 </span></div>
                <p>简介</p>
                <div class="btn_box"><button class="button-default">阅读详情</button></div>
            </li>
        </ul>
        <div class="pagenation"><button class="pre">上一页</button>
            <div class="txt">第0页</div><button class="next">下一页</button>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>
