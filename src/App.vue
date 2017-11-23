<template>
  <div id="" class="container-fluid">
    <NavHeader></NavHeader>
    <SideBar></SideBar>
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/Side_Bar/Side_Bar'
import NavHeader from '@/components/Header/Header'
export default {
  name: 'app',
  components:{
    SideBar,
    NavHeader
  }
}
</script>

<style>

</style>
