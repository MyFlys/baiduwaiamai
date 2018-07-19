<template>
  <div class="evaluate">
    <dl>
      <dt>商品评价</dt>
      <dd>
        <div class="eva-left">
          <img src="../../assets/img/icon.jpg" alt="">
        </div>
        <div class="eva-right">
          <p class="tel">{{list.call}}</p>
          <p class="data">2018-03-28</p>
          <p class="shop">商品<img src="../../assets/img/star.jpg" alt=""></p>
          <p class="assess">非常好#{{list.title}}#</p>
          <p class="Reply">店家回复{{list.reply}}。</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
    export default {
        name: "ShopGoodsContentEvaluate",
      props:["list"],

    }
</script>

<style scoped>
 .evaluate {
    padding: 0 0.09rem; }
  .evaluate dl dt {
    font-size: 0.18rem;
    line-height: 0.41rem;
    margin-bottom: 0.12rem; }
   .evaluate dl dd {
    display: -webkit-flex;
    margin-bottom: 0.13rem;
    border-bottom: 1px solid #f5f5f5; }
 .evaluate dl dd .eva-left {
    width: 0.35rem;
    height: 0.35rem;
    margin-right: 0.06rem; }
.evaluate dl dd .eva-left img {
    width: 0.35rem;
    height: 0.35rem; }
 .evaluate dl dd .eva-right .tel {
    font-size: 0.14rem;
    line-height: 0.19rem; }
   .evaluate dl dd .eva-right .data {
    font-size: 0.12rem;
    line-height: 0.18rem;
    color: #999; }
   .evaluate dl dd .eva-right .shop {
    font-size: 0.12rem;
    line-height: 0.31rem;
    color: #999; }
   .evaluate dl dd .eva-right .shop img {
    display: inline-block;
    width: 0.59rem;
    height: 0.2rem;
    vertical-align: middle; }
   .evaluate dl dd .eva-right .assess {
    font-size: 0.14em;
    line-height: 0.19rem;
    color: #333;
    margin-bottom: 0.16rem; }
 .evaluate dl dd .eva-right .Reply {
    padding: 0.06rem 0.12rem;
    background: #f5f5f5;
    color: #333;
    font-size: 0.12rem;
    line-height: 0.25rem; }
</style>
