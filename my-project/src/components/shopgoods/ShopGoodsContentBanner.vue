<template>
    <div class="banner">
      <img :src="list.pic" alt="">

    </div>
</template>

<script>
    export default {
        name: "ShopGoodsContentBanner",
         props:["list"],

    }
</script>

<style scoped>
 .banner {
    height: 2.5rem;

    background-size:cover; }
  .banner img{
    width:3.75rem;
    height:2.5rem;
  }
</style>
