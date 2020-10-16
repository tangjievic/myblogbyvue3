<style lang="less">

</style>

<template>
<ContainerFluid title="分类&标记" moudleText="文章系统" routerText="分类&标记管理">
    <Tabs>
        <template v-slot:catelist>
            <div>
                <TablePanel></TablePanel>
            </div>
        </template>
        <template v-slot:taglist>
            <div>
                <TablePanel></TablePanel>
            </div>
        </template>
        <template v-slot:cateform>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">栏目类型添加/编辑</h4>
                    <form class="custom-validation" action="#" novalidate="">
                        <div class="form-group">
                            <label>文章分类名</label>
                            <input type="text" class="form-control" required placeholder="请填写">
                        </div>
                        <div class="form-group">
                            <label>父亲级栏目</label>
                            <select class="form-control" required>
                                <option :value="0">顶级栏目</option>
                                <option :value="1">-</option>
                            </select>
                        </div>
                        <div class="form-group mb-0">
                            <div>
                                <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">
                                    提交
                                </button>
                                <button type="reset" class="btn btn-secondary waves-effect">
                                    重置
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card-body">
                    <h4 class="card-title">文章标签添加/编辑</h4>
                    <form class="custom-validation" action="#" novalidate="">
                        <div class="form-group">
                            <label>文章标签名</label>
                            <input type="text" class="form-control" required placeholder="请填写">
                        </div>
                        <div class="form-group mb-0">
                            <div>
                                <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">
                                    提交
                                </button>
                                <button type="reset" class="btn btn-secondary waves-effect">
                                    重置
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </Tabs>
</ContainerFluid>
</template>

<script>
import {
    provide
} from 'vue';
import ContainerFluid from '../../../layout/ContainerFluid';
import Tabs from '../../../components/Tabs';
import TablePanel from '../../../components/TablePanel';
export default {
    components: {
        ContainerFluid,
        Tabs,
        TablePanel
    },
    setup() {
        provide('tabsPage', [{
                name: '分类列表',
                key: "catelist"
            },
            {
                name: '标签列表',
                key: "taglist"
            },
            {
                name: '分类标签表单',
                key: 'cateform'
            },
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
