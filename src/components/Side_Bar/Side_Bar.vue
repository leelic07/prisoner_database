<template>
  <div id="side-bar" class="col-xs-4 pull-left">
    <div class="side-top">
        <div class="side-avatar pull-left"></div>
        <div class="side-right">
            <p class="">管理员</p>
            <p class="glyphicon glyphicon-map-marker pull-left"></p>
            <p class="side-right-bottom">长沙监狱</p>    
        </div>
    </div>
    <ul class="col-xs-24">
        
        <li class="list row" :class="isActive?'active':''" @click="toggle">
            <div class="col-xs-5">
                <span class="li-icon"></span>
            </div>
            <div class="col-xs-14 col-xs-offset-1">
                <span>刑罚执行</span>
            </div>
            <div class="col-xs-2 pull-right">   
                <span :class="isActive?'arrow-bottom':'arrow-right'"></span>
            </div>
        </li>
            <!-- 刑罚执行下拉列表 -->
            <ul v-show="status">
                <li class="list-two row">
                    <div class="col-xs-14 col-xs-offset-6">
                        <span>收监管理</span>
                    </div>
                </li>
                <li class="list-two row show" @click="toggleTwo">
                    <div class="col-xs-14 col-xs-offset-6">
                        <span>减刑假释</span>
                    </div>
                    <div class="col-xs-2 pull-right">   
                        <span :class="statusTwo?'arrow-bottom':'arrow-right'"></span>
                    </div>
                </li>
                    <!-- 减刑假释下拉列表 -->
                    <ul v-show="statusTwo">
                        <li class="list-three on row">
                            <div class="col-xs-14 col-xs-offset-8">
                                <span>刑罚变动</span>
                            </div>
                        </li>
                        <li class="list-three row">
                            <div class="col-xs-14 col-xs-offset-8">
                                <span>监区办理</span>
                            </div>
                        </li>
                        <li class="list-three row">
                            <div class="col-xs-14 col-xs-offset-8">
                                <span>其他处理</span>
                            </div>
                        </li>
                    </ul>

                <li class="list-two row">
                    <div class="col-xs-14 col-xs-offset-6">
                        <span>监外执行</span>
                    </div>
                </li>
                <li class="list-two row">
                    <div class="col-xs-14 col-xs-offset-6">
                        <span>出监管理</span>
                    </div>
                </li>
            </ul>

        <li class="list row">
            <div class="col-xs-5">
                <span class="li-icon"></span>
            </div>
            <div class="col-xs-14 col-xs-offset-1">
                <span>办公助理</span>
            </div>
            <div class="col-xs-2 pull-right">   
                <span class="arrow-right"></span>
            </div>
        </li>
        
        <li class="list row">
            <div class="col-xs-5">
                <span class="li-icon"></span>
            </div>
            <div class="col-xs-14 col-xs-offset-1">
                <span>档案管理</span>
            </div>
            <div class="col-xs-2 pull-right">   
                <span class="arrow-right"></span>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                status:false,
                isActive:false,
                statusTwo:false
            }
        },
        methods:{
            toggle(){
                this.status=!this.status
                this.isActive=!this.isActive
            },
            toggleTwo(){
                this.statusTwo=!this.statusTwo
            }
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
