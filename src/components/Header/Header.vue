<template>
  <div id="Header" class="row">
    <div class="col-xs-4 header-left">
      <div class="col-xs-24 logo">
        <span class="header-logo pull-left"></span>
        <p class="pull-left project-name">罪犯数据库</p>
      </div>
    </div>

    <div class="col-xs-20 header-right">
      <div class="col-xs-1 align">
        <span class="glyphicon glyphicon-align-justify col-xs-12"></span>
      </div>

      <div class="col-xs-5 col-xs-offset-18">
        <div class="col-xs-2 header-cog">
          <span class="cog pull-left"></span>
        </div>
        <div class="col-xs-2 header-information">
          <span class="information pull-left"></span>
        </div>
        <div class="col-xs-13 header-user">
          <div class="user pull-left"></div>
          <p class="pull-left">管理员</p>
        </div>
        <div class="col-xs-2 header-logout">
          <div class="logout pull-left"></div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style type="text/stylus" lang="stylus" scoped>
  background = #37474F
  white = #fff
  /***/
    /*border:1px solid #000*/
  #Header
    background-color:background
    color:white
    padding:3px 0 0 0
    .header-left
      .logo
        padding-top:10px
        .header-logo
          width:22px
          height:20px
          background:url(../../assets/img/header-logo.png) 0 0 no-repeat
          background-size:cover
          margin-left: 20px
        .project-name
          font-size: 16px
          margin-left:10px
    .header-right
      >div:nth-child(2)
        padding-top:10px
        .header-cog
          .cog
            width: 19px
            height:18px
            background:url(../../assets/img/settings.png) 0 0 no-repeat
            &:hover
              cursor:pointer
        .header-information
          margin-left:20px
          .information
            width: 19px
            height:18px
            background:url(../../assets/img/information.png) 0 0 no-repeat
            &:hover
              cursor:pointer
        .header-user
          .user
            width: 30px
            height: 30px
            border-radius:50%
            background:url(../../assets/img/user.png) 0 0 no-repeat
            margin:-5px 0 0 20px
            &:hover
              cursor:pointer
          p
            margin-left:7px
            &:hover
              cursor:pointer
        .header-logout
          .logout
            width: 20px
            height:20px
            background:url(../../assets/img/logout.png) 0 0 no-repeat
            &:hover
              cursor:pointer
      .align
        padding-top:11px
        font-size:17px
        span
          &:hover
            cursor:pointer

</style>
