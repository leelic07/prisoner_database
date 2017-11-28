// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Validate from './assets/js/validate.js'
import '@/assets/css/reset.css'
import store from './store'

Vue.config.productionTip = false

//控件，参数验证
Object.keys(Validate).forEach((key)=>{
  Vue.prototype[key] = Validate[key];
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
