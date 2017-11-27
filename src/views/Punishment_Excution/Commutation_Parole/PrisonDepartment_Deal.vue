<template>
  <!--路径导航组件-->
  <div id="prisonDepartment_deal" class="col-xs-20 col-xs-offset-4">
    <Bread :breadCrumb="breadCrumb"></Bread>
    <Container>
      <h1>监区办理</h1>
    </Container>
  </div>
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
