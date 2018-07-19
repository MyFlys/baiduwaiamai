<template>
 <div>
    <div class="merchant">
        <ul class="caption">
            <li class="active-one"><a href="javascript:;">附近商户</a></li>
            <li><a href="javascript:;">此刻最热</a></li>
        </ul>
        <div class="mh-con">
            <ul class="neardy">
                <ul class="ny-caption">
                    <li><a href="javascript:;">综合排序<i class="iconfont icon-xiala"></i></a></li>
                    <li><a href="javascript:;">销量最高</a></li>
                    <li><a href="javascript:;">距离最近</a></li>
                    <li><a href="javascript:;">筛选<i class="iconfont icon-xiala"></i></a></li>
                </ul>
              
                <index-section-merchant-nearbylist :nrnrnrlist="p" v-for="(p,index) in nrnrlist" :key="index" ></index-section-merchant-nearbylist>
              
            </ul>
            <ul class="neardy hot">
                <ul class="ny-caption">
                    <li><a href="javascript:;">综合排序<i class="iconfont icon-xiala"></i></a></li>
                    <li><a href="javascript:;">销量最高</a></li>
                    <li><a href="javascript:;">距离最近</a></li>
                    <li><a href="javascript:;">筛选<i class="iconfont icon-xiala"></i></a></li>
                </ul>
                <index-section-merchant-hotlist :hhhlist="p" v-for="(p,index) in hhlist" :key="index"></index-section-merchant-hotlist>
            </ul>
        </div>
    </div>
 </div>
</template>

<script>
 import IndexSectionMerchantNearbylist from "./IndexSectionMerchantNearbylist"
 import IndexSectionMerchantHotlist from "./IndexSectionMerchantHotlist"

 export default {
    props:{
        nrnrlist:{
            default:[]
        },
        hhlist:{
            default:[]
        }
    },

   components: {
       IndexSectionMerchantNearbylist,
       IndexSectionMerchantHotlist
   },
    // mounted(){
    //     console.log($)
    //     $('.hot').
    //     $('.caption li').on('cilck',function(){
    //         this.addclass("active-one")
    //     })
    // }
 }

</script>

<style scoped>
 .merchant .caption {
    margin: 0.08rem 0 0.11rem 0;
    display: -webkit-flex;
    justify-content: space-around; }
     .merchant .caption li {
      width: 50%;
      text-align: center;
      line-height: 0.47rem;
      font-size: 0.16rem;
      font-weight: 600;
      border-bottom: 1px solid #d8d4d4; }
      .merchant .caption .active-one{
          border-bottom: 1px solid #ff2d4b;}
         .merchant .caption .active-one a{
             color:#ff2d4b;}
       .merchant .caption li a {
        color: #333; }
   .merchant .mh-con .neardy .ny-caption {
    height: 0.41rem;
    display: -webkit-flex;
    justify-content: space-between; }
     .merchant .mh-con .neardy .ny-caption li {
      width: 25%;
      font-size: 0.13rem;
      line-height: 0.41rem;
      text-align: center; }
       .merchant .mh-con .neardy .ny-caption li a {
        display: block;
        color: #333; }
         .merchant .mh-con .neardy .ny-caption li a .iconfont {
          margin-left: 0.05rem;
          font-size: 0.05rem; }
          .merchant .mh-con .hot{
              display: none;}

</style>
