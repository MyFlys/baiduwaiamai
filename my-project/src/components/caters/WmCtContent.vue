<template>
    <!--<div class="content">-->
  <div>
    <wm-ct-img></wm-ct-img>
    <wm-ct-sp :ss="sps"></wm-ct-sp>
    <wm-ct-rank :lsts="lists"></wm-ct-rank>
  </div>

    <!--</div>-->
</template>

<script type="text/ecmascript-6">
    import WmCtImg from "./WmCtImg.vue";
    import WmCtSp from "./WmCtSp.vue";
    import WmCtRank from "./WmCtRank.vue";

    export default {
      props:{
        lists:{
          type:Array,
          default:[]
        },
        sps:{
          type:Array,
          default:[]
        }
      },
      components: {
      WmCtRank,
      WmCtSp,
      WmCtImg}}
</script>

<style scoped>
/*.content{*/
  /*flex: 1;*/
/*}*/
</style>
