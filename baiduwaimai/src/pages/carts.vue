<template>
<!-- <div class="app"> -->
  <div class="cartsBody">
     <cart-header :tn="productList.totalmin" @removenow="nowremove"></cart-header>
  <div class="box">
    <cart-nav></cart-nav>
    <comment :lists="obj" v-for="(obj,index) in productList.shops" :key="index" v-if="life" :tm="totalMoney" @totalall="total" :indexi="index" @formattotal="totalformat"></comment>
  </div>
  </div>

<!-- </div> -->
</template>
<script >
  import MyCartsApis from "../apis/MyCartsApis"
  import CartHeader from "../components/CartHeader"
  import CartNav from "../components/CartNav"
  import comment from "../components/comment"
  export default{
      components:{
        CartHeader,
        CartNav,
        comment
      },
      data(){
        return{
          totalMoney:0,
          totalNum:0,
          productList:{},
          life:false,
          removearr:[]
        }
      },
      methods:{
        totalformat(index){
          let total = 0;
          this.removearr.push(index);
          this.productList.shops.forEach((v,k)=>{
            this.removearr.forEach(m=>{
              let life = false;
              if(m != k){
                life = true;
                v.goods.forEach(n=>{
                 total += n.qul;
                })
              }
              if(life === false){
                total = 0;
              }
            })
          })
          // this.totalNum = total;
          this.$set(this.productList,"totalmin",total);
        },
        nowremove(){
          this.life = false;
          // this.totalNum = 0;
          this.$set(this.productList,"totalmin",0);
        },
        total(data){
          let tatal = 0;
          let total = 0;

          this.productList.shops[data].goods.forEach(v =>{
           tatal +=  parseInt(v.qul)*parseInt(v.price);
          })
          tatal = tatal + parseInt(this.productList.shops[data].packing) - 5;
          //每个总价格
          if(tatal >= 398){
            tatal = tatal-31;
          }else if(tatal >=298){
            tatal = tatal -23
          }else if(tatal >=99){
            tatal = tatal-15;
          }else if(tatal === (parseInt(this.productList.shops[data].packing) -5) ){
              tatal = 0;
          }
          this.$set(this.productList.shops[data],'minsum',tatal);
          //总数量
          // this.productList.shops.forEach((v,k)=>{
          //   console.log()
          //   this.removearr.forEach(m=>{
          //     if(m != k){
          //       v[k].goods.forEach(n=>{
          //         total += n.qul;
          //         console.log(n.qul);
          //       });
          //     }
          //   })
          // })
          this.productList.shops.forEach(v=>{
            v.goods.forEach(m=>{
             total += m.qul;
            })
          })
          // this.totalNum = total;
          this.$set(this.productList,"totalmin",total);
        },
        __initPage(){
          this.life=false;
          MyCartsApis.getMyCartsList((data)=>{
            this.life=true;
              this.productList = data;
              console.log(this.productList);
              this.total(0);
              this.total(1);
          })
        },
        /**
             * 增加商品的件数
             */
            // addQal:function (idx) {
            //     this.productList[idx].qal++;
            //     this.__counter(this.productList)
            // },
            // /**
            //  * 减少商品的件数
            //  */
            // oddQal:function (idx) {
            //     if(this.productList[idx].qal <=1){
            //         this.productList[idx].qal =1;
            //     }else{
            //         this.productList[idx].qal--;
            //         this.__counter(this.productList)
            //     }
            // },
            __counter:function (products) {
                this.totalNum = 0;
                this.totalMoney =0;
                products.forEach((val,idx)=>{
                    this.totalNum +=val.qal;
                    this.totalMoney += val.qal *val.price
                })
            },

      },
      created(){
       this. __initPage();
      }
  }
</script>
<style>
body{
  box-sizing: border-box;
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  width: 100%;
}
.cartsBody{
  width:100%;
  height:100%;
   display: -webkit-flex;
  flex-direction: column;
}
	.box{
    width:100%;
	  -webkit-flex: 1;
	  overflow-x: hidden;
	  overflow-y: scroll;
	}
</style>
