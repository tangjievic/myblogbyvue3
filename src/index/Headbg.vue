<template>
<div class="tjblog-hd_bg">
    <div v-for="(item,index) in 13" :key="index" :class="['box','box_'+index]">
        <template v-if="index === 1">
            <span v-for="(its,idx) in 15" :key="idx" :class="['boxspan']"></span>
        </template>
        <template v-if="index === 10">
            <span v-for="(its,idx) in 100" :key="idx" :class="['boxspan']"></span>
        </template>
        <template v-if="index === 12">
            <span v-for="(its,idx) in 28" :key="idx" :class="['boxspan']"></span>
        </template>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.tjblog-hd_bg {
    width: 790px;
    height: 300px;
    background-color: fade(#2bb9ad, 90%);
    position: relative;
    z-index: -1;
    overflow: hidden;

    .box {
        position: absolute;
    }

    .box_0 {
        height: 200px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        border: 40px solid fade(#ffffff, 80%);
        top: -130px;
        border-right-color: transparent;
        border-bottom-color: transparent;
        transform: rotate(-45deg);
    }

    .box_1 {
        bottom: 80px;
        height: 100px;
        width: 45px;
        display: flex;
        flex-wrap: wrap;

        .boxspan {
            width: 5px;
            height: 5px;
            margin: 5px;
            border-radius: 50%;
            display: inline-block;
            background-color: fade(#ffffff, 80%);
        }
    }

    .box_3 {
        height: 200px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        border: 40px solid fade(#ffffff, 30%);
        border-top-color: transparent;
        border-left-color: transparent;
        transform: rotate(45deg);
        bottom: -50px;
        left: -130px;
    }

    .box_4 {
        height: 200px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        border: 40px solid fade(#ffffff, 30%);
        right: -85px;
        top: -85px;
    }

    .box_5 {
        height: 200px;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        border: 40px solid fade(#ffffff, 80%);
        right: -125px;
        bottom: -125px;
    }

    .box_6 {
        background-color: fade(#ffffff, 80%);
        height: 20px;
        width: 20px;
        border-radius: 5px;
        left: 200px;
        top: 35px
    }

    .box_7 {
        background-color: fade(#ffffff, 80%);
        height: 10px;
        width: 10px;
        border-radius: 3px;
        left: 180px;
        top: 55px
    }

    .box_8 {
        background-color: fade(#ffffff, 80%);
        height: 20px;
        width: 20px;
        border-radius: 3px;
        left: 230px;
        bottom: 40px;
    }

    .box_9 {
        background-color: fade(#ffffff, 80%);
        height: 8px;
        width: 8px;
        border-radius: 3px;
        left: 200px;
        bottom: 55px;
    }

    .box_10 {
        right: 0;
        top: 0;
        width: 180px;
        display: flex;
        flex-wrap: wrap;

        .boxspan {
            width: 5px;
            height: 5px;
            margin: 6px;
            border-radius: 50%;
            display: inline-block;
            background-color: fade(#ffffff, 30%);
        }
    }

    .box_11 {
        top: 100px;
        right: 200px;

        &::before {
            content: '';
            display: block;
            width: 20px;
            height: 20px;
            border-radius: 3px;
            background-color: fade(#ffffff, 80%);
        }

        &::after {
            content: '';
            position: absolute;
            top: -10px;
            right: -10px;
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 3px;
            background-color: fade(#ffffff, 80%);
        }
    }

    .box_12 {
        left: 50%;
        top: 0;
        display: flex;
        flex-wrap: wrap;
        width: 130px;
        margin-left: -65px;

        .boxspan {
            width: 5px;
            height: 5px;
            margin: 6px;
            border-radius: 50%;
            display: inline-block;
            background-color: fade(#ffffff, 90%);
        }
    }
}
</style>
