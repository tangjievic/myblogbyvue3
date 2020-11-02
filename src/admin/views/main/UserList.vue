<style lang="less">

</style>

<template>
<ContainerFluid title="用户列表" moudleText="基础菜单" routerText="用户管理">
    <div class="card">
        <div class="card-body">
            <TablePanel>
                <template v-slot:createtime="{item}">
                    <a href="#!">{{item.createtime}}</a>
                </template>
            </TablePanel>
        </div>
    </div>
</ContainerFluid>
</template>

<script>
import {
reactive, toRefs
} from 'vue'
import TablePanel from '../../components/TablePanel';
import ContainerFluid from '../../layout/ContainerFluid';
export default {
    components: {
        TablePanel,
        ContainerFluid
    },
    setup() {
        const status = reactive({
            columns:[{
                title:'ID',
                dataIndex:'id',
                key:'id'
            },{
                title:'账号/用户名',
                dataIndex:'username',
                key:'username'
            },{
                title:'个人积分',
                dataIndex:'credits',
                key:'credits'
            },{
                title:'昵称',
                dataIndex:'nickname',
                key:'nickname'
            },{
                title:'创建时间',
                dataIndex:'createtime',
                key:'createtime',
                scopedSlots:{
                    customRender:'createtime'
                }
            },{
                title:'会员等级',
                dataIndex:'level',
                key:'level'
            },{
                title:'职业',
                dataIndex:'profession',
                key:'profession'
            },{
                title:'签名',
                dataIndex:'signature',
                key:'signature'
            }],
            data:[]
        })

        return {
            ...toRefs(status)
        }
    }
}
</script>
