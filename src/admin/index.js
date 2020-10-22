import { createApp } from 'vue';
import Admin from './Admin.vue';
import router from './router';
import store from './store/index.js';
const admin = createApp(Admin);
admin.use(router);
admin.use(store);
admin.mount('#admin-apply');