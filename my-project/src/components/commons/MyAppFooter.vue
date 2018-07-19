<template>
  <!--footer-->
  <div class ="guildFooter">
    <router-link to="/"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
    <router-link to="/guild" ><i class="iconfont icon-zhinan active"></i><span class="active">指南</span></router-link>
    <router-link to="/carts"><i class="iconfont icon-dingdan"></i><span>购物车</span></router-link>
    <router-link to="/WmMysql"><i class="iconfont icon-xiaolian"></i><span>我的</span></router-link>
  </div>
</template>

<script>
    export default {
        name: "MyAppFooter"
    }
</script>

<style scoped lang="scss">
  //footer
  .guildFooter{
    width: 100%;
    height: 0.44rem;
    padding: 0.06rem 0;
    display: -webkit-flex;
    a{
      width: 25%;
      text-align: center;
      .iconfont{
        display:block;
        font-size: 0.24rem;
        margin: 0.03rem 0;
        color:#c1c1c1;
      }
      span{
        display: block;
        font-size: 0.1rem;
        line-height: 0.15rem;
        font-size: 0.09rem;
        color: #9b9b9b;
      }
      .active{
        color:#ff314f;
      }
    }
    
  }
</style>
