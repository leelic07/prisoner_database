<template>
  <!--容器组件-->
  <Container>
    <!--路径导航组件-->
    <Bread :breadCrumb="breadCrumb" slot="breadCrumb"></Bread>
    <div id="prisonDepartment_deal" class="col-xs-24" slot="content">
      <h1>监区办理</h1>
    </div>
  </Container>
</template>

<script>
  import Bread from '@/components/Bread/Bread'
  import Container from '@/components/Container/Container'

  export default {
    data() {
      return {
          breadCrumb:['刑罚执行','减刑假释','监区办理']
      }
    },
    components:{
      Bread,
      Container
    }
  }
</script>

<style type="text/stylus" lang="stylus">

</style>
