<template>
  <div class="section_three">
    <div class="section_three_one">
      <ul class="menu">
        <li class="active">点菜</li>
        <li>评价</li>
        <li>商家</li>
        <span class="shop_two">254</span>
      </ul>
    </div>
    <div class="section_three_two">
      <p class="show_p">
        网友推荐
      </p>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="(iteam,key) in goodslist" v-if="key<6" class="swiper-slide">
              <img :src="iteam.pic" @click="xiaoshi(key)"/>
            <h6>{{iteam.title}}</h6>
            <p><i class="iconfont icon-dianzan"></i><span>有3人点赞</span></p>
            <div class="sw_money">
              <div class="sw_money_left">
                <i>￥</i><span>{{iteam.price}}</span>
              </div>
              <div class="sw_money_right">
                <span @click="minNum(index)" class="num1"><i class="iconfont icon-jianshao"></i></span>
                <span class="num2">{{iteam.qal}}</span>
                <span><i @click="addNum(index)" class="iconfont icon-tianjia1"></i></span>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
    <div class="section_three_three">
      <p class="module_up">
        <i class="iconfont icon-rexiao"></i>热销
      </p>
      <div class="module_down">
        <div class="module_left">
          <ul>
            <li>外卖首看厨房环境</li>
            <li>河市寿司</li>
            <li>河市花布</li>
            <li>订餐须知</li>
            <li>饮品</li>
            <li>餐包</li>
          </ul>
        </div>
        <div class="module_right">
          <ul>
            <li v-for="(iteam,key) in goodslist" @click="xiaoshi(key)">
              <img :src="iteam.pic" alt="">
              <div class="shop_nav">
                <p>{{iteam.title}}</p>

                <p>
                  <span>月售243份</span>
                  <span>好评率98%</span>
                </p>
                <p>
                  <span>1-2人</span>
                  <span>(25粒)</span>
                  <span>/火炙三文鱼*1，夏天</span>

                </p>
                <p>
                  <span>人气推荐</span>
                  <span>好评优选</span>
                </p>
                <p>
                  <span>￥{{iteam.price}}</span>
                  <span><i class="iconfont icon-tianjia1"></i></span>
                </p>
              </div>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </div>
</template>


<script>

  // import Swiper from "../../../../../node_modules/swiper/dist/js/swiper.esm.bundle";
  import Swiper from 'swiper';
  export default {
    name: "SThree",
    data(){
      return{
        goodslist:{},
        // moList:{}
      }
    },

    methods: {
      xiaoshi: function (key) {
        this.$router.push({name: 'ShopGoods', params: {id: key}});
      },
      fetchCartsDate() {
        fetch('http://localhost:8081/ju')
          .then(response => response.json())
          .then(data => {
            this.goodslist = data;
            console.log(this.goodslist);
          })
      }
    },

      mounted(){
        this.fetchCartsDate();


      },
    updated(){
      // this.$nextTick(()=> {

        var mySwiper = new Swiper('.swiper-container', {
          slidesPerView: 3,
          // spaceBetween: 30,
          // freeMode: true
        })
      // })
  }
  }
</script>

