<style lang="less">

</style>

<template>
<ContainerFluid title="管理员列表" moudleText="基础菜单" routerText="管理员类">
    <TablePanel>
        <template v-slot:age="{item}">
            <a href="#!">{{item.age}}</a>
        </template>
    </TablePanel>
</ContainerFluid>
</template>

<script>
import {
    provide
} from 'vue'
import TablePanel from '../../components/TablePanel';
import ContainerFluid from '../../layout/ContainerFluid';
export default {
    components: {
        TablePanel,
        ContainerFluid
    },
    setup() {
        provide('columns', [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                scopedSlots: {
                    customRender: 'age'
                },
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ]);
        provide('data', [{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            }
        ])
    }
}
</script>
