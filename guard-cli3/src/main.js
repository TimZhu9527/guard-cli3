import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'

// CSS全局样式
import './assets/css/global.css'
// 配置请求的跟路径
axios.defaults.baseURL = 'http://192.168.0.114:6073/'
Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
