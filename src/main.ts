import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

// 完整导入 表格库
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

createApp(App).use(VxeUI).use(VxeUITable).mount('#app')
