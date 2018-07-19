<template>
  <div class="rank">
    <wm-ct-ranktop></wm-ct-ranktop>
    <wm-ct-rankproductlist :list="lsts" :idx="index" v-for="(r,index) in lsts" key="index"></wm-ct-rankproductlist>
    <!--<wm-ct-rankproductlist></wm-ct-rankproductlist>-->
  </div>
</template>

<script>
  import  WmCtRanktop from "./WmCtRanktop"
  import  WmCtRankproductlist from "./WmCtRankproductlist"
  export default {
        props:{
          lsts:{
            type:Array,
            default:[]
          }
        },
//        data(){
//          return{
//            rankproductlist:{}
//          }
//        },
        name: "WmCtRank",
        components:{
          WmCtRanktop,
          WmCtRankproductlist
        }
    }
</script>

<style scoped >
  .rank{
    padding:0rem 0.15rem;
  }

</style>
