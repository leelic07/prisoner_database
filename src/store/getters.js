export default {
  //获取侧边栏状态的方法
  isShow: (state) => {
    return state.isShow
  },
  //获取提示框状态的方法
  remindShow: (state) => {
    return state.remind
  },
  //获取模态框状态的方法
  modalShow:(state) => {
    return state.modal
  }
}