<style scoped>

  /*@import "../../../../assets/scss/swiper-4.3.3.min.css";*/
  .section_three {
    width: 100%; }
   .section_three .section_three_one {
    width: 100%;
    height: 0.6rem; }
   .section_three .section_three_one .menu {
    width: 100%;
    height: 0.4rem;
    display: -webkit-flex;
    -webkit-align-content: center;
    position: relative; }
   .section_three .section_three_one .menu li {
    font-size: 0.2rem;
    line-height: 0.4rem;
    margin-left: 0.3rem; }
   .section_three .section_three_one .menu .shop_two {
    width: 0.2rem;
    height: 0.2rem;
    color: #fff;
    position: relative;
    font-size: 0.12rem;
    left: -0.65rem;
    top: 0.05rem;
    color: gray; }
   .section_three .section_three_one .menu .active {
    font-weight: bolder;
    border-bottom: 2px solid red; }
   .section_three .section_three_two {
    width: 100%;
    height: 2.6rem; }
   .section_three .section_three_two .show_p {
    width: 100%;
    height: 0.3rem;
    font-size: 0.18rem;
    color: #a6a6a6;
    line-height: 0.3rem; }
   .section_three .section_three_two .swiper-container {
    width: 100%;
    height: 2.3rem;
    display: -webkit-flex; }
   .section_three .section_three_two .swiper-container .swiper-wrapper {
    width: 100%;
    height: 2.3rem;
    display: -webkit-flex; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide {
    width: 33%;
    height: 2.3rem;
    background: #ffffff;
    margin-left: 2%; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide img {
    display: block;
    height: 1.2rem; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide h6 {
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    font-weight: 400;
    font-size: 0.14rem; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide p {
    height: .3rem;
    display: -webkit-flex; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide p span {
    display: inline-block;
    font-size: 0.1rem;
    color: #7d7d7d; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money {
    height: 0.5rem;
    display: -webkit-flex; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_left {
    height: 0.5rem;
    display: -webkit-flex;
    -webkit-align-items: center; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_left i {
    font-size: 0.1rem; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_left span {
    font-size: 0.18rem; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_right {
    margin-left: 0.1rem;
    height: 0.5rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_right span {
    display: inline-block;
    font-size: 0.2rem;
    line-height: 0.3rem;
    width: 30%; }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_right :nth-child(1) i {
    color: red;
    text-align: center;
    background: aliceblue;
    /*visibility: hidden;*/
   }
   .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_right :nth-child(2) {
    color: #000000;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    /*visibility: hidden; */
   }
  .section_three .section_three_two .swiper-container .swiper-wrapper .swiper-slide .sw_money .sw_money_right :nth-child(3) i {
    color: red;
    text-align: center; }
  .section_three .section_three_three {
    width: 100%; }
  .section_three .section_three_three .module_up {
    width: 100%;
    height: 0.4rem;
    font-size: 0.16rem;
    line-height: 0.4rem;
    padding-left: 0.15rem;
    font-weight: 600; }
  .section_three .section_three_three .module_up i {
    color: red; }
  .section_three .section_three_three .module_down {
    display: -webkit-flex;
    height: 4.5rem; }
  .section_three .section_three_three .module_down .module_left {
    width: 0.9rem;
    background: #fff;
    height: 4.5rem; }
  .section_three .section_three_three .module_down .module_left ul {
    width: 0.9rem;
    height: 4.5rem; }
  .section_three .section_three_three .module_down .module_left ul li {
    padding: 0 0.15rem;
    height: 0.6rem;
    flex-wrap: wrap;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: center;
    font-size: 0.14rem;
    color: #a6a6a6; }
  .section_three .section_three_three .module_down .module_right {
    width: 4rem;
    height: 4.5rem; }
  .section_three .section_three_three .module_down .module_right ul {
    height: 4.5rem;
    overflow: scroll; }
  .section_three .section_three_three .module_down .module_right ul li {
    height: 1.4rem;
    display: -webkit-flex; }
  .section_three .section_three_three .module_down .module_right ul li img {
    display: block;
    width: 1.4rem;
    border-radius: 0.1rem;
    padding-right: 0.05rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav {
    padding: 0 0.05rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(1) {
    height: 0.3rem;
    font-size: 0.16rem;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    font-weight: 600; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(2) {
    height: 0.2rem;
    display: -webkit-flex; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(2) span {
    display: block;
    font-size: 0.1rem;
    padding-left: 0.05rem;
    color: #cbcbcb; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(2) :nth-child(1) {
    height: 0.2rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(3) {
    height: 0.2rem;
    display: -webkit-flex; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(3) span {
    font-size: 0.1rem;
    padding-left: 0.05rem;
    color: #cbcbcb;
    display: block; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(3) :nth-child(1) {
    height: 0.2rem;
    font-size: 0.1rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(3) :nth-child(3) {
    width: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(4) {
    height: 0.2rem;
    display: -webkit-flex; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(4) span {
    display: block;
    height: 0.2rem;
    font-size: 0.14rem;
    line-height: 0.2rem;
    border: 1px solid #ff677d;
    color: red;
    background: #fff;
    border-radius: 0.1rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(4) :nth-child(2) {
    margin-left: 0.05rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(5) {
    height: 0.5rem;
    display: -webkit-flex;
    -webkit-align-items: center;
    -webkit-justify-content: space-between; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(5) span {
    display: inline-block; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(5) :nth-child(1) {
    font-size: 0.18rem; }
  .section_three .section_three_three .module_down .module_right ul li .shop_nav :nth-child(5) :nth-child(2) i {
    display: block;
    font-size: 0.22rem;
    color: #ff677d;
    padding-right: 0.05rem; }

</style>
