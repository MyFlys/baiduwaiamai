<template>
  <div class="tbody">
    <wm-ct-top></wm-ct-top>
<div class="two">
  <wm-ct-content  :lists="rankproductlist"  :sps="menu"></wm-ct-content>
</div>
  </div>
</template>

<script>
  import  ShopCartsApis from  "../apis/ShopCartsApis"
//  import  SP from  "../apis/ShopCartsApis"
  import WmCtTop from "../components/caters/WmCtTop"
  import WmCtContent from "../components/caters/WmCtContent"
  export default {
      components:{
        WmCtTop,
        WmCtContent
      },
      data(){
        return{
          menu:[],
          rankproductlist:[]
        }
      },
      methods:{
        __initPage(){
          ShopCartsApis.getShopCartsList( (data)=>{
//            console.log(data)
            this.rankproductlist = data.lager;
            console.log(this.rankproductlist)
//            console.log((this.rankproductlist)[0])
//            console.log((this.rankproductlist).lager[0])
          } )
          ShopCartsApis.getSP((data) =>{
            this.menu = data;
//            console.log(this.menu)
          })
        }
      },
      created(){
        this.__initPage();
      }

    }
</script>

<style scoped>
.tbody{
  width:100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
/*.one{*/
  /*height:0.7rem;*/
  /*!*flex: 1;*!*/
/*}*/
.two{
  -webkit-flex: 1;
  overflow-y:scroll;
}

</style>
