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
                <TablePanel :columns="vcate" 
                 @edit="editVcItem"
                @delete="deleteVcItem"
                :data="vacatedata"></TablePanel>
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
                            <select class="form-control" required v-model="submitdata.vcate_id">
                                <option :value="item.id" v-for="(item,index) in vacatedata" :key="index">{{item.catename}}</option>
                                <!-- <option :value="1">Small select</option> -->
                            </select>
                            <!-- <input type="password" v-model="submitdata.vcate_cname" class="form-control" required placeholder="请填写"> -->
                            <div class="invalid-feedback">
                               视频所属栏目不能为空
                            </div>
                        </div>
                        <!-- <div class="form-group">
                            <label>视频所属栏目id</label>
                            <input type="password" v-model="submitdata.vcate_id" class="form-control" required placeholder="请填写">
                            <div class="invalid-feedback">
                                视频所属栏目不能空
                            </div>
                        </div> -->
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
    <div class="modal fade tabel-example-modal-center" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title mt-0">提示:</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    确定要删除该条数据？
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light waves-effect" 
                    data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary waves-effect waves-light" 
                    data-dismiss="modal" @click="deleteEvent">确认</button>
                </div>
            </div>
        </div>
    </div>
    <wet-model type="info" 
    :show="VcateShow"
    @cancel="cancelModel"
    @confirm="confirmModel"
    title="视频分类名编辑">
        <div>
           <div class="form-group">
                <label>视频栏目名称 </label>
                <input type="text" v-model="selectedItem.catename" class="form-control" required placeholder="请填写">
                <div class="invalid-feedback">
                    栏目名称不能为空
                </div>
            </div>
        </div>
    </wet-model>
</ContainerFluid>
</template>

<script>
import {
    provide, reactive, toRefs,ref,onMounted,onBeforeMount
} from 'vue';
import ContainerFluid from '../../layout/ContainerFluid';
import Tabs from '../../components/Tabs';
import TablePanel from '../../components/TablePanel';
import $alert from '../../../wetui/base/alert/alert';
import { initVlitForm } from '../../common/common';
import { addVcate as addVcateDate,getVcate,deleVcate,editeVcate } from '../../../apilist/index';
import WetModel from '../../../wetui/base/modal/Modal.vue';
export default {
    components: {
        ContainerFluid,
        Tabs,
        TablePanel,
        WetModel
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
            selectedItem:{},
            catename:'',
            addType:0,//默认添加视频；0添加视频，1添加视频栏目
            VcateShow:false
        })
        const submitdata = reactive({
            title:'',
            vcate_id:'',
            vcate_cname:'',
            url:''
        })
        //添加数据操作
        const addViode = ()=>{
            status.addType = 0;
            submitdata.title ='';
            submitdata.vcate_id = 1;
            submitdata.url = '';
        }
        const addVcate = ()=>{
            status.addType = 1
            status.catename = '';
        }
        const deleteEvent = ()=>{
            if(status.addType === 0){
                return
            }else{
                deleVcate(status.selectedItem).then(()=>{
                    $alert({
                        type:'success',
                        content:'删除成功'
                    })
                    getVcate().then((res)=>{
                        status.vacatedata = res.result;
                    })
                })
            }
        }
        const deleteVcItem = (event)=>{
            status.selectedItem = event;
            status.addType = 1
        }
        const editVcItem = (event) =>{
            status.selectedItem = event;
            status.VcateShow = true;
        }
        const cancelModel = ()=>{
            status.VcateShow = false;
        }
        const confirmModel = ()=>{
            editeVcate(status.selectedItem).then((res)=>{
                if(res.status === 20000){
                    $alert({
                        type:'success',
                        content:res.message
                    })
                    status.VcateShow = false
                }
            })
        }
        onBeforeMount(()=>{
            getVcate().then((res)=>{
                status.vacatedata = res.result;
            })

        })
        onMounted(()=>{
            initVlitForm();
            //提交表单
            const forms = validationfrom.value;
            forms.addEventListener('submit', function() {
                const waitValitime = setTimeout(()=>{
                    if(forms.getAttribute('data-valresult') !== '0'){
                        addVcateDate({
                            catename:status.catename
                        }).then(()=>{
                            $alert({
                                content:"新增成功",
                                type:'success'
                            })
                            getVcate().then((res)=>{
                                status.vacatedata = res.result;
                            });
                        })
                        const formModel = forms.querySelector('.modalmiss');
                        formModel.click();
                    }
                    clearTimeout(waitValitime)
                },500)
            })
        })
        return{
            ...toRefs(status),
            modal_dialog,
            validationfrom,
            submitdata,
            addViode,
            addVcate,
            deleteEvent,
            deleteVcItem,
            editVcItem,
            cancelModel,
            confirmModel
        }
    }

}
</script>
