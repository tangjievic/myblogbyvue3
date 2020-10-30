<template>
<div>
    <LeftTool></LeftTool>
    <ViewBubble></ViewBubble>
</div>
</template>

<script>
import LeftTool from '../components/LeftTool.vue';
import ViewBubble from '../components/ViewBubble.vue';
export default {
    name: 'App',
    components: {
        LeftTool,
        ViewBubble
    }
}
</script>

<style lang="less">
@import '../admin/assets/css/icons.min.css';
@import '../style/lesselement/reward.less';
@import '../style/lesselement/hotart.less';
@import '../tool/code.less';

.page-right {
    .page_section:first-child {
        margin-top: 0;
    }

    .tags_box {
        padding: 0 0 15px 0;
    }

    .art_msg {
        font-size: 15px;
        padding-bottom: 15px;
    }

    .art_desc:after,
    .art_desc:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
    }

    .art_desc {
        min-height: 50px;
        color: #fff;
        background: linear-gradient(to top left, #3C78FC, #A5B9FD);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        padding: 15px;
        margin-bottom: 20px;

        &::before {
            right: -10px;
            bottom: -10px;
            width: 50px;
            height: 50px;
            background: linear-gradient(to top left, rgba(90, 194, 231, .1), hsla(0, 0%, 100%, .3));
        }
    }

    .art_desc:after {
        background: linear-gradient(to top left, rgba(90, 194, 231, .1), hsla(0, 0%, 100%, .6));
        left: -20px;
        top: -5px;
        width: 70px;
        height: 70px;
    }

    .art_deline {
        border-bottom: 4px solid #3C78FC;
        width: 750px;
        margin: 0 auto;
        position: relative;

        &::before {
            content: '';
            display: block;
            width: 200px;
            height: 10px;
            border-top-left-radius: 20px;
            position: absolute;
            right: 0;
            background-color: rgba(64, 184, 250, 0.3);
            top: -10px;
        }
    }

    .article {
        font-size: 16px;
        color: #444443;
        background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.04) 3%, rgba(0, 0, 0, 0) 3%);
        background-size: 20px 20px;
        background-position: center center;
    }

    //文章评论样式
    .artcomment_box {
        #artcomment_input {
            display: block;
            box-sizing: border-box;
            width: 100%;
            min-height: 80px;
            padding: .47rem .75rem;
            font-size: .9rem;
            font-weight: 400;
            line-height: 1.5;
            color: #505d69;
            background-clip: padding-box;
            border: 1px solid #eff2f7;
            border-radius: .25rem;
            background-color: #eff2f7
        }
    }

    .btn-right {
        margin-top: 8px;
    }

    .submit_btn {
        cursor: pointer;
        font-weight: 400;
        text-align: center;
        width: 120px;
        border: 1px solid transparent;
        padding: 5px 10px;
        font-size: .9rem;
        line-height: 1.5;
        border-radius: .25rem;
        position: relative;
        display: block;
        overflow: hidden;
        color: #fff;
        background-color: #1abc9c;
        border-color: #1abc9c;
        user-select: none;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background-color: fade(#1abc9c, 80%);
            border-color: fade(#1abc9c, 80%);
        }

        &:active {
            background-color: #1abc9c;
        }
    }

    .art_recoment {
        padding: 0;
        margin: 0;

        .conversation-list {
            margin-bottom: 24px;
            display: inline-block;
            position: relative;
        }

        .recomen-item {
            list-style: none;
        }

        .conversation-name {
            display: flex;

            .user_level {
                margin-left: 15px;
            }
        }

        .ctext-wrap-content {
            padding: 8px 16px;
            // background-color: fade(#5664d2, 50%);
            border: 1px solid fade(#5664d2, 50%);
            border-radius: .25rem;
        }

        .chat-time {
            margin-top: 7px;
            font-size: 12px;
            text-align: right;
        }

        .no-recomen {
            text-align: center;
            padding: 20px;
            color: rgba(231, 122, 140, .5);

            .txt {
                margin-top: 8px;
            }
        }
    }
}
</style>
