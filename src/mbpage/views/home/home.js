import { onMounted } from 'vue';
export default {
    setup(){
        onMounted(()=>{
            const $ = window.$;
            $(".slider").slider({full_width: true});
        })
    }
}