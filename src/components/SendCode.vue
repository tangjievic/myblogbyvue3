<style lang="less">
.sendcodebtn{
    height: 60px;
    line-height: 60px;
}
</style>
<template>
    <Button block class="sendcodebtn" v-if="!is_send" @click="sendCodeEvent">发送验证码</Button>
    <Button block class="sendcodebtn" disabled v-else>{{time}}后获取</Button>
</template>
<script>
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/index.css';
export default {
    data(){
        return{
            is_send:false,
            time:60,
        }
    },
    components:{
        Button
    },
    methods:{
        sendCodeEvent(){
            this.is_send = true;
            const time = setInterval(()=>{
                this.time --
                if(this.time === 0){
                    this.is_send = false
                    this.time = 60
                    clearInterval(time)
                }
            },1000) 
            this.$emit('sendcode',null)
        }
    }
}
</script>