<template>

  <!--容器组件-->
  <Container>
    <!--面包屑组件-->
    <Bread :breadCrumb="breadCrumb" slot="breadCrumb"></Bread>
      <div id="user_modification" class="col-xs-24" slot="content">
        <div class="col-xs-24 um-title">
          <p>修改个人信息</p>
        </div>

        <!--修改个人信息模块-->
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
              <input id="name" type="text" :value="name" class="form-control">
            </div>
          </div>
          <div class="col-xs-24 um-button">
            <div class="pull-left left">
              <button class="btn btn-default pull-right">返回</button>
            </div>
            <div class="pull-left right">
              <button class="btn btn-primary">保存</button>
            </div>
          </div>
        </div>

        <!--修改密码模块-->
        <div class="um-modifyPassword col-xs-24">
          <p class="pull-left">登录密码</p>
          <p class="pull-left">安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</p>
          <router-link to="/pwd_modification" class="pull-right">修改</router-link>
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

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  um-border = 1px solid #ddd
  button(color,background,border-radius,hover-color,height,width,font-size,border)
    color:color
    background:background
    border-radius:border-radius
    width:width
    height:height
    border:border
    &:hover
      background:hover-color

  border-radius(border-radius)//边框的弯曲像素
    -webkit-border-radius border-radius
    -moz-border-radius border-radius
    border-radius border-radius

  box(border,border-radius,background)//内容页面框的样式
    border border
    border-radius(border-radius)
    background background

  #user_modification
    /***/
      /*border:1px solid #000*/
    .um-title
      padding:20px 0 20px 20px
      box(um-border,2px,white)
      border-bottom:0
      p
        font-size:14px
        color: #333
    .um-form
      padding:26px 22px 30px 21px
      font-size:12px
      color:#333
      box(um-border,2px,white)
      .left
        width:49%
      .right
        width:49%
        margin-left:20px
      label
        margin-bottom:10px
      .content-up
        margin-bottom:24px
    .um-button
      margin-top:30px
      background:white
      >div
        &:first-child
          button
            button(#666,white,2px,'',36px,76px,12px,1px solid #ddd)
        &:nth-child(2)
          button
            button(white,#2196F3,2px,'',36px,76px,12px,1px solid #ddd)

    .um-modifyPassword
      box(um-border,2px,white)
      margin-top:20px
      padding:20px 22px 20px 20px
      font-size: 14px
      color: #333
      >p
        &:nth-child(2)
          font-size: 12px
          color:#999
          margin-left:40px
</style>
