<style lang="less">
.tui-editor .te-md-splitter {
    width: 50% !important;
}

.tui-editor .te-preview-style-vertical .te-preview {
    float: left;
    width: 100%;
}
</style>

<template>
<ContainerFluid title="博文编辑" moudleText="文章系统" routerText="文章编辑">
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">博文写作</h3>
            <form class="needs-validation" novalidate ref="validationfrom">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章标题</label>
                            <div class="col-md-10">
                                <input class="form-control" v-model="submitArt.title" type="text" required placeholder="请填写文章标题">
                                <div class="invalid-feedback">
                                    文章标题不能为空
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章副标题</label>
                            <div class="col-md-10">
                                <input class="form-control" v-model="submitArt.stitle" type="text" placeholder="请填写文章副标题">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章作者</label>
                            <div class="col-md-10">
                                <input class="form-control" v-model="submitArt.author" type="text" required>
                                <div class="invalid-feedback">
                                    文章作者不能为空
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章栏目</label>
                            <div class="col-md-10">
                                <select class="form-control" required v-model="submitArt.cate_id">
                                    <template v-for="(item,index) in catedata" :key="index">
                                        <option v-if="Number(item.id)!==0" :value="item.id">{{item.catename}}</option>
                                    </template>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章标签</label>
                            <div class="col-md-10">
                                <select class="form-control" required v-model="submitArt.tag_id">
                                    <option :value="item.id" v-for="(item,index) in tagdata" :key="index">{{item.tagname}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章类型</label>
                            <div class="col-md-10">
                                <select class="form-control" required v-model="submitArt.type">
                                    <option :value="0">原创</option>
                                    <option :value="1">转载</option>
                                    <option :value="2">教程</option>
                                    <option :value="3">杂谈</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">是否登录查看</label>
                            <div class="col-md-9">
                                <select class="form-control" required v-model="submitArt.islogin">
                                    <option :value="0">访客可查看</option>
                                    <option :value="1">需登录查看</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">是否VIP文章</label>
                            <div class="col-md-9">
                                <select class="form-control" required v-model="submitArt.isvip">
                                    <option :value="0">非VIP可查看</option>
                                    <option :value="1">需VIP可查看</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>文章简介</label>
                    <div>
                        <textarea required class="form-control" rows="2" v-model="submitArt.desc"></textarea>
                        <div class="invalid-feedback">
                            文章简介不能为空
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>markdown内容编辑</label>
                    <div id="editorSection"></div>
                </div>
                <div class="form-group row">
                    <label for="example-url-input" class="col-md-4 col-form-label">文章相关内容地址链接:</label>
                    <div class="col-md-8">
                        <input class="form-control" type="url" placeholder="请输入地址" v-model="submitArt.linkurl">
                        <div class="invalid-feedback">
                            链接地址错误
                        </div>
                    </div>
                </div>
                <div class="form-group mb-0">
                    <div>
                        <button type="submit" class="btn btn-primary waves-effect waves-light mr-1">
                            提交文章
                        </button>
                        <button type="reset" class="btn btn-secondary waves-effect">
                            重置文章
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
    onBeforeMount,
    onMounted,
    reactive,
    ref,
    toRefs
} from 'vue';
import ContainerFluid from "../../../layout/ContainerFluid";
import $alert from '../../../../wetui/base/alert/alert';
import {
    initVlitForm
} from '../../../common/common';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
import {getCate,getTag,editeArt } from '../../../../apilist/index';
import { useRouter } from 'vue-router'
export default {
    components: {
        ContainerFluid,
    },
    setup() {
        const router = useRouter();
        const validationfrom = ref(null);
        const status = reactive({
            tagdata:[],
            catedata:[]
        })
        const submitArt = reactive({
            id:null,
            title: '',
            stitle: '',
            desc:'',
            author: 'TANGJIE',
            cate_id: 0,
            tag_id: 0,
            type: 0,
            linkurl: '',
            islogin: 0,
            isvip: 0,
            content: '',
            marktext: ''
        })
        //提交数据
        const submitArtData = (markText) => {
            const forms = validationfrom.value;
            forms.addEventListener('submit', function () {
                const waitValTime = setTimeout(() => {
                    if (forms.getAttribute('data-valresult') !== '0') {
                        //initialHtml getMarkdown
                        submitArt.content = markText.getMarkdown()
                        submitArt.marktext = markText.getHtml()
                        console.log(submitArt)
                        editeArt(submitArt).then((res)=>{
                            $alert({
                                type:'success',
                                content:res.message+',正在跳转'
                            })
                            setTimeout(()=>{
                                router.push({
                                    name:'artlist'
                                })
                            },1000)
                        })
                    }
                    clearTimeout(waitValTime)
                }, 500)
            })
            forms.addEventListener('reset', function () {
                markText.setMarkdown('');
            })
        }
        onBeforeMount(()=>{
            Promise.all([getCate(),getTag()]).then(res=>{
                console.log(res)
                status.catedata = res[0].result
                status.tagdata = res[1].result
            })
        })
        onMounted(() => {
            initVlitForm();
            const instanceEditor = new Editor({
                el: document.querySelector('#editorSection'),
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                height: '70vh',
                initialValue: "",
                useCommandShortcut: true
            });
            submitArtData(instanceEditor);
            const editeart = JSON.parse( sessionStorage.getItem('editeartdata'));
            //console.log(editeart)
            Object.keys(submitArt).forEach((item)=>{
                submitArt[item] = editeart[item]
            })
            instanceEditor.setMarkdown(submitArt.marktext);
        })
        return {
            submitArt,
            validationfrom,
            ...toRefs(status)
        }
    }
}
</script>
