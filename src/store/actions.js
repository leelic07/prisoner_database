import * as types from './types.js'

export default {
  changeshow: ({commit}) => {
    commit(types.CHANGESHOW)
  },
  //显示提示框的action
  showRemind: ({commit}) => {
    commit(types.SHOWREMIND)
  },
  //隐藏提示框的action
  hideRemind: ({commit}) => {
    commit(types.HIDEREMIND)
  },
  //显示模态框的action
  showModal:({commit}) => {
    commit(types.SHOWMODAL)
  },
  //隐藏模态框的action
  hideModal:({commit}) => {
    commit(types.HIDEMODAL)
  }
}

