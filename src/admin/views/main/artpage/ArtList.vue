<style lang="less">

</style>

<template>
<ContainerFluid title="文章列表" moudleText="文章管理菜单" routerText="文章列表">
    <div class="card">
        <div class="card-body">
            <TablePanel 
            @edit="editeArtData"
            :columns="columns" 
            :data="tabledata">
            </TablePanel>
            <Pagination :total="total" :current="page" :pageSize="10" @change="changePage"></Pagination>
        </div>
    </div>
</ContainerFluid>
</template>

<script>
import {
    reactive,
    toRefs,
    onBeforeMount
} from 'vue'
import TablePanel from '../../../components/TablePanel';
import ContainerFluid from '../../../layout/ContainerFluid';
import Pagination from 'ant-design-vue/lib/pagination';
import { getArtList } from '../../../../apilist/index';
import { useRouter } from 'vue-router';
export default {
    components: {
        TablePanel,
        ContainerFluid,
        Pagination
    },
    setup() {
        const router = useRouter();
        const status = reactive({
            columns: [{
                    title: "ID",
                    dataIndex: "id",
                    key: 'id'
                },
                {
                    title: "文章标题",
                    dataIndex: "title",
                },
                {
                    title: "文章副标题",
                    dataIndex: "stitle",
                },
                {
                    title: "文章所属",
                    dataIndex: "cate_id",
                },
                {
                    title: "文章标签",
                    dataIndex: "tag_id",
                },
                {
                    title: "赞数",
                    dataIndex: "zan",
                },
                {
                    title: "游览量",
                    dataIndex: "seenum",
                },
                {
                    title: "收藏量",
                    dataIndex: "cllector",
                },
                {
                    title: "文章类型",
                    dataIndex: "type",
                },
                {
                    title: "示例链接",
                    dataIndex: "linkurl",
                },
                {
                    title: "创作日期",
                    dataIndex: "createtime",
                },
                {
                    title: '是否登录查看',
                    dataIndex: 'islogin'
                },
                {
                    title: "是否VIP文章",
                    dataIndex: "isvip",
                },
            ],
            tabledata: [],
            total:0,
            page:0
        })
        //分页改变，请求数据
        const changePage = (page) =>{
            getArtList({
                type:0,
                page:page
            }).then(res=>{
                status.tabledata = res.result.data;
                status.total = res.result.total;
                status.page = res.result.current_page
            })
        }
        //编辑文章
        const editeArtData = (event) =>{
            sessionStorage.setItem('editeartdata',JSON.stringify(event))
            router.push({
                name:'artedite',
            })
        }
        //数据初始化
        onBeforeMount(() => {
            console.log('数据初始化')
            getArtList({
                page:1,
                type:0
            }).then(res=>{
                status.tabledata = res.result.data;
                status.total = res.result.total;
                status.page = res.result.current_page
            })
        })
        return {
            ...toRefs(status),
            changePage,
            editeArtData
        }
    }
}
</script>
