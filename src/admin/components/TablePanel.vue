<style lang="less">
</style>
<template>
<div class="table-responsive">
    <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
        <div class="row">
            <div class="col-sm-12">
                <table class="table table-centered datatable dt-responsive nowrap no-footer dtr-inline" data-page-length="5" style="
            border-collapse: collapse;
            border-spacing: 0px;
            width: 100%;
            " id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                    <thead class="thead-light">
                        <tr role="row">
                            <th class="sorting_disabled" rowspan="1" colspan="1">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" />
                                    <label class="custom-control-label">&nbsp;</label>
                                </div>
                            </th>
                            <th class="sorting_disabled" rowspan="1" colspan="1" v-for="(item,index) in columns" :key="item.key?item.key:index">
                                {{item.title}}
                            </th>
                            <th style="width: 118px" class="sorting_disabled" rowspan="1" colspan="1" aria-label="Action">
                                操作
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr role="row" class="odd" v-for="(item,index) in data" :key="item.key?item.key:index">
                            <td class="dtr-control">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" />
                                    <label class="custom-control-label">&nbsp;</label>
                                </div>
                            </td>

                            <td class="sorting_1" v-for="(its,idx) in columns" :key="its.key?its.index:idx">
                                <template v-if="!its.scopedSlots">{{item[its.dataIndex]}}</template>
                                <slot v-else :name="its.scopedSlots.customRender" v-bind:item="item"></slot>
                            </td>
                            <td>
                                <a href="javascript:void(0);" 
                                class="mr-3 text-primary" 
                                data-toggle="tooltip" 
                                data-placement="top" title=""
                                @click="tableEdit(item)"
                                data-original-title="Edit"><i class="mdi mdi-pencil font-size-18"></i></a>
                                <a href="javascript:void(0);" 
                                class="text-danger" 
                                data-placement="top" title="" 
                                data-toggle="modal"
                                data-target=".tabel-example-modal-center"
                                @click="tableTrash(item)"
                                data-original-title="Delete"><i class="mdi mdi-trash-can font-size-18"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-5">
            </div>
            <div class="col-sm-12 col-md-7">
                <Paginate></Paginate>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Paginate from './Paginate';
import {
    reactive
} from 'vue';
export default {
    components: {
        Paginate
    },
    props:{
        columns:Array,
        data:Array
    },
    emits:['tableEdit','tableTrash'],
    setup(props) {
        return reactive({
            props
        })
    },
    methods:{
        tableEdit(item){
            this.$emit('edit',item)
        },
        tableTrash(item){
            this.$emit('delete',item)
        }
    }
};
</script>
