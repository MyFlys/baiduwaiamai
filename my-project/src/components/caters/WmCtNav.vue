<template>
  <div class="nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">全部</div>
        <div class="swiper-slide">快食简餐</div>
        <div class="swiper-slide">地方菜</div>
        <div class="swiper-slide">西式简餐</div>
        <div class="swiper-slide">异国风味</div>
        <div class="swiper-slide">中式正餐</div>
        <div class="swiper-slide">烧烤海鲜</div>
        <div class="swiper-slide">甜点饮品</div>
        <div class="swiper-slide">水果生鲜</div>
        <div class="swiper-slide">下午茶</div>
        <div class="swiper-slide">鲜花蛋糕</div>
        <div class="swiper-slide">超市购</div>
        <div class="swiper-slide">夜宵</div>
        <div class="swiper-slide">送药上门</div>
      </div>
    </div>
  </div>
</template>

<script>
   import Swiper from 'swiper';
    export default {
        name: "WmCtNav",
      mounted(){
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
        });
      }
    }
</script>

<style scoped >
  .swiper-container {
    width: 100%;
    height: 0.42rem;
    display: -webkit-flex;
    /*overflow-x:scroll;*/
    /*overflow-y: hidden;*/
    background: url("../../../static/img/c-headlist1.jpg") repeat-x bottom;
  }
  .swiper-slide {
    height: 0.42rem;
    line-height: 0.42rem;
    font-size: 0.13rem;
    color: #333333;
    -webkit-flex-shrink: 0;
    margin: 0rem 0.12rem;

    text-align: center;
  }
  /*font-size: 0.13rem;*/
  /*background: #fff;*/
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display: -webkit-flex;*/
  /*display: flex;*/
  /*-webkit-box-pack: center;*/
  /*-ms-flex-pack: center;*/
  /*-webkit-justify-content: center;*/
  /*justify-content: center;*/
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  /*-webkit-align-items: center;*/
  /*align-items: center;*/
</style>
