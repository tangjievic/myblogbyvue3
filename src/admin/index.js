import { createApp } from 'vue';
import Admin from './Admin.vue';
import router from './router';
import store from './store/index.js';
import '../wetui/index.less';

import 'ant-design-vue/lib/modal/style/index.css';
import 'ant-design-vue/lib/button/style/index.css';
import Modal from 'ant-design-vue/lib/modal/Modal';

const admin = createApp(Admin);

admin.component('Modal', Modal)

admin.use(router);
admin.use(store);
admin.mount('#admin-apply');