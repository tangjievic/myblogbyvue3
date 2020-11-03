<style lang="less">

</style>

<template>
<ContainerFluid title="文章列表" moudleText="文章管理菜单" routerText="文章列表">
    <div class="card">
        <div class="card-body">
            <TablePanel :columns="columns" :data="tabledata">
            </TablePanel>
        </div>
    </div>
</ContainerFluid>
</template>

<script>
import {
    provide,
    reactive,
    toRefs,
    onBeforeMount
} from 'vue'
import TablePanel from '../../../components/TablePanel';
import ContainerFluid from '../../../layout/ContainerFluid';
export default {
    components: {
        TablePanel,
        ContainerFluid
    },
    setup() {
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
                    dataIndex: "cretatime",
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
            tabledata: []
        })

        //数据初始化
        onBeforeMount(() => {
            console.log('数据初始化')
        })
        return {
            ...toRefs(status)
        }
    }
}
</script>
