<template>
  <section>
    <ShopGoodsContentBanner :list="lists"></ShopGoodsContentBanner>
    <ShopGoodsContentIcon :list="lists"></ShopGoodsContentIcon>
    <ShopGoodsContentDescribe :list="lists"></ShopGoodsContentDescribe>
    <ShopGoodsContentEvaluate :list="lists"></ShopGoodsContentEvaluate>
  </section>

</template>

<script>
  import ShopGoodsContentBanner from "./ShopGoodsContentBanner";
  import ShopGoodsContentIcon from "./ShopGoodsContentIcon";
  import ShopGoodsContentDescribe from "./ShopGoodsContentDescribe";
  import  ShopGoodsContentEvaluate from "./ShopGoodsContentEvaluate";
    export default {
        name: "ShopGoodsContent",
      props:["lists"],

      components:{
        ShopGoodsContentBanner,
        ShopGoodsContentIcon,
        ShopGoodsContentDescribe,
        ShopGoodsContentEvaluate
      }
    }
</script>

<style scoped>
  section {
    flex: 1;
    overflow: auto; }
</style>
