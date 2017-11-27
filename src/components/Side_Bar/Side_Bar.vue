<template>
  <div id="side-bar" class="col-xs-4 pull-left">
    <div class="side-top">
        <div class="side-avatar pull-left"></div>
        <div class="side-right">
            <p class="side-content">管理员</p>
            <p class="glyphicon glyphicon-map-marker pull-left"></p>
            <p class="side-right-bottom">长沙监狱</p>    
        </div>
    </div>
    <ul class="col-xs-24">
        <!--一级菜单-->
        <template v-for="(item,index) in ListData">
            <li class="list col-xs-24" @click="toggle(index)" :class="nowIndex==index?'active':''" :key="index">
                <div class="col-xs-5">
                    <span class="li-icon"></span>
                </div>
                <div class="col-xs-14 col-xs-offset-1">
                    <span>{{item.ListName}}</span>  
                </div>
                <div class="col-xs-2 pull-right">   
                    <span :class="nowIndex==index?'arrow-bottom':'arrow-right'"></span>
                </div>
            </li>
            <!--二级菜单-->
            <template v-if="item.secondaryMenu">
                <ul v-show="nowIndex==index" :key="index" class="col-xs-24">
                    <li class="list-two" v-for="(tmp,ind) in item.secondaryMenu" :key="ind" @click="toggleTwo(ind)">
                        <div class="col-xs-14 col-xs-offset-6">
                            <span>{{tmp.sedName}}</span>
                        </div>
                        <div v-if="tmp.thirdMenu" class="col-xs-2 pull-right">   
                            <span :class="nowInd==ind?'arrow-bottom':'arrow-right'"></span>
                        </div>
                        <!--三级菜单-->
                        <template v-if="tmp.thirdMenu">
                            <ul v-show="nowInd==ind" class="col-xs-24">
                                <li class="list-three on row col-xs-24" v-for="(rmp,inde) in tmp.thirdMenu" :key="inde">
                                    <div class="col-xs-14 col-xs-offset-8">
                                        <span>{{rmp.thrName}}</span>
                                    </div>
                                </li>
                            </ul>
                        </template>
                    </li>                             
                </ul>
            </template>
        </template>
    </ul>
  </div>
</template>

<script>
    import { ListData } from './../../assets/js/list'
    export default {
        data() {
            return {
                ListData:ListData,
                statusTwo:false,
                nowIndex:-1,
                nowInd:-1
            }
        },
        methods:{
            toggle(index){
                if(this.nowIndex==index){
                    this.nowIndex=-1
                }else{
                    this.nowIndex=index
                }     
            },
            toggleTwo(ind){
                if(this.nowInd==ind){
                    this.nowInd=-1
                }else{
                    this.nowInd=ind
                }     
            }
        },
        mounted:function(){
        }
    }
</script>

<style type="text/stylus" lang="stylus" scoped>
    bgcolor = #263238
    white = #fff
    ul 
        padding 0
        margin 0
        list-style none
    .active
        background-color:#29b0a3
    .arrow-right
                display inline-block
                width 5px
                height 8px
                background url(../../assets/img/arrow-right.png) 0 0 no-repeat
    .arrow-bottom
        display inline-block
        width 8px
        height 5px
        background url(../../assets/img/arrow-bottom.png) 0 0 no-repeat  
    #side-bar
        background bgcolor
        position absolute
        top 46px
        bottom 0px
        color white
        overflow-y:auto;
        .side-top
            padding 20px 16px 20px 7px
            position relative
            .side-avatar
                width 38px
                height 40px
                background:url(../../assets/img/user.png) 0 0 no-repeat
                background-size 38px 40px
            .side-right
                margin-left 52px
                font-size 12px
                .side-content
                    margin-bottom 10px
                .side-right-bottom
                    margin-left 17px
                    margin-bottom 0
        .list
            height 44px
            line-height 44px
            font-size 14px
            &:hover
                background-color #29b0a3
            .li-icon
                display:inline-block
                width 15px
                height 15px
                background url(../../assets/img/settings.png) 0 0 no-repeat
                margin-left 16px
                margin-right 14px
        .list-two
            height 38px
            line-height 38px
            font-size 14px 
            color #d1d1d1
            background-color #202a2f
        .list-three
            height 38px
            line-height 38px
            font-size 14px
            color #fff
            background #182125
            &:hover
                background-color #13191c
</style>
