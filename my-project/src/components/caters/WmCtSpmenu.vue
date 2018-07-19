<template>
  <div class="menu">
    <div class="menuBox">
      <wm-ct-spmenulist :item="s" v-for="(s,t) in sp" key="t"></wm-ct-spmenulist>
      <!--<wm-ct-spmenulist></wm-ct-spmenulist>-->
    </div>
  </div>
</template>

<script scoped>
  import  WmCtSpmenulist from "./WmCtSpmenulist"
    export default {
      props:{
        sp:{
          type:Array,
          default:[]
        }
      },
        name: "WmCtSpmenu",
        components:{
          WmCtSpmenulist,
        }
    }
</script>

<style scoped>
  .menu {
    width: 100%;
    overflow-x: scroll;
    overflow: scroll;
  }
  ::-webkit-scrollbar{width: 0;}
  .menuBox{
    width:2rem;
    display:-webkit-flex;
  }
</style>
