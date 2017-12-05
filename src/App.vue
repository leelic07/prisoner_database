<template>
  <div id="app" class="container-fluid">
    <NavHeader></NavHeader>
    <SideBar v-if="isLoginPage"></SideBar>
    <!--<div id="router-view">-->
      <router-view/>
    <!--</div>-->
  </div>
</template>

<script>
import SideBar from '@/components/Side_Bar/Side_Bar'
import NavHeader from '@/components/Header/Header'

export default {
  name: 'app',
  data() {
    return {
      isLoginPage:true
    }
  },
  watch:{
    //路由改变时是否隐藏和显示侧边栏和页头
    $route(to,from){
      if(to.path == '/login') {
          this.isLoginPage = false
      }else {
          this.isLoginPage = true
      }
    }
  },
  methods:{
    //隐藏侧边和页头的方法
    hideBar(){
      const loginUrl = "/login";
      if (this.$route.path == loginUrl ) {//进入登陆页面
        this.isLoginPage = false;//将侧边栏和顶栏隐藏
      }
    }
  },
  components:{
    SideBar,
    NavHeader
  },
  mounted(){
    this.hideBar();
  }
}
</script>

<style type="text/stylus" lang="stylus">
  #router-view
    margin-left:20%
</style>
