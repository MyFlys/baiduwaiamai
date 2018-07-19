<template>

    <section>
        <index-section-nav :nnlist="nlist"></index-section-nav>
        <index-section-theme></index-section-theme>
        <index-section-recommend :rrlist="rlist"></index-section-recommend> 
        <index-section-merchant :nrnrlist="nrlist" :hhlist="hlist"></index-section-merchant>
    </section>

</template>

<script>
import IndexSectionNav from "./IndexSectionNav"
import IndexSectionTheme from "./IndexSectionTheme"
import IndexSectionRecommend from "./IndexSectionRecommend"
import IndexSectionMerchant from "./IndexSectionMerchant"


 export default {
    props:{
        nlist:{
            default:[]
        },
        rlist:{
            default:[]
        },
        nrlist:{
            default:[]
        },
        hlist:{
            default:[]
        }
    }, 
    components: {
        IndexSectionNav,
        IndexSectionTheme,
        IndexSectionRecommend,
        IndexSectionMerchant
    },
    
 }
</script>

<style scoped>
    
    section {
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto; }
</style>
