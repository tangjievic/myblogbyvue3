<style lang="less">
.toc_box{
    transform: translateY(0);
    transition: top 0.2s ease-in-out,transform 0.2s ease-in-out;
}
.toc_box.fixed-top{
    position: fixed!important;
    top: 75px;
    width: 300px;
}
.toc{
    box-sizing: border-box;
    padding:4px 0;
    overflow: hidden;
    min-height: 200px;
}

.toc {
    width        : 100%;
    max-width    : 350px;
    color        : #333;
    position     : relative;
    background   : #fff;
}
.toc-hightlight {
    width      : 278px;
    background : #eee;
    position   : absolute;
    left       : 10px;
    top        : 0;
    border-left: 3px solid #1ABC9C;
    transition : all .2s ease;
}



.toc-brand {
    padding      : 0 15px;
    font-weight  : bold;
    font-size    : 18px;
    line-height  : inherit;
    white-space  : nowrap;
    display      : block;
    width        : 100%;
    overflow     : hidden;
    text-overflow: ellipsis;
}

.toc,
.toc .toc-brand {
    transition: all 0.3s ease-in-out;
}

.toc.toc-hidden {
    width: 0;
}

.toc.toc-hidden .toc-brand {
    padding: initial;
}

.toc-navbar {
    position       : relative;
    display        : block;
    scroll-behavior: smooth;
    width: 100%;
    box-sizing: border-box;
    max-height: 400px!important;
    overflow-y: auto!important;
    overflow-x: hidden;
}

/* 滚动条 */
.toc-navbar::-webkit-scrollbar-thumb:horizontal {
    /*水平滚动条的样式*/
    width           : 5px;
    background-color: #CCCCCC;
    border-radius   : 6px;
}

.toc-navbar::-webkit-scrollbar-track-piece {
    background-color: #fff;
    /*滚动条的背景颜色*/
    border-radius: 0;
    /*滚动条的圆角宽度*/
}

.toc-navbar::-webkit-scrollbar {
    width: 10px;
    /*滚动条的宽度*/
    height: 8px;
    /*滚动条的高度*/
}

.toc-navbar::-webkit-scrollbar-thumb:vertical {
    /*垂直滚动条的样式*/
    height          : 50px;
    background-color: #999;
    border-radius   : 4px;
    outline         : 2px solid #fff;
    outline-offset  : -2px;
    border          : 2px solid #fff;
}

.toc-navbar::-webkit-scrollbar-thumb:hover {
    /*滚动条的hover样式*/
    height          : 50px;
    background-color: #9f9f9f;
    border-radius   : 4px;
}

.toc-nav {
    box-sizing: border-box;
    display      : block;
    padding-left : 0;
    margin-bottom: 0;
    transition   : all .3s ease;
}

.toc-link {
    box-sizing: border-box;
    display        : block;
    padding        : 0.2*10px 1.7*10px;
    font-size      : 14px;
    text-decoration: none;
    color          : #555;
    position       : relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
}
.toc-link.active::before,
.toc-link:hover::before {
    background: fade(#1ABC9C,60%);
}

.toc-link.active,
.toc-link:hover {
    color: fade(#1ABC9C,60%);
    font-weight: 600;
}


.toc-link.ml-1 {
    font-weight: 600;
    margin-left: 10px !important;
}

.toc-link.ml-2 {
    margin-left: 2*10px !important;
}

.toc-link.ml-3 {
    margin-left: 3*10px !important;
}

.toc-link.ml-4 {
    margin-left: 4*10px !important;
}

.toc-link.ml-5 {
    margin-left: 5*10px !important;
}

.toc-link.ml-6 {
    margin-left: 6*10px !important;
}
</style>
<template>
    <div ref="artnav"></div>
</template>
<script>
import arthorNav from './archor.js';
import { onMounted,ref } from 'vue';
import $ from 'jquery';

function pageLoadInit(){
    const view = document.getElementById('loading_init');
    if(view){
        setTimeout(() => {
            view.style.opacity = '0';
        }, 1500);
        setTimeout(() => {
            view.style.display = 'none';
        }, 2000);
    }
}

function lisenSroll (domTowinTop){
    let document_height = $(document).height()
    $(document).scroll(()=>{
       let scroll_top = $(window).scrollTop();
       if(scroll_top + 70>domTowinTop){
            if((document_height - scroll_top)<1050){
                $('.toc_box').css({
                    transform:` translateY(-88px)`
                })
            }else{
                $('.toc_box').css({
                    transform:` translateY(0)`
                })
            }
            if($('.toc_box').hasClass('fixed-top')){
                return
            }
            $('.toc_box').addClass('fixed-top')
       }else{
            $('.toc_box').removeClass('fixed-top')
       }
    })
}

export default {
    setup(){
        let artnav = ref(null);
        onMounted(()=>{
            //确定元素距离页面顶部距离
            let offsetTop = $(artnav.value).offset().top;
            new arthorNav({
                classNames:{
                    toc: 'toc',
                    hidden: 'toc-hidden',
                    fxied:false,
                    brand: 'toc-brand',
                    navbar: 'toc-navbar',
                    hightlight: 'toc-hightlight',
                    nav: 'toc-nav',
                    link: 'toc-link',
                    active: 'active',
                    marginLeft1: 'ml-1',
                    marginLeft2: 'ml-2',
                    marginLeft3: 'ml-3',
                    marginLeft4: 'ml-4',
                    marginLeft5: 'ml-5',
                    marginLeft6: 'ml-6'
                }
            }).reset();
            lisenSroll(offsetTop);
            pageLoadInit();
        })

        return {
            artnav
        }
    }
}
</script>