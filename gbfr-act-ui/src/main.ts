import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus';
import i18n from 'vue-i18n';
import * as Icons from '@element-plus/icons';


App.use(ElementPlus);
App.use(i18n);
createApp(App).mount('#app');

Object.keys(Icons).forEach(key => {
    App.component(key, Icons[key])
})
