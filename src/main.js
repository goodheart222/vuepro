import Vue from 'vue'
import App from './App'
import router from './router'
//引入图片懒加载模块
import VueLazyload from 'vue-lazyload'
//懒加载配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../static/images/mo.jpg'),
  loading: require('../static/images/minloading.gif'),
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
