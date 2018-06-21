<template>
  <div class="bItemsFooter">
    <div class="footL">
      <a href="javascript:;"><i class="iconfont icon-share"></i></a>
      <a href="javascript:;"><i class="iconfont icon-klmshoucang"></i></a>
      <a href="javascript:;"><i class="iconfont icon-dianzan"></i></a>
    </div>
    <a href="javascript:;" class="buy"><i class="iconfont icon-gouwuche1"></i><span>点外卖</span></a>
  </div>
</template>

<script>
    export default {
        name: "BitemFooter"
    }
</script>

<style scoped lang="scss">
  // footer
  .bItemsFooter{
    padding:0 0.15rem;
    height: 0.52rem;
    line-height: 0.52rem;
    display: -webkit-flex;
    align-items:center;
    justify-content:space-between;
    .footL{
      display: -webkit-flex;
      align-items:center;
      a{
        margin-right:0.4rem;
        color:#fff;
        font-size:0.24rem;
        i{
          display: inline-block;
        }
      }
    }
    .buy{
      width: 1rem;
      height: 0.4rem;
      font-size:0.15rem;
      color:#fff;
      display: -webkit-flex;
      align-items:center;
      justify-content:center;
      background: #ff2d4b;
      border-radius: 0.1rem;
      .icon-gouwuche1{
        margin-right:0.05rem;
      }

    }

  }
</style>
