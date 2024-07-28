import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import '@/assets/icon/iconfont1/iconfont.css'
import '@/assets/icon/iconfont2/iconfont.css'

var app = createApp(App)
app.use(router)
app.mount('#app');