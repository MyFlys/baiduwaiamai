<template>
  <div class="selectpackage">
    <wm-ct-sptop></wm-ct-sptop>
    <wm-ct-spmenu :sp="ss"></wm-ct-spmenu>
  </div>
</template>

<script scoped>
  import  WmCtSptop from "./WmCtSptop"
  import  WmCtSpmenu from "./WmCtSpmenu"
    export default {
      props:{
        ss:{
          type:Array,
          default:[]
        }
      },
//      data(){
//        return{
//          sps:[],
////          console.log(menu)
//        }
//      },
        name: "WmCtSp",
      components:{
        WmCtSptop,
        WmCtSpmenu
      }
    }
</script>

<style scoped>
  /*selectpackage 开始*/
  .selectpackage{
    margin:0rem 0.1rem;
    display: block;
  }



  /*selectpackage结束*/

</style>
