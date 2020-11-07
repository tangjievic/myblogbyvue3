<template>
    <div>
        <ArtList :artlist="artlist"></ArtList>
        <Pagination :total="total" 
        @change="changePage"
        :current="page" size="10"></Pagination>
    </div>
</template>
<script>
import { onBeforeMount, reactive, toRefs } from 'vue';
import ArtList from './Artlist';
import Pagination from 'ant-design-vue/lib/pagination';
import { getArtList } from '../apilist'
export default {
    components:{
        ArtList,
        Pagination
    },
    setup(){
        const status = reactive({
            artlist:[],
            page:1,
            total:0
        })
        const changePage = (page)=>{
            getArtList({
                type:1,
                page:page
            }).then(res=>{
                status.tabledata = res.result.data;
                status.total = res.result.total;
                status.page = res.result.current_page
            })
        }
        onBeforeMount(()=>{
            getArtList({
                type:1,
                page:status.page
            }).then(res=>{
                status.artlist = res.result.data
                status.total = res.result.total; 
                status.page = res.result.current_page
            })
        })
        return{ 
            ...toRefs(status),
            changePage
        }
    }
}
</script>