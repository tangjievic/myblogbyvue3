<style lang="less">
.add_admin{
    padding:15px 0 0 20px;
}
</style>

<template>
<div>
    <ContainerFluid title="管理员列表" moudleText="基础菜单" routerText="管理员类">
        <div class="card">
            <div class="add_admin">
                <button type="button" 
                data-toggle="modal" 
                data-target=".adminadd-modal-center"
                class="btn btn-primary waves-effect waves-light">添加管理员</button>
            </div>
            <div class="card-body">
            <TablePanel :columns="columns" 
            @edit="editItem"
            @delete="deleteItem"
            :data="tabledata"></TablePanel>
            </div>
        </div>

        <div class="col-sm-6 col-md-4 col-xl-3">
            <div ref="modal_dialog" class="modal fade tabel-example-modal-center" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
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
                            <button type="button" class="btn btn-light waves-effect" data-dismiss="modal">取消</button>
                            <button type="button" class="btn btn-primary waves-effect waves-light" data-dismiss="modal" @click="confrim">确认</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-6 col-md-4 col-xl-3">
            <div ref="modal_dialog" class="modal fade adminadd-modal-center" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form ref="validationfrom" class="needs-validation" novalidate>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title mt-0">管理员添加</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label>管理员账户</label>
                                    <input type="text" v-model="username" class="form-control" required placeholder="管理员账户，必须是数字字母下划线">
                                    <div class="invalid-feedback">
                                        账户不能为空
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>管理员密码</label>
                                    <input type="password" v-model="password" class="form-control" required placeholder="管理员密码">
                                    <div class="invalid-feedback">
                                        密码不能空
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>再次输入密码</label>
                                    <input type="password" v-model="repassword" class="form-control" required placeholder="管理员密码">
                                    <div class="invalid-feedback">
                                        密码不能为空
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
        </div>
    </ContainerFluid>
</div>
</template>

<script>
import { reactive,toRefs,ref,onMounted } from 'vue';
import TablePanel from '../../components/TablePanel';
import ContainerFluid from '../../layout/ContainerFluid';
import $alert from '../../../wetui/base/alert/alert';
import { getAdminList,deleAdmin,addAdmin } from '../../../apilist';
export default {
    components: {
        TablePanel,
        ContainerFluid
    },
    setup() {
        const modal_dialog = ref(null);
        //绑定验证表单
        const validationfrom = ref(null);
        const adminform = reactive({
            username:"",
            password:"",
            repassword:""
        })
        const status = reactive({
            columns:[{
                title: 'ID',
                dataIndex: 'id',
                key:'id'
            },{
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
            },{
                title:'创建时间',
                key:"create_time",
                dataIndex:'create_time'
            }],
            tabledata:[],
            selectedItem:[],
        })
        const getAdminListData =()=>{ 
            getAdminList().then(res=>{
                status.tabledata = res.result
            })
        }
        getAdminListData();
        const confrim = ()=>{
            //console.log(status.selectedItem)
            deleAdmin(status.selectedItem).then(()=>{
                $alert({
                    type:'success',
                    content:'删除成功'
                })
                getAdminListData();
            })
        }
        const editItem = () =>{
            $alert({
                type:'warn',
                content:'不支持该操作'
            })
        }   
        const deleteItem = (event)=>{
            status.selectedItem = event
        }
        //dom加载完毕后要进行的逻辑
        onMounted(()=>{
            //提交表单数据
            const forms = validationfrom.value;
            forms.addEventListener('submit', function() {
                console.log()
                const waitValitime = setTimeout(()=>{
                    if(forms.getAttribute('data-valresult') !== '0'){
                        if(adminform.password === adminform.repassword){
                            addAdmin({
                                username:adminform.username,
                                password:adminform.password
                            }).then(()=>{
                                $alert({
                                    content:"新增成功",
                                    type:'success'
                                })
                                getAdminListData();
                            })
                            const formModel = forms.querySelector('.modalmiss');
                            formModel.click();
                        }else{
                            $alert({
                                type:'risk',
                                content:"两次输入密码不一致"
                            })
                        }
                    }
                    clearTimeout(waitValitime)
                },500)
            })
        })
        return {
            ...toRefs(status),
            ...toRefs(adminform),
            editItem,
            deleteItem,
            modal_dialog,
            confrim,
            validationfrom
        }
    }
}
</script>
