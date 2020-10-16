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
<ContainerFluid title="博文写作" moudleText="文章系统" routerText="文章写作/编辑">
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">博文写作/修改</h3>
            <form class="custom-validation" action="#">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章标题</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" required placeholder="请填写文章标题">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章副标题</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" required placeholder="请填写文章副标题">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章作者</label>
                            <div class="col-md-10">
                                <input class="form-control" type="text" value="TANGJIE" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章栏目</label>
                            <div class="col-md-10">
                                <select class="form-control" required>
                                    <option>选择</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章标签</label>
                            <div class="col-md-10">
                                <select class="form-control" required>
                                    <option>选择</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-2 col-form-label">文章类型</label>
                            <div class="col-md-10">
                                <select class="form-control" required>
                                    <option>选择</option>
                                    <option>Large select</option>
                                    <option>Small select</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">是否登录查看</label>
                            <div class="col-md-9">
                                <select class="form-control" required>
                                    <option :value="0">访客可查看</option>
                                    <option :value="1">需登录查看</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-md-3 col-form-label">是否VIP文章</label>
                            <div class="col-md-9">
                                <select class="form-control" required>
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
                        <textarea required class="form-control" rows="2"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label>markdown内容编辑</label>
                    <div id="editorSection"></div>
                </div>
                <div class="form-group row">
                    <label for="example-url-input" class="col-md-4 col-form-label">文章相关内容地址链接:</label>
                    <div class="col-md-8">
                        <input class="form-control" type="url" placeholder="请输入地址">
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
    onMounted
} from 'vue';
import ContainerFluid from "../../../layout/ContainerFluid";
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import Editor from 'tui-editor';
export default {
    components: {
        ContainerFluid,
    },
    setup() {
        onMounted(() => {
            new Editor({
                el: document.querySelector('#editorSection'),
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                height: '70vh',
                initialValue: "",
                useCommandShortcut: true
            });
        })
        return {

        }
    }
}
</script>
