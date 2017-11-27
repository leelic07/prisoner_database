<template>
  <div id="" class="container-fluid">
    <NavHeader></NavHeader>
    <SideBar></SideBar>
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
  data(){
    return {
    }
  },
  components:{
    SideBar,
    NavHeader
  }
}
</script>

<style type="text/stylus" lang="stylus">
  #router-view
    margin-left:20%
</style>
