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
        &::before{
            content: '';
            position: absolute;
            left: 12px;
            top: 50%;
            margin-top: -10px;
            .svgbox(20px);
           background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNNDY0LjI0OCA2NzcuNDg4YzkuOTY3IDkuMTYxIDI1LjQxOCA4LjcxNCAzNC44MzgtMS4wMDlsMjk5LjgxOS0zMDkuNDQxYzkuNTk4LTkuOTA2IDkuMzQ5LTI1LjcxOC0wLjU1OC0zNS4zMTctOS45MDYtOS41OTgtMjUuNzE4LTkuMzQ4LTM1LjMxNiAwLjU1OEw0NjMuMjEgNjQxLjcybDM0Ljg0LTEuMDA4TDMxNi42MDggNDczLjk0Yy0xMC4xNTYtOS4zMzQtMjUuOTU1LTguNjY4LTM1LjI5IDEuNDg3LTkuMzM0IDEwLjE1Ni04LjY2OCAyNS45NTUgMS40ODcgMzUuMjlsMTgxLjQ0MiAxNjYuNzd6JyBmaWxsPScjZmZmZmZmJz48L3BhdGg+PHBhdGggZD0nTTEwMjQgNTEyQzEwMjQgMjI5LjIzIDc5NC43NyAwIDUxMiAwUzAgMjI5LjIzIDAgNTEyczIyOS4yMyA1MTIgNTEyIDUxMmMxMTcuNDEgMCAyMjguODI2LTM5LjY2OSAzMTguNzY4LTExMS4zMTMgMTAuNzktOC41OTUgMTIuNTY5LTI0LjMwOCAzLjk3NS0zNS4wOTctOC41OTQtMTAuNzg5LTI0LjMwOC0xMi41NjgtMzUuMDk3LTMuOTc0QzcxOC40NyA5MzguMjc3IDYxOC4wMDIgOTc0LjA0OSA1MTIgOTc0LjA0OSAyNTYuODE4IDk3NC4wNDkgNDkuOTUxIDc2Ny4xODIgNDkuOTUxIDUxMlMyNTYuODE4IDQ5Ljk1MSA1MTIgNDkuOTUxIDk3NC4wNDkgMjU2LjgxOCA5NzQuMDQ5IDUxMmMwIDg3LjQ5My0yNC4zMzQgMTcxLjMzNy02OS41NzggMjQzLjk2LTcuMjk0IDExLjcwOC0zLjcxNiAyNy4xMTIgNy45OTIgMzQuNDA1IDExLjcwNyA3LjI5NCAyNy4xMSAzLjcxNiAzNC40MDUtNy45OTFDOTk3LjAxNCA3MDEuODggMTAyNCA2MDguODk4IDEwMjQgNTEyeicgZmlsbD0nI2ZmZmZmZic+PC9wYXRoPjwvc3ZnPg==");
        }
    }
    &.warn{
        box-shadow: 0px 3px 7px -2px multiply(@wet-warn,@wet-inverse);
        background-color: @wet-warn;
        &::before{
            content: '';
            position: absolute;
            left: 12px;
            top: 50%;
            margin-top: -10px;
            .svgbox(20px);
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNODk2LjIyIDk0OC41OUgxMjcuNzhxLTM4Ljc3IDAtNjguNDEtMTQuODItMjkuNjUtMTQuODItNDUuNjEtNDEuMDVRLTEuMDYgODY2LjUgMC4wOCA4MzMuNDRxMi4yOC0zMy4wNyAyMC41Mi02Ny4yN0w0MDguMjUgNzEuODNxMTkuMzgtMzQuMjEgNDYuNzQtNTMuNTlRNDgxLjIyIDAgNTEyIDBxMjkuNjQgMCA1Ny4wMSAxOC4yNCAyNi4yMiAxOS4zOCA0NS42IDUzLjU5bDM4OC43OSA2OTQuMzRxMTguMjQgMzQuMiAyMC41MiA2Ny4yNyAxLjE0IDMzLjA2LTEzLjY4IDU5LjI4LTE1Ljk2IDI2LjIzLTQ1LjYxIDQxLjA1LTI5LjY0IDE0LjgyLTY4LjQxIDE0Ljgyek01MTIgNzIuOTdxLTEwLjI2IDAtMjAuNTIgOS4xMnQtMTkuMzggMjUuMDhMODQuNDUgODAyLjY1cS05LjEyIDE1Ljk2LTExLjQgMjkuNjUtMS4xNCAxMy42OCAzLjQyIDIzLjk0IDUuNyA5LjEyIDE5LjM4IDEzLjY4IDEyLjU0IDUuNyAzMS45MyA1LjdoNzY4LjQ0cTE5LjM5IDAgMzEuOTMtNS43IDEzLjY4LTQuNTYgMTkuMzgtMTMuNjggNC41Ni0xMC4yNiAzLjQyLTIzLjk0LTIuMjgtMTMuNjktMTEuNC0yOS42NUw1NTAuNzYgMTA3LjE3cS05LjEyLTE1Ljk2LTE5LjM4LTI1LjA4LTEwLjI2LTkuMTItMTkuMzgtOS4xMnogbTAgNTQ2LjEycS0xNS45NiAwLTI2LjIyLTEwLjI2LTEwLjI2LTEwLjI2LTEwLjI2LTI2LjIyVjI1NC4yNXEwLTE1Ljk2IDEwLjI2LTI2LjIzIDEwLjI2LTEwLjI2IDI2LjIyLTEwLjI2IDE1Ljk2IDAgMjYuMjIgMTAuMjYgMTAuMjYgMTAuMjcgMTAuMjYgMjYuMjN2MzI4LjM2cTAgMTUuOTYtMTAuMjYgMjYuMjItMTAuMjYgMTAuMjYtMjYuMjIgMTAuMjZ6IG0tNTQuNzMgMTI3LjdxMS4xNC0yMi44MSAxNS45Ny0zOC43N1E0ODkuMiA2OTMuMiA1MTIgNjkyLjA2cTIyLjggMS4xNCAzOC43NiAxNS45NiAxNC44MyAxNS45NiAxNS45NyAzOC43Ny0xLjE0IDIzLjk0LTE1Ljk3IDM4Ljc2LTE1Ljk2IDE1Ljk2LTM4Ljc2IDE1Ljk2LTIyLjggMC0zOC43Ni0xNS45Ni0xNC44My0xNC44Mi0xNS45Ny0zOC43NnonIGZpbGw9JyNmZmZmZmYnPjwvcGF0aD48L3N2Zz4=");
        }
    }
    &.risk{
        box-shadow: 0px 3px 7px -2px multiply(@wet-risk,@wet-inverse);
        background-color: @wet-risk;
        &::before{
            content: '';
            position: absolute;
            left: 12px;
            top: 50%;
            margin-top: -10px;
            .svgbox(20px);
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNNTExLjkgNjMuOTdjLTI0Ny4zMSAwLTQ0Ny44IDIwMC40OS00NDcuOCA0NDcuOCAwIDc3Ljg1IDE5Ljg4IDE1MS4wNSA1NC44MiAyMTQuODMgNC44MiAxNy4xIDIwLjUzIDI5LjYzIDM5LjE3IDI5LjYzIDIyLjQ4IDAgNDAuNy0xOC4yMiA0MC43LTQwLjcxbC0wLjM3LTMuNzhjMC0xNy4wNS0xMC40OS0zMS42NC0yNS4zNS0zNy43bDYuMjYtNi4yNmMtMjIuNDUtNDcuNS0zNS4wMS0xMDAuNTktMzUuMDEtMTU2LjYyIDAtMjAyLjY4IDE2NC4zMS0zNjYuOTkgMzY2Ljk5LTM2Ni45OVM4NzguMyAzMDguNDggODc4LjMgNTExLjE2IDcxMy45OSA4NzguMTUgNTExLjMxIDg3OC4xNWMtNzkuODYgMC0xNTMuNzUtMjUuNTMtMjEzLjk5LTY4Ljg0LTcuNDYtOS4wOS0xOC43OS0xNC45LTMxLjQ3LTE0LjktMjIuNDggMC00MC43IDE4LjIyLTQwLjcgNDAuNzFsMC4zNyAzLjc4YzAgMTguMTIgMTEuODQgMzMuNDcgMjguMjEgMzguNzQgNzIuOTcgNTEuNTggMTYyLjAzIDgxLjkxIDI1OC4xOSA4MS45MSAyNDcuMzEgMCA0NDcuNzktMjAwLjQ4IDQ0Ny43OS00NDcuNzktMC4wMi0yNDcuMy0yMDAuNS00NDcuNzktNDQ3LjgxLTQ0Ny43OXogbTE3NC4xNCAyNzIuMTRjLTE1LjktMTUuOS00MS42Ny0xNS45LTU3LjU2IDBsLTExNi42OSAxMTYuNi0xMTcuMDQtMTE3LjEyYy0xNS45LTE1LjktNDEuNjctMTUuOS01Ny41NyAwLTE1Ljg5IDE1LjktMTUuODkgNDEuNjcgMCA1Ny41Nkw0NTQuNTcgNTA5LjkgMzM3Ljg5IDYyNi40OGMtMTUuOSAxNS45LTE1LjkgNDEuNjcgMCA1Ny41NyAxNS45IDE1Ljg5IDQxLjY3IDE1Ljg5IDU3LjU2IDBsMTE2LjQ3LTExNy4xMSAxMTYuNTMgMTE1LjljMTUuOSAxNS45IDQwLjc3IDE2LjggNTYuNjcgMC45IDE1LjktMTUuOSAxNS44OS00MS42NyAwLTU3LjU2TDU2OC43OSA1MDkuNzZsMTE2LjM1LTExNi45OWMxNS45LTE1Ljg5IDE2LjgtNDAuNzYgMC45LTU2LjY2eicgZmlsbD0nI2ZmZmZmZic+PC9wYXRoPjwvc3ZnPg==");
        }
    }
    &.info{
        box-shadow: 0px 3px 7px -2px multiply(@wet-info,@wet-inverse);
        background-color: @wet-info;
        &::before{
            content: '';
            position: absolute;
            left: 12px;
            top: 50%;
            margin-top: -10px;
            .svgbox(20px);
            background-image: url("data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTAyNCAxMDI0JyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJz48cGF0aCBkPSdNNTEyIDEwMjRjLTI4Mi43Njk0NTUgMC01MTItMjI5LjIzMDU0NS01MTItNTEyUzIyOS4yMzA1NDUgMCA1MTIgMHM1MTIgMjI5LjIzMDU0NSA1MTIgNTEyLTIyOS4yMzA1NDUgNTEyLTUxMiA1MTJ6IG0wLTY5LjgxODE4MmMyNDQuMjEyMzY0IDAgNDQyLjE4MTgxOC0xOTcuOTY5NDU1IDQ0Mi4xODE4MTgtNDQyLjE4MTgxOHMtMTk3Ljk2OTQ1NS00NDIuMTgxODE4LTQ0Mi4xODE4MTgtNDQyLjE4MTgxOC00NDIuMTgxODE4IDE5Ny45Njk0NTUtNDQyLjE4MTgxOCA0NDIuMTgxODE4IDE5Ny45Njk0NTUgNDQyLjE4MTgxOCA0NDIuMTgxODE4IDQ0Mi4xODE4MTh6IG03NC4zMTU2MzYtMTg4Ljk1NzA5MWMtMTIuOTE2MzY0IDMyLjg3ODU0NS0zNy40NDU4MTggNDkuMzIwNzI3LTczLjU4MjU0NSA0OS4zMjA3MjgtNDQuMTk0OTA5LTMuNjQyMTgyLTY5LjQyMjU0NS0yMC45NDU0NTUtNzUuNjc3MDkxLTUxLjkxNTYzN2EzNC45MDkwOTEgMzQuOTA5MDkxIDAgMCAxLTAuNDcxMjczLTEwLjgyMTgxOGwzNy4zMzUyNzMtMzMwLjk5NjM2NEEzNC45MDkwOTEgMzQuOTA5MDkxIDAgMCAxIDUwOC42MDggMzg5LjgxODE4Mmg4LjI1NmEzNC45MDkwOTEgMzQuOTA5MDkxIDAgMCAxIDM0LjY4OCAzMC45OTM0NTRsMzYuOTY4NzI3IDMyNy43MzIzNjRhMzQuOTA5MDkxIDM0LjkwOTA5MSAwIDAgMS0yLjIwNTA5MSAxNi42ODA3Mjd6TTUxMiAyMjEuMDkwOTA5YzMyLjEzMzgxOCAwIDU4LjE4MTgxOCAyNi4wNDggNTguMTgxODE4IDU4LjE4MTgxOHMtMjYuMDQ4IDU4LjE4MTgxOC01OC4xODE4MTggNTguMTgxODE4LTU4LjE4MTgxOC0yNi4wNDgtNTguMTgxODE4LTU4LjE4MTgxOCAyNi4wNDgtNTguMTgxODE4IDU4LjE4MTgxOC01OC4xODE4MTh6JyBmaWxsPScjZmZmZmZmJz48L3BhdGg+PC9zdmc+");
        }
    }
    
}
</style>
<template>
    <div :class="['wet-alert',type,show?'show':'']" :style="{ transform:`translateY(${positionTop}px)` }">
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