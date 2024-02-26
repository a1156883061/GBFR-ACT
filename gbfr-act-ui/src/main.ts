import { createApp } from 'vue'
import './style.css'
import mainPage from './App.vue'

import ElementPlus from 'element-plus';
import {createI18n} from 'vue-i18n';
import * as Icons from '@element-plus/icons';
import {i18nCfg} from './act_ws_texts.js'


let App = createApp(mainPage);
App.use(ElementPlus);

const i18n = createI18n(i18nCfg);
App.use(i18n);


Object.keys(Icons).forEach(key => {
    App.component(key, Icons[key])
})

App.mount('#app')
