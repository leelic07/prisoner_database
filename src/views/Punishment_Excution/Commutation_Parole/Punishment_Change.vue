<template>
  <div id="punishment_change" class="col-xs-20 col-xs-offset-4">
    <!--路径导航组件-->
    <Bread :breadCrumb="breadCrumb"></Bread>
    <Container>
      <h1>刑罚变动</h1>
    </Container>
  </div>
</template>

<script>
  import Bread from '@/components/Bread/Bread'
  import Container from '@/components/Container/Container'

  export default {
    data() {
      return {
        breadCrumb:['刑罚执行','减刑假释','刑罚变动']//路径导航
      }
    },
    components:{
      Bread,
      Container
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  background-color = #F5F5F5
  white = #fff
  #punishment_change
    /*margin-top:46px*/
</style>
