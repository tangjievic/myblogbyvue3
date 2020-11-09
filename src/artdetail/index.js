import { createApp } from 'vue'
import App from './App.vue'
import ArtAnchor from './ArtAnchor.vue';
import Remark from './Remark.vue';
import '../wetui/index.less';
import '../style/index.less';
createApp(App).mount('#app');
createApp(ArtAnchor).mount('#artanchor');
createApp(Remark).mount('#tj-blog__remark')