<template>
<nav class="righttoolnav">
    <ul class="list-wrap" title="">
        <li title="简历制作系统" @click="giveSuggest">
            <i class="icon ri-u-disk-fill" style="color:rgb(123, 237, 159)"></i>
        </li>
        <li title="项目设计系统" @click="clickLike">
            <i class="icon  ri-file-copy-2-fill" style="color:#ff6b81"></i>
        </li>
        <li title="回到顶部" @click="goTop">
            <i class="icon ri-sort-asc" style="color:rgb(112, 161, 255)"></i>
        </li>
    </ul>
</nav>
</template>

<script>
export default {
    setup() {
        const giveSuggest = () => {

        }
        const clickLike = () => {

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
        return {
            goTop,
            giveSuggest,
            clickLike
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
        &:hover{
            background-color: fade(#000000,20%);
        }
    }
}
</style>
