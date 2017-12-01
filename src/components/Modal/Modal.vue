<template>
  <!--模态框-->
  <div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
    <div id="modal-dialog" class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title text-center" id="gridSystemModalLabel">{{msg}}</h4>
        </div>
        <div class="modal-footer">
          <div class="col-xs-11">
            <button type="button" class="pull-right" data-dismiss="modal">取消</button>
          </div>
          <div class="col-xs-11 col-xs-offset-2">
            <button type="button" class="pull-left" @click="method">确定</button>
          </div>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- /.modal -->
</template>

<script>
    export default {
      props:['method','msg'],
      data() {
        return {

        }
      }
    }
</script>

<style type="text/stylus" lang="stylus">
  button(color,background,border-radius,hover-color,height,width,font-size,border)//实现按钮的样式
    color:color
    background:background
    border-radius:border-radius
    width:width
    height:height
    border:border
    &:hover
      background:hover-color

  #modal
    #modal-dialog
      margin-top:15%
      width:30%
    /*.modal-title*/
    .modal-footer
      >div
        &:first-child
          button
            button(#666,white,2px,'',36px,76px,12px,1px solid #ddd)
        &:nth-child(2)
          button
            button(white,#2196F3,2px,'',36px,76px,12px,1px solid #ddd)
</style>
