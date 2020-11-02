<style lang="less"></style>
<template>
    <div class="wet-mask" v-show="show"></div>
    <div :class="['wet-modal', `wet-modal__${type}`,show?'show':'']" v-show="show">
        <div class="modal_hd">
            {{title}}
            <div class="modal_close" @click="Cancel"></div>
        </div>
        <div class="modal_body">
            <span v-if="content">{{content}}</span>
            <slot v-else></slot>
        </div>
        <div class="modal_ft">
            <a href="javascript:;" class="wet-btn wet-btn__middle" @click="Cancel">取 消</a>
            <a href="javascript:;" :class="['wet-btn', 'wet-btn__middle', `wet-btn__${type}`]" @click="Confirm">确 定</a>
        </div>
    </div>
</template>
<script>
import { } from 'vue';
export default {
    props:{
        title:{
            type:String,
            default:'标题'
        },
        type:{
            type:String,
            default:'success'
        },
        show:{
            type:Boolean,
            default:true
        },
        content:{
            type:String,
            default:''
        }
    },
    emits:['cancel','confirm'],
    methods:{
        Cancel(){
            this.$emit('cancel')
        },
        Confirm(){
            this.$emit('confirm')
        }
    }
}
</script>