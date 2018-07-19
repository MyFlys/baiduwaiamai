<template>
 
    <div class="nav">
       <index-section-navlist :nnnlist="p" v-for="(p,index) in nnlist" :key="index"></index-section-navlist>
    </div>
 
</template>

<script>
 import IndexSectionNavlist from "./IndexSectionNavlist"
 export default {
   props:{
     nnlist:{
       default:[]
     }
   },
   components: {
       IndexSectionNavlist
   }
 }
</script>

<style scoped>
   
  .nav {
    height: 1.64rem;
    background: #fff;
    display: -webkit-flex;
    flex-wrap: wrap;
    margin-bottom: 0.13rem; }
</style>
