<style lang="less">

</style>

<template>
<ContainerFluid title="分类&标记" moudleText="文章系统" routerText="分类&标记管理">
    <Tabs>
        <template v-slot:catelist>
            <div>
                <TablePanel 
                :data="cateData"
                :columns="cateColumns" ></TablePanel>
            </div>
        </template>
        <template v-slot:taglist>
            <div>
                <TablePanel
                :columns="tagColumns"
                :data="tagsData"></TablePanel>
            </div>
        </template>
        <template v-slot:cateform>
            <div class="card">
                <div class="card-body">
                    <h4 class="needs-validation">栏目类型添加/编辑</h4>
                    <form class="needs-validation" novalidate>
                        <div class="form-group">
                            <label>文章分类名</label>
                            <input type="text" 
                            v-model="submitCate.catename"
                            class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                                分类名不能为空
                            </div>
                        </div>
                        <div class="form-group">
                            <label>父亲级栏目</label>
                            <select class="form-control" v-model="submitCate.pid">
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
                    <form class="needs-validation"  novalidate>
                        <div class="form-group">
                            <label>文章标签名</label>
                            <input type="text" 
                            v-model="submitTag.tagname"
                            class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                                标签名不能为空
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
                </div>
            </div>
        </template>
    </Tabs>
</ContainerFluid>
</template>

<script>
import {
    onMounted,
    provide, reactive, toRefs
} from 'vue';
import ContainerFluid from '../../../layout/ContainerFluid';
import Tabs from '../../../components/Tabs';
import TablePanel from '../../../components/TablePanel';
import { initVlitForm } from '../../../common/common';
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
        const status = reactive({
            cateColumns:[
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key:'id'
                },
                {
                    title:'文章栏目名',
                    dataIndex:'catename',
                    key:'catename'
                },
                {
                    title:'所属栏目',
                    dataIndex:'pid',
                    key:'pid'
                }
            ],
            tagColumns:[
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key:'id'
                },
                {
                    title: '文章归档标签',
                    dataIndex: 'tagname',
                    key:'tagname'
                }
            ],
            cateData:[],
            tagsData:[]
        })
        const submitCate = reactive({
            catename:'',
            pid:'0'
        })
        const submitTag = reactive({
            tagname:''
        })
        onMounted(()=>{
            initVlitForm()
        })
        return{
            ...toRefs(status),
            submitCate,
            submitTag
        }
    }
}
</script>
