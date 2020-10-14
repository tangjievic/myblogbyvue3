<style lang="less">
</style>
<template>
  <ContainerFluid>
    <div class="card">
      <div class="card-body">
        <div class="table-responsive">
          <div
            id="DataTables_Table_0_wrapper"
            class="dataTables_wrapper dt-bootstrap4 no-footer"
          >
            <div class="row">
              <div class="col-sm-12">
                <table
                  class="table table-centered datatable dt-responsive nowrap no-footer dtr-inline"
                  data-page-length="5"
                  style="
                    border-collapse: collapse;
                    border-spacing: 0px;
                    width: 100%;
                  "
                  id="DataTables_Table_0"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead class="thead-light">
                    <tr role="row">
                      <th
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                      >
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label"
                            >&nbsp;</label
                          >
                        </div>
                      </th>
                      <th
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        v-for="(item,index) in columns"
                        :key="item.key?item.key:index"
                      >
                        {{item.title}}
                      </th>
                      <th
                        style="width: 118px"
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        aria-label="Action"
                      >
                        操作
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr role="row" class="odd" v-for="(item,index) in data" :key="item.key?item.key:index">
                      <td class="dtr-control">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                          />
                          <label class="custom-control-label"
                            >&nbsp;</label
                          >
                        </div>
                      </td>

                      <td class="sorting_1" v-for="(its,idx) in columns" :key="its.key?its.index:idx">
                        <template v-if="!item.scopedSlots">{{item[its.dataIndex]}}</template>
                        <slot v-else :name="item.scopedSlots.customRender"></slot>
                      </td>
                      <td>
                        <a
                          href="javascript:void(0);"
                          class="mr-3 text-primary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Edit"
                          ><i class="mdi mdi-pencil font-size-18"></i
                        ></a>
                        <a
                          href="javascript:void(0);"
                          class="text-danger"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Delete"
                          ><i class="mdi mdi-trash-can font-size-18"></i
                        ></a>
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
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="DataTables_Table_0_paginate"
                >
                  <ul class="pagination pagination-rounded">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="DataTables_Table_0_previous"
                    >
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="0"
                        tabindex="0"
                        class="page-link"
                        ><i class="mdi mdi-chevron-left"></i
                      ></a>
                    </li>
                    <li class="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="1"
                        tabindex="0"
                        class="page-link"
                        >1</a
                      >
                    </li>
                    <li class="paginate_button page-item">
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="2"
                        tabindex="0"
                        class="page-link"
                        >2</a
                      >
                    </li>
                    <li
                      class="paginate_button page-item next"
                      id="DataTables_Table_0_next"
                    >
                      <a
                        href="#"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="3"
                        tabindex="0"
                        class="page-link"
                        ><i class="mdi mdi-chevron-right"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ContainerFluid>
</template>

<script>
import ContainerFluid from "../layout/ContainerFluid";
import { reactive,inject } from 'vue';
export default {
  components: {
    ContainerFluid,
  },
  setup() {
      const state = reactive({
          columns:inject('columns')?inject('columns'):[],
          data:inject('data')?inject('data'):[]
      })
    return {
        ...state
    };
  },
};
</script>
