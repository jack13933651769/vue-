/* eslint-disable no-undef */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'
import html2canvas from 'html2canvas'
import pageUp from './components/pageUp'
import VueI18n from 'vue-i18n'
import orgchart from '../src/components/vue-orgchart/index'
import locale from 'element-ui/lib/locale/index'
import messages from './common/index'
Vue.use(VueI18n)
// Vue.use(pageUp);  //全局引入插件
Vue.component('pageUp', pageUp)// 全局引入组件
Vue.prototype.$echarts = echarts
Vue.prototype.$html2canvas = html2canvas
Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
// 定义标识符
console.log(messages)
const i18n = new VueI18n({
  locale: localStorage.lang || 'zh-CN', // 语言标识
  messages
//   messages: {
//     'zh-CN': require('./common/lang/cn'), // 中文语言包
//     'en-US': require('./common/lang/en') // 英文语言包
//   }
})

locale.i18n((key, value) => i18n.t(key, value))
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('user')
  }
  let user = sessionStorage.getItem('user')
  if (!user && to.path !== '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})
