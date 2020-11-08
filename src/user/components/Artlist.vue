<style lang="less">
@import '../../style/lesselement/artlist.less';
.ant-pagination{
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
    user-select: none;
    margin: 0;
    position: relative;
    top: 10px;
}
.ant-pagination-item{
    margin: 0 3px;
    display: list-item;
    text-align: -webkit-match-parent;
    outline: #fff auto 5px;
    a{
        position: relative;
        display: block;
        padding: .5rem .75rem;
        line-height: 1.25;
        color: #74788d;
        background-color: #fff;
        border-radius: 50%;
        cursor: pointer;
        &:hover{
            background-color: #eff2f7;
        }
        &:active{
            box-shadow: 0 0 0 0.15rem rgba(86,100,210,.25);
        }
        &:focus{
            z-index: 3;
            box-shadow: 0 0 0 0.15rem rgba(86,100,210,.25);
        }
    }
}
.ant-pagination-next{
    margin: 0 3px;
    outline: #fff auto 5px;
    cursor: pointer;
}
.ant-pagination-prev{
    margin: 0 3px;
    outline: #fff auto 5px;
    cursor: pointer;
}
.ant-pagination-disabled{
    cursor: not-allowed;
    &:active{
        background-color: #fff;
        box-shadow: none;
    }
    &:focus{
        background-color: #fff;
        box-shadow: none;
    }
    &:hover{
        background-color: #fff;
        box-shadow: none;
    }
}
.ant-pagination-item-active{
    a,a:hover,a:active{
        z-index: 3;
        color: #fff;
        background-color: #2bb9ad;
        border-color: #2bb9ad;
        &:hover{
            color: #fff;
            cursor: not-allowed;
        } 
    }
}
.ant-pagination-item-link {
    position: relative;
    display: block;
    height: 35px;
    width: 35px;
    line-height: 35px;
    color: #74788d;
    background-color: #fff;
    border-radius: 50%;
    text-align: center;
    svg{
        position: relative;
        top:-3.3px;
    }
    &:hover{
        background-color: #eff2f7;
    }
    &:active{
        box-shadow: 0 0 0 0.15rem rgba(86,100,210,.25);
    }
    &:focus{
        z-index: 3;
        box-shadow: 0 0 0 0.15rem rgba(86,100,210,.25);
    }
}
.article_box{
    .wet-tag{
        box-sizing: content-box;
    }
    .artlist-link{
        margin-left: 7px;
    }
}
</style>
<template>
    <div class="article_box">
        <ul class="main__articel" style="padding:0">
            <li class="art_ls" v-for="item in artlist" :key="item.id">
                <div class="ls_tagbox">
                    <h3 class="art_h">
                        <span class="wet-tag circle wet-tag__success" v-if="Number(item.type) === 0">原</span>
                        <span class="wet-tag circle wet-tag__warn" v-if="Number(item.type) === 1">转</span>
                        <span class="wet-tag circle wet-tag__info" v-if="Number(item.type) === 2">教</span>
                        <span class="wet-tag circle wet-tag__risk" v-if="Number(item.type) === 3">杂</span>
                        <a :href="`https://www.tangjietop.cn/artical.html?aid=${item.id}`" class="artlist-link">{{item.title}}·{{item.stitle}}</a>
                    </h3>
                    <div class="art_tag">
                        <span class="wet-tag small wet-tag__success" v-if="Number(item.islogin) !==0">公众文章</span>
                        <span class="wet-tag small wet-tag__info" v-if="Number(item.islogin) ===1">非公众文章</span>
                        <span class="wet-tag small wet-tag__risk" v-if="Number(item.isvip) ===1">VIP专属</span>
                    </div>
                </div>
                <p class="art_desc"> </p>
                <div class="btn_wrapper">
                    <div class="art_base">
                        <span><i class="ri-edit-circle-fill"></i>&nbsp;作者：&nbsp;{{item.author}}</span>
                        <span><i class="ri-chat-history-fill"></i>&nbsp;发布时间：&nbsp;{{timeFormat(item.createtime)}}</span>
                        <span><i class="ri-fire-fill"></i>&nbsp;点击量：&nbsp;{{item.seenum}}</span>
                    </div>
                    <div class="btn_div"> <a :href="`https://www.tangjietop.cn/artical.html?aid=${item.id}`" class="wet-btn">阅读详情</a> </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { toRefs } from 'vue';
import Moment from 'moment';
export default {
    props:{
        artlist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    setup(props){

        const timeFormat = (time)=>{
            return Moment(time*1000).format('YYYY-MM-DD')
        }
        return{
            ...toRefs(props),
            timeFormat
        }
    }
}
</script>