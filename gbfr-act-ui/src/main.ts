import { createApp } from 'vue'
import './style.css'
import mainPage from './App.vue'

import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons';
import {i18n} from "./locale/i18n.ts";
import 'element-plus/theme-chalk/index.css';


let App = createApp(mainPage);
App.use(ElementPlus);

App.use(i18n);


Object.keys(Icons).forEach(key => {
    App.component(key, Icons[key])
})

App.mount('#app')
