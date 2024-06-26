import Vue from 'vue'

// normalize.css：作用抹平浏览器差异默认值
// 1：下载   npm i normalize.css 2:导入 import 'normalize.css/normalize.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入英文语言包
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// css  less  scss
import '@/styles/index.scss' // global css

import App from './App'
// vuex:公共数据管理
import store from './store'

import router from './router'

import '@/icons' // icon
import '@/permission' // 导航守卫

import '@/directives'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
