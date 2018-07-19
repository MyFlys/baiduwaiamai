<template>
 <div>
     <div class="theme">
        <div class="t-left">
            <a href="javascript:;"><img src="../../../static/img/1.11.jpg" alt=""></a>
        </div>
        <div class="t-right">
            <a href="javascript:;"><img src="../../../static/img/1.12.jpg" alt=""></a>
            <a href="javascript:;"><img src="../../../static/img/1.13.jpg" alt=""></a>
            <a href="javascript:;"><img src="../../../static/img/1.14.jpg" alt=""></a>
            <a href="javascript:;"><img src="../../../static/img/1.15.jpg" alt=""></a>
        </div>
    </div>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
      .theme {
    display: -webkit-flex;
    margin: 0 0.1rem 0.19rem; }
     .theme .t-left {
      width: 1.39rem;
      height: 2.45rem; }
       .theme .t-left img {
        width: 1.39rem;
        height: 2.45rem; }
     .theme .t-right {
      display: -webkit-flex;
      flex-wrap: wrap;
      margin-left: 0.03rem;
      height: 2.45rem; }
       .theme .t-right a {
        display: inline-block;
        width: 1.04rem;
        height: 1.2rem; }
         .theme .t-right a img {
          width: 1.04rem;
          height: 1.2rem; }
       .theme .t-right a:nth-child(2n+1) {
        margin-right: 0.04rem;
        margin-bottom: 0.04rem; }
       .theme .t-right a:nth-child(2n) {
        margin-bottom: 0.04rem; }
       .theme .t-right a:nth-child(n+2) {
        vertical-align: top; }
</style>
