<template>
  <!--容器组件-->
  <Container>
    <!--面包屑组件-->
    <Bread :breadCrumb="breadCrumb" slot="breadCrumb"></Bread>
    <div id="punishment_change" class="col-xs-24" slot="content">
      <h1>刑罚变动</h1>
    </div>
  </Container>
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
</style>
