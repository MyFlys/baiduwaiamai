<template>
  <!--footer-->
  <div class ="guildFooter">
    <a href="javascript:;"><i class="iconfont icon-shouye"></i><span>首页</span></a>
    <a href="javascript:;" class="active"><i class="iconfont icon-zhinan"></i><span>指南</span></a>
    <a href="javascript:;"><i class="iconfont icon-dingdan"></i><span>订单</span></a>
    <a href="javascript:;"><i class="iconfont icon-xiaolian"></i><span>我的</span></a>
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
    height: 0.49em;
    background: white;
    display: -webkit-flex;
    justify-content:space-around;
    align-items:center;
    a{
      text-align: center;
      color:#c1c1c1;

      .iconfont{
        display:block;
        font-size: 0.24rem;
      }
      span{
        display: block;
        font-size: 0.09rem;
      }
    }
    .active{
      color:#ff314f;
    }
  }
</style>
