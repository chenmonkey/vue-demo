import { createApp } from 'vue'
import App from './App.vue'
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

// 完整导入 表格库
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

import router from './router'

createApp(App).use(VxeUI).use(VxeUITable).use(router).mount('#app')
