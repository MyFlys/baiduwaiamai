<template>
  <div class="img">
    <img src="../../../static/img/c-img1.jpg" alt="">
    <img src="../../../static/img/c-img2.jpg" alt="">
  </div>
</template>

<script>
    export default {
        name: "WmCtImg"
    }
</script>

<style scoped>
  /*img 开始*/
  .img{
    margin:0.17rem 0.1rem 0.17rem;
    display:-webkit-flex;
    justify-content: space-between;
  }
  .img img{
    display: inline-block;
    width:1.74rem;
    height:0.77rem;
  }
</style>
