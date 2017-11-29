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
                        <input type="password" :value="oldPassword" class="form-control" placeholder="原始密码">
                    </div>
                    <div class="form-input-middle">
                        <input :type="inputTypeOld" v-model="newPassword" class="form-control" placeholder="输入新密码">
                        <span class="glyphicon" :class="stateOld?'glyphicon-eye-close':'glyphicon-eye-open'" @click="isHiddenOld"></span>
                    </div>
                    <div class="form-input-bottom">
                        <input :type="inputTypeNew" v-model="newPassword_again" class="form-control" placeholder="再次输入新密码">
                        <span class="glyphicon" :class="stateNew?'glyphicon-eye-close':'glyphicon-eye-open'"  @click="isHiddenNew"></span>
                    </div>
                    <div class="form-btn">
                        <button class="btn btn-return">返回</button>
                        <button class="btn btn-confirm">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script>
    import Container from '@/components/Container/Container'
    import Bread from '@/components/Bread/Bread'
export default {
    data(){
        return {
            breadCrumb:[],//面包屑
            oldPassword:'',
            newPassword:'12345678',
            newPassword_again:'',
            inputTypeOld:'password',
            inputTypeNew:'password',
            stateOld:true,
            stateNew:true,
        }
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
        }
    },
    components:{
      Container,
      Bread
    }
}
</script>

<style type="text/stylus" lang="stylus" scoped>
input
    &:focus  
        outline none
        border-color #dddddd
        box-shadow: 0 0 0 #dddddd;
        border-radius 5px 
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
                    background #F5F5F5
                    font-size 12px
                    color #999999
            .form-input-middle
                margin-bottom 20px
                position relative
                input
                    font-size 12px
                    color #333333
                span
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
                    font-size 12px
                    color #999999
                    background #F5F5F5
                span
                    position absolute
                    right 10px
                    top 50%
                    transform translateY(-50%)
                    color #999999
                    font-size 15px
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