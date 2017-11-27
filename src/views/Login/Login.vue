<template>
  <div id="login" class="row">
    <!--登录框-->
    <div class="login-box col-xs-6">
      <!--登录logo-->
      <div class="login-logo"></div>
      <!--登录输入框-->
      <div class="login-input col-xs-20 col-xs-offset-2">
        <div class="col-xs-24">
          <input type="text" class="form-control" placeholder="请输入用户名">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="col-xs-24">
          <input type="password" class="form-control" placeholder="请输入密码">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
      </div>
      <!--记住密码-->
      <div class="login-remember checkbox col-xs-20 col-xs-offset-2">
        <label for="remember">
          <input id="remember" type="checkbox"> 记住我
        </label>
      </div>
      <!--登录按钮-->
      <div class="login-button col-xs-20 col-xs-offset-2">
        <button class="form-control" @click="login()">登录</button>
      </div>
    </div>

    <!--底部信息-->
    <div class="login-footer text-center col-xs-24">
      <p>Copyright &copy; 2006-2017 罪犯数据库</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      //点击登录按钮时执行的方法
      login(){
        console.log('login');
      },

      //按ENTER键时实现登录操作
      keyUpEnter(){
        document.onkeyup = e => {
          if (e.keyCode == 13) {
            this.login();
          }
        }
      }
    },
    mounted() {
        this.keyUpEnter();
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  /***/
  /*border:1px solid #000*/
  #login
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: url(../../assets/img/backgroud.png) 0 0 no-repeat
    background-size: cover
    .login-box
      position: fixed
      left: 50%
      top: 50%
      margin-left: -12%
      margin-top: -15%
      background-color: white
      border: 1px solid #DDD
      border-radius: 3px
      .login-logo
        width: 72px
        height: 63px
        margin: 0 auto
        background: url(../../assets/img/loginLogo.png) center 0 no-repeat
        margin-top: 35px
      .login-input
        margin-top: 46px
        > div:nth-child(2)
          margin-top: 20px
        .form-control
          padding-left: 30px
        .form-control-feedback
          left: 0
          color: #999
      .login-button
        margin-bottom: 37px
        margin-top: 10px
        button
          height: 40px
          color: white
          background: #516671
      .login-remember
        font-size: 14px
        color: #999
        label
          line-height: 20px
    .login-footer
      position: absolute
      bottom: 18px
      p
        font-size: 12px
        color: #A3A6AB
</style>
