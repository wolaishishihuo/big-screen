import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import pinia from '@/stores';
import 'virtual:uno.css';
import '@/styles/app.less';
import '@/assets/iconfont/iconfont.css';
import '@/utils/rem';

// 创建Vue应用实例
const app = createApp(App);

app.use(router);
app.use(pinia);

// router 准备就绪后挂载应用
router.isReady().then(() => {
  app.mount('#app');
});
