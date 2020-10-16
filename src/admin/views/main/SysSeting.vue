<style lang="less">

</style>

<template>
<ContainerFluid title="系统设置" moudleText="基础菜单" routerText="系统管理">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">系统基础设置</h4>
            <form class="custom-validation" action="#" novalidate>
                <div class="form-group">
                    <label>网站标题</label>
                    <input type="text" class="form-control" required placeholder="请填写网站标题">
                </div>
                <div class="form-group">
                    <label>网站底部copyright信息</label>
                    <input type="text" class="form-control" required placeholder="请填写网站标题">
                </div>
                <div class="form-group">
                    <label>本站邮箱</label>
                    <div>
                        <input type="email" class="form-control" required parsley-type="email" placeholder="输入邮箱账号">
                    </div>
                </div>
                <div class="form-group">
                    <label>网站描述</label>
                    <div>
                        <textarea required="" class="form-control" rows="3"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label>网站SEO关键字</label>
                    <div>
                        <textarea required="" class="form-control" rows="2"></textarea>
                    </div>
                </div>
                <div class="form-group mb-0">
                    <div>
                        <button class="btn btn-success waves-effect waves-light mr-1">
                            修改
                        </button>
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
    <Tabs>
        <template v-slot:friendlink>
            <TablePanel></TablePanel>
        </template>
        <template v-slot:friendlinkforms>
            <form class="custom-validation" action="#" validate>
                <div class="form-group">
                    <label>友情链接名</label>
                    <input type="text" class="form-control" required placeholder="请填写网站标题">
                </div>
                <div class="form-group">
                    <label>友情链接地址</label>
                    <div>
                        <input parsley-type="url" type="url" class="form-control" required placeholder="URL">
                    </div>
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
                name: '友情链接列表',
                key: "friendlink"
            },
            {
                name: '友情链接表单',
                key: "friendlinkforms"
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

        return {

        }
    }
}
</script>
