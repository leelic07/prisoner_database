<template>
  <Container>
      <Bread :breadCrumb="breadCrumb" slot="breadCrumb"></Bread>
        <div id="pwd_modification" class="col-xs-24" slot="content">
          <div class="col-xs-24 um-title">
            <p>修改密码</p>
          </div>
          <div class="col-xs-24 um-form">
            <div class="form-box">
              <div class="form-input-top">
                <input type="password" v-model="oldPassword" class="form-control" placeholder="原始密码">
              </div>
              <div class="form-input-middle">
                <input :type="inputTypeOld" v-model="newPassword" class="form-control" placeholder="输入新密码">
                  <span class="glyphicon" :class="stateOld?'glyphicon-eye-close':'glyphicon-eye-open'" @click="isHiddenOld"></span>
              </div>
              <div class="form-input-bottom">
                <input :type="inputTypeNew" v-model="newPassword_again" class="form-control" placeholder="再次输入新密码" @keyup.enter="keyUpEnter">
                  <span class="glyphicon" :class="stateNew?'glyphicon-eye-close':'glyphicon-eye-open'"  @click="isHiddenNew"></span>
                <span class="prompt-msg">{{error}}</span>
              </div>
              <div class="form-btn">
                <button class="btn btn-return" @click="goBack">返回</button>
                <button class="btn btn-confirm" @click="Validate">确认</button>
              </div>
            </div>
          </div>
          <!--提示框-->
          <Remind v-if="remindShow" :status="remind.status" :msg="remind.msg"></Remind>
          <!--模态框-->
          <Modal v-if="modalShow" :method="modal.method" :msg="modal.msg"></Modal>
        </div>
    </Container>
</template>

<script>
  import Container from '@/components/Container/Container'
  import Bread from '@/components/Bread/Bread'
  import Remind from '@/components/Remind/Remind'
  import Modal from '@/components/Modal/Modal'
  import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      breadCrumb:[],//面包屑
      oldPassword:'',
      newPassword:'',
      newPassword_again:'',
      inputTypeOld:'password',//type类型
      inputTypeNew:'password',//type类型
      stateOld:true,//控制密码可见与不可见
      stateNew:true,//控制密码可见与不可见
      error:'',
      remind: {//提示框信息
        status: '',
        msg: ''
      },
      modal: {//模态框提示信息
          msg: '',
          method: ''
        }
    }
  },
  computed: {
    ...mapGetters({
      remindShow:'remindShow',
      modalShow:'modalShow'
    })
  },
  methods:{
    isHiddenOld(){
      this.stateOld=!this.stateOld
        if(this.inputTypeOld==='password'){
          this.inputTypeOld='text'
        }else{
          this.inputTypeOld='password'
      }
    },
    isHiddenNew(){
      this.stateNew=!this.stateNew
        if(this.inputTypeNew==='password'){
          this.inputTypeNew='text'
        }else{
          this.inputTypeNew='password'
        }
    },
     //返回上一级
    goBack(){
      this.$router.go(-1)
    },
    //按ENTER键时实现登录操作
    keyUpEnter(){
      this.Validate();
    },
    Validate(){
        if(this.oldPassword === ''||this.newPassword === ''||this.newPassword_again === ''){
            this.error = '密码不能为空，请检查！'
        }else if(this.newPassword !== this.newPassword_again){
            this.error = '两次密码不一致，请检查！'
        }else{
            this.modal = {
            msg: '确定修改密码?',
            method: this.confirmModify
            }
            this.$store.dispatch('showModal');
        }
    },
    //点击确定保存修改信息时执行的方法
    confirmModify(){
      this.axios({
        method:'PUT',
        url:'/api/users/me/password',
        data:{
          oldPassword:this.oldPassword,
          newPassword:this.newPassword
        },
      }).then(res => {
        $('#modal').modal('hide');
          this.remind = {
            status:'success',
            msg:'修改个人密码成功'
          }
          this.$store.dispatch('showRemind');
      }).catch(err => {
        console.log('错误：' + err);
        $('#modal').modal('hide');
        this.remind = {
          status:'failed',
          msg:'原密码输入错误，请检查！'
        }
        this.$store.dispatch('showRemind');
      })
    }
  },
  watch:{
      oldPassword(){
        if(this.isNull(this.oldPassword)){
          this.error = '密码不能为空，请检查！'
        }else{
          this.error = ''
        }
      },
      newPassword(){
        if(this.isNull(this.newPassword)){
          this.error = '密码不能为空，请检查！'
        }else{
          this.error = ''
        }
      },
      newPassword_again(){
        if(this.isNull(this.newPassword_again)){
          this.error = '密码不能为空，请检查！'
        }else{
          this.error = ''
        }
      }
    },
  components:{
    Container,
    Bread,
    Remind,
    Modal
  }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
#pwd_modification
  background #ffffff
  .um-title
      padding:20px 0 20px 20px
      border-bottom:1px solid #DDD
      p
        font-size:14px
        color: #333
  .um-form
      padding:30px 22px 30px 21px
      font-size:12px
      color:#333333
      .form-box
        width 340px
        margin 0 auto
        .form-input-top
          margin-bottom 20px
          input
            width 340px
            background #F5F5F5
            font-size 12px
            color #999999
            &:focus
              outline none
              border-color #dddddd
              background-color #fff
              border-radius 5px
        .form-input-middle
          margin-bottom 20px
          position relative
          input
            width 340px
            font-size 12px
            color #999999
            background #F5F5F5
            padding-right 28px
            &:focus
              outline none
              border-color #dddddd
              background-color #fff
              border-radius 5px
          .glyphicon
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            color #999999
            font-size 15px
        .form-input-bottom
          margin-bottom 30px
          position relative
          input
            width 340px
            font-size 12px
            color #999999
            background #F5F5F5
            padding-right 28px
            &:focus
              outline none
              border-color #dddddd
              background-color #fff
              border-radius 5px
          .glyphicon
            position absolute
            right 10px
            top 50%
            transform translateY(-50%)
            color #999999
            font-size 15px
            padding-left 15px
          .prompt-msg
            position absolute
            left 10px
            margin-top 5px
            color red
        .form-btn
          width 340px
          .btn-return
            width 160px
            height 36px
            color #333333
            font-size 12px
            background #ffffff
            border 1px solid #dddddd
          .btn-confirm
            width 160px
            height 36px
            margin-left 14px
            background #2196f3
            color #ffffff
            font-size 12px
</style>
