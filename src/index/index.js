import { createApp } from 'vue';
import GlobalRender from './GlobalRender.vue';
import Headbg from './Headbg.vue';
import '../wetui/index.less';
import '../style/index.less';

createApp(GlobalRender).mount('#globelrender');
createApp(Headbg).mount('.tjblog-hd_bg');
