<template>
 <div>
     <div class="recommend">
        <div class="title">
            <h3>为你甄选</h3>
            <p><router-link to="/WmCaters">更多&nbsp;></router-link></p>
        </div>
        <div class="r-con">
            <index-section-recommendlist :rrrlist="p" v-for="(p,index) in rrlist" :key="index" ></index-section-recommendlist>
        </div>
    </div>
 </div>
</template>

<script>
import IndexSectionRecommendlist from "./IndexSectionRecommendlist.vue"
 export default {
   props: {
     rrlist: {
      default:[]
     }
   },
   components: {
       IndexSectionRecommendlist
   }
 }
</script>

<style scoped>
 .recommend .title {
    display: -webkit-flex;
    justify-content: space-between; }
    .recommend .title h3 {
      font-size: 0.18rem;
      line-height: 0.59rem;
      margin-left: 0.11rem;
      color: #333; }
    .recommend .title p {
      line-height: 0.59rem;
      font-size: 0.12rem;
      margin-right: 0.11rem; }
       .recommend .title p a {
        color: #9d9d9d; }
        .r-con {
    height: 1.88rem;
    display: -webkit-flex;
    flex-wrap: wrap; }

</style>
