import message from 'ant-design-vue/lib/message';
import { onBeforeMount, onMounted, reactive } from 'vue';
import { mapState } from 'vuex';
import { getArtList } from '../../apilist';
import moment from 'moment'
export default {
    computed: {
        ...mapState({
            catelist: (state) => state.cate.catelist
        })
    },
    methods: {

    },
    setup() {
        const state = reactive({
            visible: false,
            artlist: [],
            page: 1,
            total: 0
        })
        const getArtdata = (page) => {
            getArtList({
                type: 0,
                page
            }).then(res => {
                state.page = res.result.current_page;
                state.total = res.result.total;
                state.artlist = res.result.data;
            })
        }
        const openModel = () => {
            state.visible = true
        }
        const handleOk = () => {
            state.visible = false
        }
        const handleCancel = () => {
            state.visible = false
        }
        const goPage = (params) => {
            if (params === 'video' || params === 'tool') {
                message.info('模块筹备中，更多功能请移步pc端')
            }
        }
        onBeforeMount(() => {
            getArtdata(state.page)
        })
        onMounted(() => {
            const $ = window.$;
            $(".slider").slider({ full_width: true });
        })
        return {
            goPage,
            openModel,
            handleOk,
            handleCancel,
            moment,
            state
        }
    }
}