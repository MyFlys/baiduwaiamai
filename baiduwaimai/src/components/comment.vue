<template>
  <div v-if="life">
    <ul>
      <div class="tittle">
        <p>
          <i :class="[flag ? one: two]" @click="changicon"></i>
          <span>{{lists.shopName}}</span>
          <i class="iconfont icon-jianyou"></i>
        </p>
        <span class="span-one">完成</span>
      </div>
          <!-- <con-tent v-for="p in cartdata"></con-tent> -->
          <con-tent :lilist="obj" v-for="(obj,index) in lists.goods" :key="index" :keyi="index" @sadd="addQal" @ssub="oddQal" @changequl="cqul" :goodlife="flag" @changgood="goodlifechange"></con-tent>
        
      <div class="li-two">
        <p>包装费</p>
        <span>{{lists.packing}}￥</span>
      </div>
      <div class="li-three">
        <div class="threea">
          <p>立减优惠</p>
          <span>-￥5</span>
        </div>
        <div class="discount">
          <span>满99减15</span>
          <span>满298减23</span>
          <span>满398减31</span>
          <span>领5元券</span>
        </div>
      </div>
      <div class="li-four">
        <p>总计</p>
        <span>{{lists.minsum}}￥</span>
        <a href="javascript:;" @click="removeshop">全部删除</a>
      </div>
    </ul>
  </div>
</template>

<script>
    import ConTent from "./ConTent"
    export default {
      // name: "commen",
      data(){
        return {
          life:true,
          one:"iconfont icon-checked",
          two:"iconfont icon-kuang",
          flag:true
        }
      },
     props:['lists','tm',"indexi"],
      methods:{
        goodlifechange(life){
          // if(life === false){
          //   this.flag = false;
          // }else{
          //   this.flag = true;
          // }
        },
        changicon(){
          if(this.flag===true){
            this.flag =false;
            this.$set(this.lists,"shopChecked",false);
          }else{
            this.flag =true;
            this.$set(this.lists,"shopChecked",true);
          }
          if(this.lists.shopChecked === false){
            this.lists.goods.forEach(v=>{
             this.$set(v,"goodChecked",false);
            });
          }
        },
        cqul(idx){
          this.lists.goods[idx].qul = 0;
          this.$emit("totalall",this.indexi);
          console.log(this.lists.minsum);
          if(this.lists.minsum == 0){
            this.life = false;
          }
        },
        removeshop(){
          this.life =false;
          this.$emit("formattotal",this.indexi);
        },
         oddQal:function (idx,val) {
                val++;
                // this.lists.goods[idx].qul++;
                this.$set(this.lists.goods[idx],"qul",val);
                // this.__counter(this.lists)
                this.$emit("totalall",this.indexi);
            },
            /**
             * 减少商品的件数
             */
            addQal:function (idx,val) {
              val--;
                if(this.lists.goods[idx].qul <=1){
                    this.$set(this.lists.goods[idx],"qul",1);
                }else{
                    this.$set(this.lists.goods[idx],"qul",val);
                    // this.__counter(this.lists)
                    this.$emit('totalall',this.indexi)
                }
            },  
        },
    //    created(){
    // ;
    //   },
      // data(){
      //   return{
        
      //   }
      // },
       components:{
        ConTent
      }
    }
</script>

<style scoped>
  ul{
    border-bottom: 1px solid #cccccc；
  }
  /*tittle*/
  ul .tittle{
    margin-top: 0.28rem;
    line-height: 0.27rem;
    height: 0.27rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
  }
  .tittle p{
    height: 0.27rem;
    -webkit-align-items: center;
    display: -webkit-flex;
  }
  .tittle p span{
      color: #333333;
      font-size: 0.15rem;
      font-weight: 600;
  }
  .tittle p .icon-checked{
      font-size: 0.15rem;
      color: red;
      margin-right: 0.10rem;
  }
  .tittle p .icon-kuang{
      font-size: 0.15rem;
      color: #cccccc;
      margin-right: 0.10rem;
  }
  .tittle p .icon-jianyou{
      font-size: 0.11rem;
      color: #aeaeae;
      margin-left: 0.19rem;
      margin-top: 0.05rem;
  }
   .tittle .span-one{
          font-size:0.15rem;
          color: #ff2d4b;
        }
  /*li-two*/
  ul .li-two{
    margin-left: 0.25rem;
    margin-bottom: 0.16rem;
    display: -webkit-flex;
    -webkit-justify-content:space-between;
  }
  ul .li-two p{
    font-size: 0.13rem;
  }
   ul .li-two span{
    font-size: 0.13rem;
    color: #333333;
    font-weight: 600;
  }
  /*li-three*/
  ul .li-three{
    margin-left: 0.25rem;
    margin-bottom: 0.22rem;
  }
  ul .li-three .threea{
    margin-bottom: 0.16rem;
    display: -webkit-flex;
    -webkit-justify-content:space-between;
  }
  ul .li-three .threea p{
    font-size: 0.13rem;
  }
  ul .li-three .threea span{
    font-size: 0.13rem;
    color: #333333;
    font-weight: 600;
  }
  ul .li-three .discount{
    display: -webkit-flex;
  }
  ul .li-three .discount span{
    display: block;
    font-size: 0.12rem;
    color: #ff4963;
    padding: 0.05rem;
    border: 1px solid #ff4963;
    margin-right: 0.13rem;
  }
  /*li-four*/
  ul .li-four{
    margin-bottom: 0.25rem;
    display: -webkit-flex;
    -webkit-justify-content: flex-end;
    -webkit-align-items: center;
 }
 ul .li-four p{
    font-size: 0.13rem;
    color: #5c5c5c;
    margin-right: 0.04rem;
 }
 ul .li-four span{
    color: #ff2d4b;
    font-size: 0.13rem;
    font-weight: 600;
    margin-right: 0.17rem;
 }
 ul .li-four a{
  display: block;
  font-size: 0.13rem;
  color: white;
  padding: 0.05rem;
  background: #ff2d4b;
}
</style>