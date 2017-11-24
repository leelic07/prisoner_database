import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Punishment_Change from '@/views/Punishment_Excution/Commutation_Parole/Punishment_Change'
import PrisonDepartment_Deal from '@/views/Punishment_Excution/Commutation_Parole/PrisonDepartment_Deal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Login',
      // component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/punishment_change',
      name:'Punishment_Change',
      component:Punishment_Change
    },
    {
      path:'/prisonDepartment_deal',
      name:'PrisonDepartment_Deal',
      component:PrisonDepartment_Deal
    }
  ]
})
