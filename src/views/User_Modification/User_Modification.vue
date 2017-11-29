<template>
  <!--容器组件-->
  <Container>
    <!--面包屑组件-->
    <Bread :breadCrumb="breadCrumb" slot="breadCrumb"></Bread>
      <div id="user_modification" class="col-xs-24" slot="content">
        <div class="col-xs-24 um-title">
          <p>修改个人信息</p>
        </div>
        <div class="col-xs-24 um-form">
          <div class="content-up col-xs-24">
            <div class="left pull-left">
              <label for="userName">用户名</label>
              <input id="userName" type="text" :value="userName" class="form-control" disabled>
            </div>
            <div class="right pull-left">
              <label for="createdTime">创建时间</label>
              <input id="createdTime" type="text" :value="createdTime" class="form-control" disabled>
            </div>
          </div>
          <div class="content-down col-xs-24">
            <div class="left pull-left">
              <label for="updatedTime">最后更新时间</label>
              <input id="updatedTime" type="text" :value="updatedTime" class="form-control" disabled>
            </div>
            <div class="right pull-left">
              <label for="name">姓名</label>
              <input id="name" type="text" :value="name" class="form-control" disabled>
            </div>
          </div>
        </div>
      </div>
  </Container>

</template>

<script>
  import Container from '@/components/Container/Container'
  import Bread from '@/components/Bread/Bread'

  export default {
    data() {
      return {
        breadCrumb:[],//面包屑
        userName:'zzz123456789',//用户名
        createdTime:'1993-1-11 23:30:10',//创建时间
        updatedTime:'2017-10-23 23:30:10',//最后创建时间
        name:'XXX'//姓名
      }
    },
    components:{
      Container,
      Bread
    }
  }
</script>

<style type="text/stylus" lang="stylus">
  #user_modification
    .um-title
      padding:20px 0 20px 20px
      border-bottom:1px solid #DDD
      p
        font-size:14px
        color: #333
    .um-form
      padding:26px 22px 30px 21px
      font-size:12px
      color:#333
      label
        margin-bottom:10px
      .content-up
        .left
          width:47%
        .right
          width:47%
          margin-left:6%
</style>
