// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Validate from './assets/js/validate.js'
import '@/assets/css/reset.css'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

//控件，参数验证
Object.keys(Validate).forEach((key)=>{
  Vue.prototype[key] = Validate[key];
});

//设置axios为全局变量
Vue.prototype.axios = axios;

//设置axois的默认请求地址
axios.defaults.baseURL = 'http://10.10.10.119:8080/cid'

//axios设置跨域请求
axios.defaults.withCredentials=true;

//ajax请求拦截器
axios.interceptors.request.use(function(config){
  // if(config.url == config.baseURL + 'login'){
    // store.dispatch('showLoginLoading');
  // }else{
    // store.dispatch('showLoading');
  // }
  if(config.method == 'get') {
    if(config.params) {
      config.params.access_token = window.sessionStorage.getItem('access_token');
    } else {
      config.url += '?access_token=' + window.sessionStorage.getItem('access_token');
    }
  }

  if(config.method == 'post' && config.url != config.baseURL+'login') {
    config.data += '&userId=' + window.sessionStorage.getItem('access_token');
  }
  // config.params.access_token = window.sessionStorage.getItem('access_token');

  return config;

},function(err){
  return Promise.reject(err);
});

//ajax响应拦截器
axios.interceptors.response.use(function(response) {
  // store.dispatch('hideLoginLoading');
  // store.dispatch('hideLoading');
  return response;
},function(err) {
  return Promise.reject(err);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
