<template>

    <section>
      <SOne></SOne>
      <STwo></STwo>
      <SThree></SThree>
    </section>


</template>

<script>
  import SOne from "./SOne";
  import STwo from "./STwo";
  import SThree from "./SThree";

    export default {
        name: "ShopSection",
      components:{
        SOne,
        STwo,
        SThree
      }
    }
</script>

<style scoped>
  /*.divs{*/
    /**/
  /*}*/
  section {
    width: 100%;
    -webkit-flex:1;
    overflow-y:scroll;
    overflow-x:hidden;   }
</style>
