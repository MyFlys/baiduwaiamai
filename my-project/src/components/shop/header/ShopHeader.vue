<template>
  <header>
    <router-link to="/">
    <div class="header_left">
      <a href="javascript:;" @click="xiaoshi"><i class="iconfont icon-flow"></i></a>
    </div>
    </router-link>
    <div class="header_right">
      <a href="javascript:;"> <i class="iconfont icon-fangdajing"></i></a>
      <a href="javascript:;"> <i class="iconfont icon-pin"></i></a>
      <a href="javascript:;"> <i class="iconfont icon-klmshoucang"></i></a>
      <a href="javascript:;"> <i class="iconfont icon-share"></i></a>
    </div>
  </header>
</template>

<script>
    export default {
        name: "ShopHeader",
      methods:{
        xiaoshi:function(){
          // var _this=this;
          // setTimeout(function(){
          //   _this.$router.push({path:'../../../../pages/ShopGoods'});
          // },1000);
          this.$router.push({name:'Wmindex'});
        }
      }
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.44rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between; }
  header .iconfont {
    font-size: 0.24rem; }
  header div {
    height: 0.44rem;
    display: -webkit-flex; }
  header div a {
    height: 0.44rem;
    display: -webkit-flex;
    color: #333333;
    -webkit-align-items: center; }
  header .header_left a {
    margin-left: 0.2rem; }
  header .header_right {
    margin-right: 0.1rem; }
  header .header_right a {
    margin-right: 0.1rem; }
</style>
