<style lang="less">
@wet-primary:#2bb9ad;
@wet-inverse:#34495E;
@wet-success: #64d572;
@wet-info: #3498DB;
@wet-warn: #F39C12;
@wet-risk: #FA4E4E;
.svgbox(@size){
    display: block;
    width: @size;
    height: @size;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
@media screen and (max-width: 450px) {
    .wet-alert {
        margin-left: 0;
        width: auto;
    }
}
.wet-alert{
    width: 400px;
    border-radius: 2px;
    color: #ffffff;
    text-align: center;
    position: fixed;
    z-index: 1050;
    top:0;
    left:50%;
    margin-left: -200px;
    transform:translateY(0);
    opacity: 0;
    transition: transform 0.3s ease-in,opacity 0.5s ease-in;
    & i{
        position: absolute;
        left: 12px;
        top: 50%;
        font-size: 20px;
        transform: translateY(-50%);
    }
    &.show{
        opacity: 1;
    }
    .content{
        padding-left:35px;
        overflow: hidden;
        width: 100%;
        text-overflow:ellipsis;
        white-space: nowrap;
        height: 45px;
        line-height: 45px;
        box-sizing: border-box;
    }
    &.primary{
        box-shadow: 0px 3px 7px -2px multiply(@wet-primary,@wet-inverse);
        background-color: @wet-primary;
        &::before{
            content: '';
            position: absolute;
            left: 12px;
            top: 50%;
            margin-top: -10px;
            .svgbox(20px);
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADP0lEQVRYR72XTYiWVRTHf38shTbOqnAWI2nikFpjMIuolS6GRB1qYQjT+FHkjBLtLGgRBEG61MgJFzJoZERQTkIIuSpXfmUpKPkVREFDEG5My38c574vT888z/s87/sOns0M77333N+95/+cc67owmz3AJb0V6du1OnCWGf7kwQw0qmfbgE+TwCbHhiA7WeAF4DFwPq08dfATeAbSWfagal1A7bnAa8DbwN9cWpgGngICB93gEfTxr8AHwAfS7pXBVMJYHs1cBhYAZwDDgGfSpq23QyB7YXAs+l2dgA/A6OSzraCaAlg+2VgErgRp5f0ZdaZ7aNJA5tzvy8C9gEbgC2SPiuDKAWw/RLwRTrxTkm3805sL00A1wrGwneEYjewVVIcZJYVAtjuB+LqJiWNV8Wx1bjtCeA1YEjSt/m5ZQAR638jppLudgnwMHAqiXSppH+y/mYB2B5NcR+UdLqbzRtr043+BIxLOlgF8EOITtLwXGyegYhQPC9pZSmA7V7gV2CjpKkqgHZqge01QGigX9Llhu//hcD2NuBDoKdO7NupBSmZRdGKzzn2uG95gPeAYUlPV50+xrOJqOb8C8CUpHeaALYfj7QJzAeWp78/An8DY5Ku55JMdv6TaexSzfmrUtqOEMz4t70EOAAsyAFE4gmAyIJNy83PAtSZnwWYmZ9z/j6wTlLk/0rrIATnga8kvVumgV0pfYYIIxG1tLJaULTIdoT4T+ANSVHQCkW4DLgCrJV0sgZAaS3Ir7UdeSWKWa+k3woBkrJDgN9LGqsCaGfcdmzeJykamqYVpeIoPvuBpySFurs22/FZR/xnVcUigOh+4tP7HXiuTkJqRWi7UYyQNJifW1YNh4Djqa0KYXZstj8CXgEGJF2tBZC0EK12tGJ7Jb1VouzSd4HtR1Iot0fzKikONMvqtmTHgDez6k2Qhe8C2y+mzzk6585asgaq7QHgCPBEypgngO8k3co1pY8B8T54FQjRXQRGJIX4Sq2yK04nDWFGpxuhiLY87I/Ulsf/0TVl2/I9wMSctOV59MzDJECi6w2Lh0nUjHiYtGzDa4uwjuzbrQVti7AKop1aUOarlgbKFrd6F1TBN8b/A3mgc2tfABSAAAAAAElFTkSuQmCC);
        }
    }
    &.success{
        box-shadow: 0px 3px 7px -2px multiply(@wet-success,@wet-inverse);
        background-color: @wet-success;
    }
    &.warn{
        box-shadow: 0px 3px 7px -2px multiply(@wet-warn,@wet-inverse);
        background-color: @wet-warn;
    }
    &.risk{
        box-shadow: 0px 3px 7px -2px multiply(@wet-risk,@wet-inverse);
        background-color: @wet-risk;
    }
    &.info{
        box-shadow: 0px 3px 7px -2px multiply(@wet-info,@wet-inverse);
        background-color: @wet-info;
    }
    
}
</style>
<template>
    <div :class="['wet-alert',type,show?'show':'']" :style="{ transform:`translateY(${positionTop}px)` }">
        <i class="ri-check-line" v-show="type === 'success'"></i>
        <i class="ri-error-warning-line" v-show="type === 'warn'"></i>
        <i class="ri-close-line" v-show="type === 'risk'"></i>
        <i class="ri-information-line" v-show="type === 'info'"></i>
        <div class="content">{{content}}</div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { alertObj } from './alert';
export default {
    data(){
        return{
            positionTop:0,
            show:false,
            alertNum:0,
        }
    },
    watch:{
        alertNum(val,oldval){
            if(val !== oldval){
                this.positionTop = this.$el.clientHeight*(val-1)+10*val;
                console.log(this.positionTop)
            }
        }
    },
    props:{
        content:String,
        type:String
    },
    setup(props){
        return reactive({
            props
        })
    },
    mounted(){
        console.log(this.$el.clientHeight);
        this.alertNum = alertObj._num;
        this.positionTop = this.$el.clientHeight*(this.alertNum-1)+10*this.alertNum;
        this.show = true;
        setTimeout(()=>{
            this.alertNum --;
            this.show = false;
            alertObj._num --;
            setTimeout(()=>{
                this.$parent.$removeVmNode();
            },500)
        },2000)
    }
}
</script>