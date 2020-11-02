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
                    <button type="button" data-toggle="modal" 
                    data-target=".adminadd-modal-center"
                    class="btn btn-success waves-effect waves-light"
                    @click="addViode"
                    >添加视频</button>
                </div>
                <TablePanel :columns="vcolumns" :data="videodata"></TablePanel>
            </div>
        </template>
        <template v-slot:videotype>
            <div>
                <div class="button-items">
                    <button type="button" data-toggle="modal" 
                    data-target=".adminadd-modal-center"
                    class="btn btn-success waves-effect waves-light"
                    @click="addVcate"
                    >添加视频分类</button>
                </div>
                <TablePanel :columns="vcate" :data="vacatedata"></TablePanel>
            </div>
        </template>
    </Tabs>
    <div ref="modal_dialog" class="modal fade adminadd-modal-center" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form ref="validationfrom" class="needs-validation" novalidate>
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title mt-0">视频号添加</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" v-if="addType === 0">
                        <div class="form-group">
                            <label>视频名称</label>
                            <input type="text" v-model="submitdata.title" class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                                视频名称不能为空
                            </div>
                        </div>
                        <div class="form-group">
                            <label>视频所属栏目</label>
                            <input type="password" v-model="submitdata.vcate_cname" class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                               视频所属栏目不能为空
                            </div>
                        </div>
                        <div class="form-group">
                            <label>视频所属栏目id</label>
                            <input type="password" v-model="submitdata.vcate_id" class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                                视频所属栏目不能空
                            </div>
                        </div>
                        <div class="form-group">
                            <label>视频链接地址</label>
                            <input type="password" v-model="submitdata.url" class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                               视频链接地址不能为空
                            </div>
                        </div>
                    </div>
                    <div class="modal-body" v-if="addType === 1">
                        <div class="form-group">
                            <label>视频栏目名称 </label>
                            <input type="text" v-model="catename" class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                                栏目名称不能为空
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="modalmiss" style="display:none" data-dismiss="modal"></button>
                        <button type="reset" class="btn btn-danger waves-effect waves-light" data-dismiss="modal">
                            <i class="ri-close-line align-middle mr-2"></i> 取消
                        </button>
                        <button type="submit" class="btn btn-success waves-effect waves-light">
                            <i class="ri-check-line align-middle mr-2"></i> 确认
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</ContainerFluid>
</template>

<script>
import {
    provide, reactive, toRefs,ref
} from 'vue';
import ContainerFluid from '../../layout/ContainerFluid';
import Tabs from '../../components/Tabs';
import TablePanel from '../../components/TablePanel';
//import $alert from '../../../wetui/base/alert/alert';
export default {
    components: {
        ContainerFluid,
        Tabs,
        TablePanel
    },

    setup() {
        //获取视频列表数据
        //获取视频栏目数据
        const modal_dialog = ref(null);
        //绑定验证表单
        const validationfrom = ref(null);
        provide('tabsPage', [{
                name: '视频列表',
                key: "videolist"
            },
            {
                name: '视频分类',
                key: 'videotype'
            }
        ])
        const status = reactive({
            vcolumns:[{
                title:'ID',
                dataIndex:'id',
                key:'id'
            },{
                title:'视频所属类型',
                dataIndex:'cname',
                key:'cname'
            },{
                title:'视频地址',
                dataIndex:'url',
                key:'url'
            }],
            videodata:[],
            vcate:[
                {
                    title:'ID',
                    dataIndex:'id',
                    key:'id'
                },
                {
                    title:'视频栏目名',
                    dataIndex:'catename',
                    key:'catename'
                }
            ],
            vacatedata:[],
            catename:'',
            addType:0,//默认添加视频；0添加视频，1添加视频栏目
        })
        const submitdata = reactive({
            title:'',
            vcate_id:'',
            vcate_cname:'',
            url:''
        })
        //添加数据操作
        const addViode = ()=>{
            status.addType = 0
        }
        const addVcate = ()=>{
            status.addType = 1
        }
        //
        return{
            ...toRefs(status),
            modal_dialog,
            validationfrom,
            submitdata,
            addViode,
            addVcate
        }
    }

}
</script>
