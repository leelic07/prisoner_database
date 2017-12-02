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
            <input id="userName" type="text" class="form-control" disabled v-model="username">
          </div>
          <div class="right pull-left">
            <label for="createdTime">创建时间</label>
            <input id="createdTime" type="text" class="form-control" disabled v-model="createdTime">
          </div>
        </div>
        <div class="content-down col-xs-24">
          <div class="left pull-left">
            <label for="updatedTime">最后更新时间</label>
            <input id="updatedTime" type="text" class="form-control" disabled v-model="lastUpdatedTime">
          </div>
          <div class="right pull-left">
            <label for="name">姓名</label>
            <input id="name" type="text" class="form-control" v-model="name">
          </div>
        </div>
        <div class="col-xs-24 um-button">
          <div class="pull-left left">
            <button class="pull-right">返回</button>
          </div>
          <div class="pull-left right">
            <button class="pull-left" @click="saveUser()">保存</button>
          </div>
        </div>
      </div>

      <!--修改密码模块-->
      <div class="um-modifyPassword col-xs-24">
        <p class="pull-left">登录密码</p>
        <p class="pull-left">安全性高的密码可以使账号更安全，密码长度要求超过6位以上的密码。</p>
        <router-link to="/pwd_modification" class="pull-right">修改</router-link>
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
    data() {
      return {
        breadCrumb: [],//面包屑
        username: '',//用户名
        createdTime: '',//创建时间
        updatedTime: '',//最后创建时间
        lastUpdatedTime:'',//最后更新时间
        name: '',//姓名
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
    components: {
      Container,
      Bread,
      Remind,
      Modal
    },
    methods: {
      //点击保存时执行的方法
      saveUser(){
        if (this.isNull(this.name)) {
          this.remind = {
            status: 'warn',
            msg: '姓名不能为空'
          }
          this.$store.dispatch('showRemind');
        } else {
          this.modal = {
            msg: '确定修改个人信息?',
            method: this.confirmModify
          }
          this.$store.dispatch('showModal')
        }
      },
      //点击确定保存修改信息时执行的方法
      confirmModify(){
        this.axios.put('/api/users/me', {
          name: this.name
        }).then(res => {
//          console.log(res.data.data.code);
          this.getUserMsg();
          $('.modal').modal('hide');
          this.remind = {
            status:'success',
            msg:'修改个人信息成功'
          }
          this.$store.dispatch('showRemind');
        }).catch(err => {
          console.log(err);
        })
      },
      //获取用户个人信息方法
      getUserMsg(){
        this.axios.get('/api/users/me').then(res => {
          let data = res.data;
          this.createdTime = data.createdTime;
          this.lastUpdatedTime = data.lastUpdatedTime;
          this.name = data.name;
          this.username = data.username;
        }).catch(err => {
          console.log(err);
        })
      }
    },
    mounted(){
      this.getUserMsg();
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  um-border = 1px solid #ddd

  button(color,background,border-radius,hover-color,height,width,font-size,border)//实现按钮的样式
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
        margin-left:2%
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
