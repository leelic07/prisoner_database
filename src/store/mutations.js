// import {
//   CHANGESHOW,
//   SHOWREMIND,
//   HIDEREMIND,
//   SHOWMODAL,
//
// } from  './types'

import * as types from './types.js'

import getters from './getters'

//vuex状态属性
const state = {
  isShow: true,
  remind: false,
  modal:false
}

//设置状态属性的变化
const mutations = {
  [types.CHANGESHOW](state){
    state.isShow = !state.isShow
  },
  [types.SHOWREMIND](state){
    state.remind = true
  },
  [types.HIDEREMIND](state){
    state.remind = false
  },
  [types.SHOWMODAL](state){
    state.modal = true
  },
  [types.HIDEMODAL](state){
    state.modal = false
  }
}

export default {
  state,
  mutations,
  getters
}
