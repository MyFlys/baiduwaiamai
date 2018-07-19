<template>
    <router-link to="/WmCaters">
        <img :src="nnnlist.img" alt="">
        <span>{{nnnlist.title}}</span>
    </router-link>
</template>

<script>
 export default {
   props:{
       nnnlist:{
           default:[]
       }
   },
   components: {

   }
 }
</script>

<style scoped>
  
       a {
      padding-top: 0.12rem;
      display: flex;
      flex-direction: column;
      width: 20%;
      text-align: center; }
        a img {
        width: 0.41rem;
        height: 0.42rem;
        margin: 0 auto; }
        a span {
        font-size: 0.13rem;
        color: #333;
        line-height: 0.26rem; }
</style>
