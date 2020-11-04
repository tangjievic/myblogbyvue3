<style lang="less">

</style>

<template>
<ContainerFluid title="分类&标记" moudleText="文章系统" routerText="分类&标记管理">
    <Tabs>
        <template v-slot:catelist>
            <div>
                <TablePanel 
                :data="cateData"
                @delete="deleteCateItem"
                @edit="(event)=>{ editItem(event,0) }"
                :columns="cateColumns" >
                    <template v-slot:pid="{item}">
                        <span>{{countCateName(item.pid,cateData)}}</span>
                    </template>
                </TablePanel>
            </div>
        </template>
        <template v-slot:taglist>
            <div>
                <TablePanel
                :columns="tagColumns"
                @edit="(event)=>{ editItem(event,1) }"
                @delete="deleteCateItem"
                :data="tagsData"></TablePanel>
            </div>
        </template>
        <template v-slot:cateform>
            <div class="card">
                <div class="card-body">
                    <h4 class="needs-validation">栏目类型添加/编辑</h4>
                    <form  ref="cateform" class="needs-validation" novalidate>
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
                                <template :value="item.id" v-for="(item,index) in cateData" :key="index">
                                    <option v-if="Number(item.pid) === 0">{{item.catename}}</option>
                                </template>
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
                    <form ref="tagform" class="needs-validation"  novalidate>
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
    <!-- 删除确认弹框 -->
    <Modal
      title="确认删除"
      :visible="modalVis"
      okText="确认"
      cancelText="取消"
      @ok="okModal"
      @cancel="cancelModal"
    >
      <p>目前暂不支持删除</p>
    </Modal>
    <!-- 编辑弹框 -->
    <Modal
      title="数据编辑"
      :visible="editevis"
      okText="确认"
      cancelText="取消"
      @ok="okEditel"
      @cancel="cancelEditel"
    >
        <form v-if="editetype === 0">
            <div class="form-group">
                <label>栏目名称</label>
                <input type="text" v-model="editeDate.catename" class="form-control" placeholder="请填写">
            </div>
            <div class="form-group">
                <label>所属栏目</label>
                <select class="form-control" v-model="submitCate.pid">
                    <option :value="0">顶级栏目</option>
                    <template :value="item.id" v-for="(item,index) in cateData" :key="index">
                        <option v-if="Number(item.pid) === 0">{{item.catename}}</option>
                    </template>
                </select>
            </div>
        </form>
        <form v-else> 
            <div class="form-group">
                <label>栏目名称</label>
                <input type="text" v-model="editeDate.tagname" class="form-control" placeholder="请填写">
            </div>
        </form>
    </Modal>
</ContainerFluid>
</template>

<script>
import {
    onMounted,
    onBeforeMount,
    provide, reactive, toRefs,
    ref
} from 'vue';
import ContainerFluid from '../../../layout/ContainerFluid';
import Tabs from '../../../components/Tabs';
import TablePanel from '../../../components/TablePanel';
import { initVlitForm } from '../../../common/common';
import { getCate,editeCate, addCate,getTag,editeTag,addTag } from '../../../../apilist/index';
import $alert from '../../../../wetui/base/alert/alert';
export default {
    components: {
        ContainerFluid,
        Tabs,
        TablePanel,
        // Modal
    },
    setup() {
        const cateform = ref(null);
        const tagform = ref(null);
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
                    key:'pid',
                    scopedSlots: {
                        customRender: 'pid'
                    }
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
            tagsData:[],
            modalVis:false,
            editevis:false,
            editetype:0,
            editedata:{}
        })
        const submitCate = reactive({
            catename:'',
            pid:'0'
        })
        const submitTag = reactive({
            tagname:''
        })
        const editeDate = reactive({})
        // 重新计算cate
        const countCateName = (pid,data)=>{
            let title = ''
            if(Number(pid) === 0){
                return '顶级栏目'
            }else{
                data.forEach((item)=>{
                    if(Number(item.id) === Number(pid)){
                        title = item.catename
                    }
                })
                return title;
            }
        }
        // 删除表格数据
        const deleteCateItem = ()=>{
            status.modalVis = true
        }
        // 编辑表格数据
        const editItem = (event,type)=>{
            status.editedata = event;
            status.editetype = type
            status.editevis = true;
            Object.keys(event).forEach((item)=>{
                editeDate[item] = event[item]
            })
        }
        const okEditel = ()=>{
            if(status.editetype === 0){
                editeCate(editeDate).then((res)=>{
                    $alert({
                        type:'success',
                        content:res.message
                    })
                    getCate().then((res)=>{
                        status.cateData = res.result
                    })
                })
            }else{
                editeTag(editeDate).then((res)=>{
                    $alert({
                        type:'success',
                        content:res.message
                    })
                    getTag().then((res)=>{
                        status.tagsData = res.result
                    })
                })
            }
            status.editevis =false
        }
        const cancelEditel = ()=>{
            status.editevis = false
        }

        const okModal = ()=>{
            status.modalVis = false
        }
        const cancelModal =()=>{
            status.modalVis = false
        }
        //栏目数据提交
        const submitCateDate = () =>{
            const forms = cateform.value;
            forms.addEventListener('submit',function(){
                const waitValTime = setTimeout(()=>{
                    if(forms.getAttribute('data-valresult') !== '0'){
                        addCate(submitCate).then((res)=>{
                            $alert({
                                type:'success',
                                content:res.message
                            })
                            getCate().then((res)=>{
                                status.cateData = res.result
                            })
                        })
                    }
                    clearTimeout(waitValTime)
                },500)
            })
        }
        const submitTagData = () =>{
            const forms = tagform.value;
            forms.addEventListener('submit',function(){
                const waitValTime = setTimeout(()=>{
                    if(forms.getAttribute('data-valresult') !== '0'){
                        addTag(submitTag).then((res)=>{
                            $alert({
                                type:'success',
                                content:res.message
                            })
                            getTag().then((res)=>{
                                status.tagsData = res.result
                            })
                        })
                    }
                    clearTimeout(waitValTime)
                },500)
            })
        }
        //标签数据提交
        onBeforeMount(()=>{
            getCate().then((res)=>{
                status.cateData = res.result
            })
            getTag().then((res)=>{
                status.tagsData = res.result
            })
        })
        onMounted(()=>{
            initVlitForm();
            submitCateDate();
            submitTagData();
        })
        return{
            ...toRefs(status),
            submitCate,
            submitTag,
            countCateName,
            editItem,
            deleteCateItem,
            okModal,
            okEditel,
            cancelModal,
            cancelEditel,
            editeDate,
            cateform,
            tagform
        }
    }
}
</script>
