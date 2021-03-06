import Vue from 'vue'
import Router from 'vue-router'
import Punishment_Change from '@/views/Punishment_Excution/Commutation_Parole/Punishment_Change'
import PrisonDepartment_Deal from '@/views/Punishment_Excution/Commutation_Parole/PrisonDepartment_Deal'
import Login from '@/views/Login/Login'
import User_Modification from '@/views/User_Modification/User_Modification'
import Password_Modification from '@/views/Password_Modification/Password_modification'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: '*',
    //   component: Login
    // },
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
    },
    {
      path:'/user_modification',
      name:'User_Modification',
      component:User_Modification
    },
    {
      path:'/pwd_modification',
      name:'Password_Modification',
      component:Password_Modification
    },
    {
      path:'*',
      redirect:'/login'
    }
  ]
})
