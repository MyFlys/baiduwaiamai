<template>
  <header>
    <span @click="xiaoshi">x</span>
    <span>{{lists.title}}</span>
    <span><i class="iconfont icon-share"></i></span>
  </header>
</template>

<script>
    export default {
        name: "ShopGoodsHeader",
      props:["lists"],
      methods:{
        xiaoshi:function(){
          this.$router.push({name:'Shop'});
        },
      }
    }
</script>

<style scoped>
  header {
    width: 100%;
    height: 0.44rem;
    display: -webkit-flex;
    padding: 0 0.15rem;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box; }
  header span {
    display: block; }
  header span:nth-child(1) {
    font-size: 0.2rem; }
  header span:nth-child(2) {
    font-size: 0.15rem; }
  header span:nth-child(3) .iconfont {
    font-size: 0.2rem; }
</style>
