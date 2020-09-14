import Vue from 'vue'
import 'lib-flexible'//引入px单位适配
import App from './App.vue'
import router from './router'
import store from './store'

// 引入移动端适配
import './libs/rem.js'

// 修改路由replace方法,阻止重复点击报错
// 此方法必须把vue-router版本改为3.1.0及以下才行
import VueRouter from 'vue-router'
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

