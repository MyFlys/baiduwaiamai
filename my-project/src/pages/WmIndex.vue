<template>
 <div class="bigbox">
    <index-header></index-header>
    <index-section :nlist="navList" :rlist="recommendList" :nrlist="nearbytList" :hlist="hotList"></index-section>
    <index-footer></index-footer>
 </div>
</template>

<script>
  import IndexApis from "../apis/IndexApis"
  import IndexHeader from "../components/index/IndexHeader"
  import IndexSection from "../components/index/IndexSection"
  import IndexFooter from "../components/index/IndexFooter"
  export default {
    name:"WmIndex",
    data () {
      return {
            navList:[],
            recommendList:[],
            nearbytList:[],
            hotList:[]
      }
    },
    components: {
      IndexHeader,
      IndexSection,
      IndexFooter
    },
    methods:{
      __initPage(){
        IndexApis.getIndexSectionNav((data)=>{
            console.log(data)
            this.navList = data;

        })
        IndexApis.getIndexSectionRecommend((data)=>{
            console.log(data)
            this.recommendList = data;

        })
        IndexApis.getIndexSectionMerchantNearby((data)=>{
            console.log(data)
            this.nearbytList = data;

        })
        IndexApis.getIndexSectionMerchantHot((data)=>{
            console.log(data)
            this.hotList = data;

        })
      },
    },
    created(){
        this.__initPage();
        // this.__test()
      }
    // mounted(){
    //     console.log($)
    // }
 }
</script>

<style scoped>
  /* @import "../assets/css/index.css"; */
  .bigbox{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
</style>
