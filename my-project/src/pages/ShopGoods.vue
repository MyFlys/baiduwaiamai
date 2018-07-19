<template>
  <div class="shopbody">
  <ShopGoodsHeader :lists="goodslist"></ShopGoodsHeader>
  <ShopGoodsContent :lists="goodslist"></ShopGoodsContent>
  <ShopFooter></ShopFooter>
  </div>
</template>

<script>
  import ShopGoodsHeader from "../components/shopgoods/ShopGoodsHeader";
  import ShopGoodsContent from "../components/shopgoods/ShopGoodsContent";
  import ShopFooter from "../components/shop/footer/ShopFooter";
    export default {
        name: "ShopGoods",
      // props:['goodslist'],
      components:{
        ShopGoodsHeader,
        ShopGoodsContent,
        ShopFooter
      },
      data(){
        return{
          goodslist:{},
          goodsIndex:'',
        }
      },
      methods:{
        fetchCartsDate(){
          fetch('http://localhost:8081/ju')
            .then(response=>response.json())
            .then(data=>{
              console.log(data);
              this.goodslist=data[this.goodsIndex];
              console.log(this.goodslist);
            })
        },
      },

      mounted(){
        this.goodsIndex = this.$route.params.id;

        this.fetchCartsDate();

      },
    }
</script>

<style scoped>
  .shopbody{
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
  }
</style>
