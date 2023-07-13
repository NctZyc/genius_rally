import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router/index'
// main.js:注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(ElementPlus)
app.use(router)
app.mount('#app')