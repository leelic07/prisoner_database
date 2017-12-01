// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Validate from './assets/js/validate.js'
import './assets/js/bootstrap.min'
import './assets/css/reset.css'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

//控件，参数验证
Object.keys(Validate).forEach((key) => {
  Vue.prototype[key] = Validate[key];
});

//设置axios为全局变量
Vue.prototype.axios = axios;

//设置axois的默认请求地址
axios.defaults.baseURL = 'http://10.10.10.119:8080/cid';

//axios设置跨域请求
axios.defaults.withCredentials = true;

//ajax请求拦截器
axios.interceptors.request.use(function (config) {
  let access_token = window.sessionStorage.getItem('access_token');
  let refresh_token = window.localStorage.getItem('refresh_token');
  // console.log(config)
  if (config.url == 'oauth/token') {

  } else {
    if (access_token) {
      config.headers.common['Authorization'] = `Bearer ${access_token}`//每次发送请求是给请求头加上access_token
    }
  }
  console.log(config);
  return config;
}, function (err) {
  return Promise.reject(err);
});

//ajax响应拦截器
axios.interceptors.response.use(function (response) {

  return response;
}, function (err) {
  return Promise.reject(err);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
