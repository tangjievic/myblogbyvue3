<style lang="less">

</style>

<template>
<div>
    <TablePanel>
        <template v-slot:age="text" name="age">
            <a href="#!">{{ text+'xxx' }}</a>
        </template>
    </TablePanel>
</div>
</template>

<script>
import { provide } from 'vue'
import TablePanel from '../../components/TablePanel';
export default {
    components: {
        TablePanel
    },
    setup(){
        provide('columns',[
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                scopedSlots: { customRender: 'age' },
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
        ]);
        provide('data',[
            {
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
