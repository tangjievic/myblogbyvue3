import { createApp } from 'vue';
import GlobalRender from './GlobalRender.vue';
import Headbg from './Headbg.vue';
import NtList from './NtList.vue';
import ListRoll from './ListRoll.vue';
import '../wetui/index.less';
import '../style/index.less';

createApp(GlobalRender).mount('#globelrender');
createApp(Headbg).mount('.tjblog-hd_bg');
createApp(NtList).mount('#ntlist');
createApp(ListRoll).mount('#listroll');