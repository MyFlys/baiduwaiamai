<template>
  <div class="shopbody">
    <shop-header></shop-header>
    <shop-section></shop-section>
    <shop-footer></shop-footer>
  </div>
</template>

<script>

  import ShopHeader from "../components/shop/header/ShopHeader";
 import ShopSection from "../components/shop/section/shopsections/ShopSection";
  import ShopFooter from "../components/shop/footer/ShopFooter";
      export default {
        name: "shop",
      components:{
        ShopHeader,
        ShopSection,
        ShopFooter
      }

    }
</script>

<style scoped>
 .shopbody{
   width: 100%;
   height: 100%;
   display: -webkit-flex;
   flex-direction: column;
   /*position: relative;*/


 }
</style>
