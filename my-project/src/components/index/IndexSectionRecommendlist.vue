<template>
    <a href="javacript:;">
      <img :src="rrrlist.img" alt="">
      <span>{{ rrrlist.title}}</span>
    </a>
</template>

<script>
 export default {
   props:{
    rrrlist:{
      default:[]
    }
   },
   components: {

   }
 }
</script>

<style scoped>
/* .r-con {
    height: 1.88rem;
    display: -webkit-flex;
    flex-wrap: wrap; } */
    a {
      width: 25%;
      height: 0.81rem;
      text-align: center;
      margin-bottom: 0.26rem; }
     a img {
        display: block;
        width: 0.56rem;
        height: 0.56rem;
        margin: 0 auto; }
      a span {
        display: block;
        font-size: 0.11rem;
        color: #333;
        line-height: 0.25rem;
        padding: 0 0.14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto; }
    a:nth-child(n+5) {
      margin-bottom: 0; }
 
</style>
