<template>
  <!-- Small modal -->
  <div id='remindConfirm' class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog"
       aria-labelledby="mySmallModalLabel" @keyup.enter="hideRemind">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <!--成功-->
        <div v-if="status == 'success'" class="panel panel-success">
          <div class="panel-heading">
            <h3 class="panel-title text-center">成功</h3>
          </div>
          <div class="panel-body text-center" v-text='msg'>

          </div>
        </div>

        <!--失败-->
        <div v-else-if="status == 'failed'" class="panel panel-danger">
          <div class="panel-heading">
            <h3 class="panel-title text-center">失败</h3>
          </div>
          <div class="panel-body text-center" v-text='msg'>

          </div>
        </div>

        <!--警告-->
        <div v-else-if="status == 'warn'" class="panel panel-warning">
          <div class="panel-heading">
            <h3 class="panel-title text-center">警告</h3>
          </div>
          <div class="panel-body text-center" v-text='msg'>

          </div>
        </div>

        <!--默认-->
        <div v-else class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title text-center">默认</h3>
          </div>
          <div class="panel-body text-center" v-text='msg'>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
//  import store from '../store'
  export default{
    data(){
      return {}
    },
    props: ['status', 'msg', 'back', 'path', 'reload', 'method'],
    methods: {
      //显示模态框
      remindInit(){
        $('.bs-example-modal-sm').modal();
      },

      //模态框消失时执行的方法
      remindDestroy(){
        $('.bs-example-modal-sm').on('hidden.bs.modal', () => {
          this.$store.dispatch('hideRemind');
          this.hideRemind();
          if (this.back == true) {
            window.history.go(-1);
          } else if (this.path) {
            this.$router.push({
              path: this.path
            });
          } else if (this.reload) {
            window.location.reload();
          } else if (this.method) {
            this.method();
          }
        });
      },

      hideRemind () {
        $('.bs-example-modal-sm').modal("hide");
      }
    },
    mounted(){
      this.remindInit();
      this.remindDestroy();
    }
  }
</script>

<style type="text/less" lang='less' scoped>
  #remindConfirm {
    .panel {
      margin-bottom: 0;
    }
  }
</style>
