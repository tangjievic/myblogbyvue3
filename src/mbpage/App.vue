<template>
<div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'App',
    setup() {

    }
}
</script>

<style lang="less">
@import url('assets/css/materialize.css');
@import url('assets/font-awesome/css/font-awesome.min.css');
@import url('assets/css/normalize.css');
@import url('assets/css/owl.carousel.css');
@import url('assets/css/owl.theme.css');
@import url('assets/css/owl.transitions.css');
@import url('assets/css/fakeLoader.css');
@import url('assets/css/magnific-popup.css');
@import url('assets/css/style.css');
@import url('./views/my/mycenter.less');
.blog-list{
        margin: 15px 15px 0px 15px;
        position: relative;
        padding: 15px 0;
        background-color: #ffffff;
        .blog-detailt{
            background-color: #ffffff;
            padding: 10px;
            margin: 0;
            .art_title{
                font-size: 15px;
                padding-bottom: 8px;
            }
            .art_tag{
                display: flex;
                i{
                    margin-right: 8px;
                    font-size: 16px;
                }
                .fa-calendar-minus-o{
                    color: #64d572;
                }
                .fa-pencil-square-o{
                    color: #8E44AD;
                }
                .fa-fire{
                    color: #FA4E4E;
                }
                span{
                    flex: 1;
                    text-align: center;
                }
            }

            .btn_box{
                .button-default{
                    margin: 0;
                    display: block;
                    width: 120px;
                }
            }
        }
    }
.boder-bos_shaow {
    box-shadow: 0 5px 38px -6px rgba(0, 0, 0, 0.14);
}
.slider-tag{
    position: absolute;
    top: 8px;
    left: 0;
    width: 60px;
    height: 20px;
    border-bottom-right-radius: 13px;
    border-top-right-radius: 13px;
    text-align: center;
    line-height: 20px;
    color: #ffffff;
    &.warn{
        background-image: linear-gradient(to right,#f5b649,#FDAF2B);
    }
}
.border-1px{
    position: relative;
    &::after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
}
.pagenation{
    display: flex;
    align-items: center;
    padding: 2px 10px;
    .pre,.next{
        flex: 1;
        background-color: #fff;
        border: 1px solid #d9d9d9;
    }
    .txt{
        flex: 1.5;
        text-align: center;
    }
}
.view_page{
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.05);
    .site-brand .title{
        font-size: 16px;
    }
}
.ios{
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
}
</style>
