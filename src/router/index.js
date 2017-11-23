import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import Registration from '@/views/Registration'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/registration',
      name:'Registration',
      component:Registration
    }
  ]
})
