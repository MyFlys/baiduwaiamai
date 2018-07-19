<template>
  <div class="header">
    <div class="headtop">
      <router-link to="/WmIndex"><i class="iconfont icon-flow"></i></router-link>
      <input type="text" placeholder="食街杯专享5折">
      <router-link to="/carts"><i class="iconfont icon-gouwuche1"></i></router-link>
    </div>
    <!--<ul class="headlist">-->
    <!--<li class="active">全部</li>-->
    <!--<li>快食简餐</li>-->
    <!--<li>地方菜</li>-->
    <!--<li>西式简餐</li>-->
    <!--<li>异国风味</li>-->
    <!--<li>中式正餐</li>-->
    <!--<li>烧烤海鲜</li>-->
    <!--<li>甜点饮品</li>-->
    <!--<li>水果生鲜</li>-->
    <!--<li>下午茶</li>-->
    <!--<li>鲜花蛋糕</li>-->
    <!--<li>超市购</li>-->
    <!--<li>夜宵</li>-->
    <!--<li>送药上门</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
    export default {
        name: "WmCtHeader"
    }
</script>

<style scoped>
  /*head 开始*/
  .header{
    /*height:0.27rem;*/
    /*display: flex;*/
  }
  .headtop{
    display: -webkit-flex;
    justify-content: space-between;
    /*flex-direction: column;*/
    margin:0.12rem 0.1rem 0rem;
    line-height: 0.27rem;
  }
  .headtop   input{
    width:2.67rem;
    height:0.27rem;
    border-radius: 0.07rem;
    outline: none;
    background:#f3f0f0;
    border:none;
    padding-left:0.1rem;
    /*display:block;*/
  }
  .headtop a{
    /*margin-top: 0.27rem;*/
    height:0.27rem;
    display: block;
  }
  .headtop a i{
    display: block;

  }
  /*.headlist{*/
    /*display: -webkit-flex;*/
    /*overflow-x:scroll;*/
    /*overflow-y: hidden;*/
    /*background: url("../../../static/img/c-headlist1.jpg") repeat-x bottom;*/
  /*}*/
  /*.headlist li{*/
    /*height:0.42rem;*/
    /*line-height:0.42rem;*/
    /*font-size:0.13rem;*/
    /*color:#333333;*/
    /*-webkit-flex-shrink:0;*/
    /*margin:0rem 0.12rem*/
  /*}*/
  /*.headlist .active{*/
    /*color:#ff2d4b;*/
    /*border-bottom:1px solid #ff2d4b;*/
  /*}*/
</style>
