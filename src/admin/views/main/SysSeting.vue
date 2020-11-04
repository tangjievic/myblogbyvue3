<style lang="less">

</style>

<template>
<ContainerFluid title="系统设置" moudleText="基础菜单" routerText="系统管理">
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">系统基础设置</h4>
            <form ref="validationfrom" class="needs-validation" novalidate>
                <div class="form-group">
                    <label>网站标题</label>
                    <input type="text" class="form-control" 
                    v-model="site_title"
                    required placeholder="请填写网站标题" :disabled="disabled">
                    <div class="invalid-feedback">
                        该字段必须
                    </div>
                </div>
                <div class="form-group">
                    <label>网站底部copyright信息</label>
                    <input type="text" class="form-control" 
                    v-model="copyright"
                    required placeholder="请填写网站标题" :disabled="disabled">
                    <div class="invalid-feedback">
                        该字段必须
                    </div>
                </div>
                <div class="form-group">
                    <label>本站邮箱</label>
                    <div>
                        <input type="email" class="form-control" 
                        v-model="site_email"
                        required parsley-type="email" placeholder="输入邮箱账号" :disabled="disabled">
                        <div class="invalid-feedback">
                            该字段必须
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>网站描述</label>
                    <div>
                        <textarea required class="form-control" rows="3" 
                        v-model="site_desc"
                        :disabled="disabled"></textarea>
                        <div class="invalid-feedback">
                            该字段必须
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>网站SEO关键字</label>
                    <div>
                        <textarea required class="form-control" rows="2" 
                        v-model="site_seo"
                        :disabled="disabled"></textarea>
                        <div class="invalid-feedback">
                            该字段必须
                        </div>
                    </div>
                </div>
                <div class="form-group mb-0">
                    <div>
                        <a href="javascript:;" class="btn btn-success waves-effect mr-1" style="color:#ffffff" @click="toChange">
                            修改
                        </a>
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
            <form class="needs-validation" novalidate ref="validation1">
                <div class="form-group">
                    <label>友情链接名</label>
                    <input type="text" class="form-control" 
                    v-model="friendLinkData.name"
                    required placeholder="请填写网站标题">
                </div>
                <div class="form-group">
                    <label>友情链接地址</label>
                    <div>
                        <input parsley-type="url" type="url" class="form-control" 
                        v-model="friendLinkData.url"
                        required placeholder="URL">
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
    provide, reactive, toRefs,ref,onMounted,onBeforeMount
} from 'vue';
import ContainerFluid from '../../layout/ContainerFluid';
import Tabs from '../../components/Tabs';
import TablePanel from '../../components/TablePanel';
import { initVlitForm } from '../../common/common';
import { getSys,editeSys,addFriendLink, getFriendLink } from '../../../apilist/index';
import $alert from '../../../wetui/base/alert/alert';
export default {
    components: {
        ContainerFluid,
        Tabs,
        TablePanel
    },
    setup() {
        const modal_dialog = ref(null);
        const validationfrom = ref(null);
        const validation1 = ref(null);
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
            disabled:true,

            site_title:'',
            copyright:'',
            site_email:'',
            site_desc:'',
            site_seo:''
        })

        const friendLinkData = reactive({
            name:'',
            url:''
        })

        const toChange = ()=>{
            status.disabled = false
        }
        //数据提交
        const submitArtData = ()=>{
            const forms = validationfrom.value;
            forms.addEventListener('submit',function(){
                const waitValTime = setTimeout(()=>{
                    if(forms.getAttribute('data-valresult') !== '0'){
                        //submitArt.content = markText.getMark
                        editeSys({
                            id:"1",
                            site_title:status.site_title,
                            copyright:status.copyright,
                            site_email:status.site_email,
                            site_desc:status.site_desc,
                            site_seo:status.site_seo
                        }).then((res)=>{
                            $alert({
                                type:'success',
                                content:res.message
                            })
                            status.disabled = true
                        })
                    }
                    clearTimeout(waitValTime)
                },500)
            })
        }
        //友情链接提交
        const submitFriendLink = ()=>{
            const forms = validation1.value;
            forms.addEventListener('submit',function(){
                const waitValTime = setTimeout(()=>{
                    if(forms.getAttribute('data-valresult') !== '0'){
                        addFriendLink(friendLinkData).then((res)=>{
                            $alert({
                                type:'success',
                                content:res.message
                            })
                            getFriendLink().then((res)=>{
                                status.tabledata = res.result
                            })
                        })
                    }
                    clearTimeout(waitValTime)
                },500)
            })
        } 
        onBeforeMount(()=>{
            getSys().then((res)=>{
                Object.keys(res.result).forEach((item)=>{
                    status[item] = res.result[item]
                })
            })
            getFriendLink().then((res)=>{
                status.tabledata = res.result
            })
        })
        onMounted(()=>{
            initVlitForm();
            submitArtData();
            submitFriendLink();
        })
        return {
            ...toRefs(status),
            toChange,
            modal_dialog,
            validationfrom,
            validation1,
            friendLinkData
        }
    }
}
</script>
