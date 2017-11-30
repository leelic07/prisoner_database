import {
  CHANGESHOW,
  SHOWREMIND,
  HIDEREMIND
} from  './types'

import getters from './getters'

//vuex状态属性
const state = {
  isShow: true,
  remind: false
}

//设置状态属性的变化
const mutations = {
  [CHANGESHOW](state){
    state.isShow = !state.isShow
  },
  [SHOWREMIND](state){
    state.remind = true
  },
  [HIDEREMIND](state){
    state.remind = false
  }
}

export default {
  state,
  mutations,
  getters
}
