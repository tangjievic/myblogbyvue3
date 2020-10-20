import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '../wetui/index.less';
createApp(App).use(router).mount('#app')