import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import 'ant-design-vue/lib/modal/style/index.css';
import 'ant-design-vue/lib/button/style/index.css';
import 'ant-design-vue/lib/message/style/index.css';
import AntModal from 'ant-design-vue/lib/modal/Modal';
import Btn from 'ant-design-vue/lib/button'
const app = createApp(App);
app.component('AntModal', AntModal);
app.component('AntBtn', Btn);
//app.use(message);
app.use(router).use(store).mount('#app');