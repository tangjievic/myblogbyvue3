<style lang="less">

</style>

<template>
<div class="card">
    <div class="card-body">
        <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
            <li class="nav-item" v-for="(item,index) in tabsPage" :key="item.key?item.key:index">
                <a :class="['nav-link',index === 0?'active':'']" data-toggle="tab" :href="'#'+(item.key?item.key:index)" role="tab">
                    <span class="d-block d-sm-none"></span>
                    <span class="d-none d-sm-block">{{item.name}}</span>
                </a>
            </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content p-3 text-muted">
            <div :class="['tab-pane',index === 0?'active':'']" :id="''+(item.key?item.key:index)" role="tabpanel" v-for="(item,index) in tabsPage" :key="item.key?item.key:index">
                <slot :name="item.key" :item="item"></slot>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    reactive,
    inject
} from 'vue';
/**
 * 此组件是tabs切换组件
 * @param { Array[item] } tabsPage 组件需要接受的参数
 * @desc  Array中的item是是对象成员,对象属性分别是如下：
 * @item-property { string } key 页面绑定标记
 * @item-property { string } name 页面名称
 */
export default {
    components: {},
    setup() {
        const tabsPage = inject('tabsPage');
        const state = reactive({
            tabsPage: tabsPage
        })
        return {
            ...state
        }
    }
}
</script>
