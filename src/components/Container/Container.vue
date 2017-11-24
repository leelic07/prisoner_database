<template>
  <div class="col-xs-24 router-container">
    <div class="router-content">
      <slot></slot>
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

<style type="text/stylus" lang="stylus">
  background-color = #F5F5F5
  white = #fff
  .router-container
    background:background-color
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
