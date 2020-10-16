<style lang="less" scoped>
.button-items {
    padding-bottom: 20px;
}
</style>

<template>
<ContainerFluid title="视频管理" moudleText="基础菜单" routerText="视频管理">
    <Tabs>
        <template v-slot:videolist>
            <div>
                <div class="button-items">
                    <button type="button" class="btn btn-success waves-effect waves-light">添加视频分类</button>
                </div>
                <TablePanel></TablePanel>
            </div>
        </template>
        <template v-slot:videotype>
            <div>
                <TablePanel></TablePanel>
            </div>
        </template>
    </Tabs>
</ContainerFluid>
</template>

<script>
import {
    provide
} from 'vue';
import ContainerFluid from '../../layout/ContainerFluid';
import Tabs from '../../components/Tabs';
import TablePanel from '../../components/TablePanel';
export default {
    components: {
        ContainerFluid,
        Tabs,
        TablePanel
    },

    setup() {
        provide('tabsPage', [{
                name: '视频列表',
                key: "videolist"
            },
            {
                name: '视频分类',
                key: 'videotype'
            }
        ])
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
