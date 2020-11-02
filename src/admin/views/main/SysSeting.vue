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
                    <input type="text" class="form-control" required placeholder="请填写网站标题" :disabled="disabled">
                </div>
                <div class="form-group">
                    <label>网站底部copyright信息</label>
                    <input type="text" class="form-control" required placeholder="请填写网站标题" :disabled="disabled">
                </div>
                <div class="form-group">
                    <label>本站邮箱</label>
                    <div>
                        <input type="email" class="form-control" required parsley-type="email" placeholder="输入邮箱账号" :disabled="disabled">
                    </div>
                </div>
                <div class="form-group">
                    <label>网站描述</label>
                    <div>
                        <textarea required="" class="form-control" rows="3" :disabled="disabled"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label>网站SEO关键字</label>
                    <div>
                        <textarea required="" class="form-control" rows="2" :disabled="disabled"></textarea>
                    </div>
                </div>
                <div class="form-group mb-0">
                    <div>
                        <button class="btn btn-success waves-effect waves-light mr-1" @click="toChange">
                            修改
                        </button>
                        <button type="submit" class="btn btn-primary waves-effect waves-light mr-1" v-show="!disabled">
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
            <TablePanel :columns="columns" 
            :data="tabledata"
            ></TablePanel>
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
</ContainerFluid>
</template>

<script>
import {
    provide, reactive, toRefs,ref
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
        const modal_dialog = ref(null);
        const validationfrom = ref(null);
        provide('tabsPage', [{
                name: '友情链接列表',
                key: "friendlink"
            },
            {
                name: '友情链接表单',
                key: "friendlinkforms"
            }
        ])
        const status = reactive({
            columns:[{
                title:'ID',
                dataIndex: 'id',
                key:'id'
            },{
                title:"友情链接名",
                dataIndex:'name',
                key:'name'
            },{
                title:'链接地址',
                dataIndex:'url',
                key:'url'
            }],
            tabledata:[],
            disabled:true
        })
        const toChange = ()=>{
            status.disabled = false
        }
        return {
            ...toRefs(status),
            toChange,
            modal_dialog,
            validationfrom
        }
    }
}
</script>
