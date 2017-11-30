import * as types from './types.js'
export default {
  changeshow: ({commit}) => {
    commit(types.CHANGESHOW)
  },
  showRemind: ({commit}) => {
    commit(types.SHOWREMIND)
  },
  hideRemind: ({commit}) => {
    commit(types.HIDEREMIND)
  }

}
