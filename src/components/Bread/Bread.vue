<template>
  <div id="bread" class="row">
    <ul class="bread-crumb col-xs-24">
      <li class="pull-left">
        <span class="glyphicon glyphicon-home pull-left"></span>
        <a href="#" class="pull-left">主页</a>
      </li>
      <li v-for="item,index in breadCrumb" class="pull-left" :class="{'active':breadCrumb.length == index + 1}">
        <span class="pull-left">/</span>
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props:['breadCrumb'],
        data() {
            return {

            }
        }
    }
</script>

<style type="text/stylus" lang="stylus" scoped>
  white = #fff
  bread-color = #333
  bread-active-color = #999
  /***/
    /*border:1px solid #000*/
  #bread
    .bread-crumb
      background:white
      color:bread-color
      border-radius:0
      border-bottom:1px solid #DDD
      margin-bottom:0
      padding-left:10px
      height:40px
      line-height:40px
      font-size:12px
      li
        &.active
          color:bread-active-color
        margin-left:10px
        span:first-child
          margin-right:10px
        &:first-child
          span
            line-height:38px
          a
            color:bread-color
</style>
