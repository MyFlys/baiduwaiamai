<template>
  <ul class="rankbotlist" >
    <wm-ct-rankproduct :item="p" v-for="(p ,s) in list[idx].date" key="s"></wm-ct-rankproduct>
    <!--<wm-ct-rankproduct></wm-ct-rankproduct>-->
    <div :item="i" v-for="i in list[idx].img" class="rankimg">
      <img :src="i.src">
    </div>
    <!--<wm-ct-rankproduct :item="p" v-for="p in list.date"></wm-ct-rankproduct>-->

    <!--<wm-ct-rankproduct :item="p" v-for="p in list"></wm-ct-rankproduct>-->
  </ul>
</template>

<script>
  import  WmCtRankproduct from "./WmCtRankproduct"
    export default {
      props:{
        list:{
          type:Array,
          default:[]
        },
        idx:{
          type:Number,
          default:0
        }
      },
      data(){
        return{
          rankproductlist:[]
        }
      },
//      console.log(rankproductlist)

  components:{
         WmCtRankproduct
      }
    }
</script>

<style scoped>
  .rankimg{
    margin:0.11rem 0rem;
  }
  .rankimg img{
    border-radius: 0.04rem;
    width: 3.44rem;
    height:1.38rem;
  }
</style>
