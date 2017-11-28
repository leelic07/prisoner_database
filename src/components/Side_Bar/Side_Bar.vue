<template>
    <div>
        <!-- 展开侧边栏 -->
        <div id="side-bar" class="col-xs-4 pull-left" :style="{ width : isShow?'':'0'}">
            <div class="side-top row">
                <div class="side-avatar pull-left"></div>
                <div class="side-right" :style="{ display : isShow?'':'none'}">
                    <p class="side-content col-xs-24">管理员</p>
                    <p class="glyphicon glyphicon-map-marker col-xs-1 pull-left"></p>
                    <p class="side-right-bottom col-xs-10">长沙监狱</p>    
                </div>
            </div>
            <ul class="col-xs-24">
                <!--一级菜单-->
                <template v-for="(item,index) in ListData">
                    <li class="list col-xs-24" @click="toggle(index)" :class="nowIndex==index?'active':''" :key="index">
                        <div class="col-xs-4 list-icon">
                            <span class="li-icon"></span>
                        </div>
                        <div class="col-xs-8 col-xs-offset-1" :style="{ display : isShow?'':'none'}">
                            <span>{{item.ListName}}</span>  
                        </div>
                        <div class="col-xs-2 pull-right">   
                            <span :class="nowIndex==index?'arrow-bottom':'arrow-right'" :style="{ display : isShow?'':'none'}"></span>
                        </div>
                    </li>
                    <!--二级菜单-->
                    <template v-if="item.secondaryMenu">
                        <ul v-show="nowIndex==index" :key="index" class="col-xs-24">
                            <li class="list-two" v-for="(tmp,ind) in item.secondaryMenu" :key="ind">
                                <div @click="toggleTwo(ind)">
                                    <div class="col-xs-14 col-xs-offset-6">
                                        <span>{{tmp.sedName}}</span>
                                    </div>
                                    <div v-if="tmp.thirdMenu" class="col-xs-2 pull-right">   
                                        <span :class="nowInd==ind?'arrow-bottom':'arrow-right'"></span>
                                    </div>
                                </div>
                                
                                <!--三级菜单-->
                                <template v-if="tmp.thirdMenu">
                                    <ul v-show="nowInd==ind" class="col-xs-24">
                                        <li class="list-three row col-xs-24" v-for="(rmp,inde) in tmp.thirdMenu" :key="inde">
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

        <!-- 折叠侧边栏 -->
        <div v-show="!isShow" id="side-collapse" class="col-xs-4 pull-left" :style="{ width : isShow?'':'3.7%'}">
            <div class="side-top row">
                <div class="side-avatar pull-left"></div>
            </div>
            <ul class="col-xs-24 row">
                <template v-for="(item,index) in ListData">
                    <li class="list col-xs-24" :key="index" @click="toggle(index)" :class="nowIndex==index?'on':''">
                        <div class="list-icon">
                            <span class="li-icon"></span>
                        </div>
                    </li>

                    <ul class="list-col-ul col-xs-24" :key="index">
                        <li class="list-first" @click="toggle(index)" :style="{ display : nowIndex==index?'':'none'}" :key="index">
                            <span>{{item.ListName}}</span>    
                        </li>
                        <template v-if="item.secondaryMenu">
                            <ul v-show="nowIndex==index" :key="index" class="col-xs-24">
                                <li class="list-second"  v-for="(tmp,ind) in item.secondaryMenu" :key="ind" @click="toggleTwo(ind)">
                                    <span>{{tmp.sedName}}</span>
                                    <span v-if="tmp.thirdMenu" class="arrow" :class="nowInd==ind?'arrow-bottom':'arrow-right'"></span>
                                    <template v-if="tmp.thirdMenu">
                                        <ul v-show="nowInd==ind" class="col-xs-24">
                                            <li class="list-third row col-xs-24" v-for="(rmp,inde) in tmp.thirdMenu" :key="inde">
                                                <span>{{rmp.thrName}}</span>
                                            </li>
                                        </ul>
                                    </template>
                                </li>
                            </ul>
                        </template>
                    </ul>
                </template>
            </ul>
        </div>

    </div>
</template>  

<script>
    import { ListData } from './../../assets/js/list'
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
                ListData:ListData,
                statusTwo:false,
                nowIndex:-1,//一级菜单判断条件
                nowInd:-1,//二级菜单判断条件
            }
        },
        methods:{
            //一级菜单点击缩放方法
            toggle(index){
                if(this.nowIndex==index){
                    this.nowIndex = -1
                    // this.nowInd = -1
                }else{
                    this.nowIndex=index
                    this.nowInd = -1
                }     
            },
            //二级菜单点击缩放方法
            toggleTwo(ind){
                if(this.nowInd==ind){
                    this.nowInd = -1
                }else{
                    this.nowInd = ind
                }     
            }
        },
         computed:mapGetters([
            'isShow'
        ]),
        mounted:function(){
            console.log(this.isShow)
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
    .on 
        background-color #222D32
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
        transition: all .3s linear;
        .side-top
            padding 20px 16px 14px 9px
            width 260px
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
                    margin-left 9px
                    margin-bottom 0
        .list
            height 44px
            line-height 44px
            font-size 12px
            .list-icon
                margin-top 3px
                margin-left 1px  
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
            font-size 12px
            color #d1d1d1
            background-color #202a2f
        .list-three
            height 38px
            line-height 38px
            font-size 12px
            color #fff
            background #182125
            &:hover
                background-color #13191c
    #side-collapse
        background bgcolor
        position absolute
        top 46px
        bottom 0px
        color white
        z-index 999
        transition all .1s linear
        .side-top
            padding 20px 16px 14px 9px
            width 260px
            position relative
            .side-avatar
                width 38px
                height 40px
                background:url(../../assets/img/user.png) 0 0 no-repeat
                background-size 38px 40px
        .list
            height 44px
            line-height 44px
            width 100%
            .list-icon
                margin-top 1px
                margin-left 1px  
            &:hover
                background-color #222D32
            .li-icon
                display:inline-block
                width 15px
                height 15px
                background url(../../assets/img/settings.png) 0 0 no-repeat
                margin-left 16px
                margin-right 14px
        .list-col-ul
            width  241px
            color #000
            margin-left 100%
            margin-top -43px
            .list-first
                height 40px 
                background #29B0A3
                line-height 40px 
                font-size 12px
                color #fff
                >span
                    margin-left 18px
            .list-second
                background #222d32
                height 40px
                line-height 40px
                color #fff
                font-size 12px
                color #fff
                .arrow
                    display inline-block
                    margin-left 139px
                >span
                    margin-left 18px
            .list-third
                background #1E282D
                height 40px
                line-height 40px
                color #fff
                font-size 12px
                color #fff
                >span
                    margin-left 30px
                &:hover
                    background #1A2226
</style>
