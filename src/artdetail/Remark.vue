<style lang="less" scoped>
.no-recomen {
    list-style: none;
}

#artcomment_input {
    &:focus {
        outline: #3498DB solid 1px;
    }
}
</style>
<template>
<div>
    <section class="box-boder page_section">
        <h3 class="section_hd">评论发布</h3>
        <div class="artcomment_box">
            <textarea id="artcomment_input" v-model="submitData.content"></textarea>
        </div>
        <div class="btn-right">
            <button type="submit" class="submit_btn" @click="addRemark">
                <span class="">提交评论</span> <i class="mdi mdi-send"></i>
            </button>
        </div>
    </section>
    <section class="box-boder page_section">
        <h3 class="section_hd">历史评论</h3>
        <ul class="art_recoment">
            <li class="recomen-item">
                <div class="conversation-list">
                    <div class="ctext-wrap">
                        <div class="conversation-name">
                            <span>昵称</span>
                            <div class="user_level">
                                <span class="wet-tag wet-tag__sm wet-tag__success">VIP用户</span>
                                <span class="wet-tag wet-tag__sm ">普通用户</span>
                            </div>
                        </div>
                        <div class="ctext-wrap-content">
                            <p>
                                我是发的离开as砥砺奋进塑料袋咖啡富士达
                            </p>
                        </div>
                        <p class="chat-time"><i class="mdi mdi-clock-outline"></i> 2012/01/08</p>
                    </div>
                </div>
            </li>
            <li class="no-recomen">
                <img alt="没有评论" src="./none.png">
                <div class="txt">暂无评论，赶紧来抢沙发吧</div>
            </li>
        </ul>
    </section>
</div>
</template>

<script>
import $ from 'jquery';
import $alert from '../wetui/base/alert/alert'
import {
    giveRemak,
    getHisRemark
} from '../apilist'
import {
    onMounted,
    reactive
} from 'vue';
//获取到用户id，aid备用
const uid = $('#tj-blog__remark').data("uid");
const aid = $('#tj-blog__remark').data("aid");

export default {

    setup() {
        const status = reactive({
            remarklist : []
        })
        const submitData = reactive({
            uid: Number(uid),
            aid: Number(aid),
            content: ''
        })
        const addRemark = () => {
            if (Number(uid) != -1) {
                userLikeArt(submitData).then(res => {
                    $alert({
                        type: 'success',
                        content: res.message
                    })
                    getHisRemark({
                        uid: submitData.uid,
                        aid: submitData.aid
                    }).then((res) => {
                        status.remarklist = res.result
                    })
                })
            } else {
                $alert({
                    type: 'warn',
                    content: '用户尚未登录，请登录后再发送评论'
                })
            }
        }
        onMounted(() => {
            getHisRemark({
                uid: submitData.uid,
                aid: submitData.aid
            }).then((res) => {
                status.remarklist = res.result
            })
        })
        return {
            addRemark,
            submitData
        }
    }
}
</script>
