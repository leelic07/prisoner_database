<template>

  <div id="Header" class="row">
    <!--罪犯数据库logo-->
    <div class="col-xs-4 header-left">
      <div class="col-xs-24 logo">
        <span class="header-logo pull-left"></span>
        <p class="pull-left project-name">罪犯数据库</p>
      </div>
    </div>

    <div class="col-xs-20 header-right">
      <div class="col-xs-1 align" @click="changeshow">
        <span class="glyphicon glyphicon-align-justify col-xs-12"></span>
      </div>

      <div class="col-xs-5 col-xs-offset-18">
        <div class="col-xs-2 header-cog">
          <span class="cog pull-left"></span>
        </div>
        <div class="col-xs-2 header-information">
          <span class="information pull-left"></span>
        </div>
        <div class="col-xs-12 header-user" @click="toggleModification = !toggleModification">
          <div class="user pull-left"></div>
          <p class="pull-left">管理员</p>
          <div class="modification" v-if="toggleModification">
            <router-link to="/user_modification" class="pull-left">
              <span class="pull-left"></span>
              修改个人信息
            </router-link>
          </div>
        </div>
        <div class="header-divide pull-left"></div>
        <div class="col-xs-2 header-logout">
          <div class="logout pull-left"></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters,mapActions } from 'vuex'

  export default {
    data() {
      return {
        toggleModification:false
      }
    },
    methods:{
      mapActions(['changeshow']),
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  header-background = #37474F
  white = #fff
  /***/
    /*border:1px solid #000*/
  #Header
    position:fixed
    top:0
    left:0
    right:0
    z-index:100
    background-color:header-background
    color:white
    height 46px
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
          position:relative
          .user
            width: 30px
            height: 30px
            border-radius:50%
            background:url(../../assets/img/user.png) 0 0 no-repeat
            margin:-5px 0 0 20px
          p
            margin-left:7px
          &:hover
            cursor:pointer
          .modification
            position:absolute
            z-index:100
            bottom:-35px
            left:-15px
            height:40px
            background:white
            border:1px solid #E1E1E1
            padding:4px 0 0 0
            a
              color:#3D3D3D
              font-size:15px
              height:30px
              width:130px
              line-height:30px
              background:#F5F5F5
              text-align:left
              &:hover
                background:#E1E1E1
              span
                width: 16px
                height:14px
                margin:8px 5px 0 8px
                background:url(../../assets/img/user-modification.png) 0 0 no-repeat
        .header-logout
          margin-left:20px
          .logout
            width: 20px
            height:20px
            background:url(../../assets/img/logout.png) 0 0 no-repeat
            &:hover
              cursor:pointer
        .header-divide
          height: 30px
          border-left:1px solid #4C626D
          margin-top:-5px
      .align
        padding-top:11px
        font-size:17px
        span
          &:hover
            cursor:pointer

</style>
