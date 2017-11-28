<template>
  <div class="col-xs-20 col-xs-offset-4 router-container" :class="{toggleSize : isShow?false:true}">
    <slot name="breadCrumb"></slot>
    <div class="router-content col-xs-24">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
      data() {
        return {
          toggleSize:false
        }
      },
      computed:mapGetters([
        'isShow'
      ]),
      watch:{
        isShow(){
            console.log(this.isShow);
        }
      }
    }
</script>

<style type="text/stylus" lang="stylus">
  background-color = #F5F5F5
  white = #fff
  .router-container
    background:background-color
    transition:all .3s linear
    &.toggleSize
      transition:margin-left .3s linear
      width:96.5%
      margin-left:3.7%
    .router-content
      background:white
      -webkit-border-radius: 5px
      -moz-border-radius: 5px
      border-radius: 3px
      width:97%
      height:500px
      margin-left:1.5%
      margin-top:20px
      margin-bottom:20px
      border:1px solid #E3E3E3
</style>
