<template>
<nav class="righttoolnav">
    <ul class="list-wrap">
        <li title="收藏" @click="collecAction" v-if="!status.havecol">
            <i class="icon  ri-star-line" style="color:rgb(123, 237, 159)"></i>
        </li>
        <li title="取消收藏" @click="collecAction" v-else>
            <i class="icon  ri-star-fill" style="color:rgb(123, 237, 159)"></i>
        </li>
        <li title="点赞" @click="likeAction" v-if="!status.havezan">
            <i class="icon  ri-heart-2-line" style="color:#ff6b81"></i>
        </li>
        <li title="取消点赞" v-else @click="likeAction">
            <i class="icon  ri-heart-2-fill" style="color:#ff6b81"></i>
        </li>
        <li title="回到顶部" @click="goTop">
            <i class="icon ri-sort-asc" style="color:rgb(112, 161, 255)"></i>
        </li>
    </ul>
</nav>
</template>

<script>
import jQuery from 'jquery';
import $alert from '../wetui/base/alert/alert';
import {
    getArtLikeCollect,
    userLikeArt,
    userCollectArt
} from '../apilist'
import {
    onMounted,
    reactive,
} from 'vue';

export default {
    setup() {
        const status = reactive({
            havezan: false,
            havecol: false,
            uid: 1,
            aid: 0,
            islogin: false
        })

        const likeAction = () => {
            if (status.islogin && status.uid !== -1) {
                userLikeArt({
                    uid: status.uid,
                    aid: status.aid,
                }).then(res => {
                    $alert({
                        type: 'success',
                        content: res.message
                    })
                    getArtLikeCollect({
                        uid: status.uid,
                        aid: status.aid
                    }).then(res => {
                        status.havezan = res.result.havezan
                        status.havecol = res.result.havecol
                    })
                })
            } else {
                $alert({
                    type: 'warn',
                    content: '尚未登录'
                })
            }
        }
        const collecAction = () => {
            if (status.islogin && status.uid !== -1) {
                userCollectArt({
                    uid: status.uid,
                    aid: status.aid,
                }).then(res => {
                    $alert({
                        type: 'success',
                        content: res.message
                    })
                    getArtLikeCollect({
                        uid: status.uid,
                        aid: status.aid
                    }).then(res => {
                        status.havezan = res.result.havezan
                        status.havecol = res.result.havecol
                    })
                })
            } else {
                $alert({
                    type: 'warn',
                    content: '尚未登录'
                })
            }
        }
        //回到顶部
        const goTop = () => {
            let timer = null
            cancelAnimationFrame(timer);
            //获取当前毫秒数
            let startTime = +new Date();
            //获取当前页面的滚动高度
            let b = document.body.scrollTop || document.documentElement.scrollTop;
            let d = 500;
            let c = b;
            timer = requestAnimationFrame(function func() {
                let t = d - Math.max(0, startTime - (+new Date()) + d);
                document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
                timer = requestAnimationFrame(func);
                if (t == d) {
                    cancelAnimationFrame(timer);
                }
            });
        }
        onMounted(() => {
            status.uid = jQuery('#app').data('uid');
            status.aid = jQuery('#app').data('aid');
            if (status.uid !== -1) {
                status.islogin = true
            } else {
                status.islogin = false
            }
            if(status.islogin&&!isNaN(status.uid)){
                getArtLikeCollect({
                    uid: status.uid,
                    aid: status.aid
                }).then(res => {
                    status.havezan = res.result.havezan
                    status.havecol = res.result.havecol
                    //console.log(status)
                })
            }else{
                status.uid = -1;
                status.aid = -1;
            }
        })
        return {
            goTop,
            collecAction,
            likeAction,
            status
        }
    }
}
</script>

<style lang="less">
.righttoolnav {
    position: fixed;
    right: 0;
    top: 75%;
    margin-top: -110px;
    height: 150px;
    width: 60px;

    .icon {
        font-size: 22px;
    }

    .list-wrap {
        display: flex;
        flex-direction: column;
        background: #34495E;
        list-style: none;
        justify-content: space-around;
        height: 100%;
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 15px 38px -5px rgba(0, 0, 0, 0.14);
    }

    .list-wrap li {
        cursor: pointer;
        position: relative;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

        &:hover {
            background-color: fade(#000000, 20%);

            .icon {
                font-size: 30px;
            }
        }
    }
}
</style>
