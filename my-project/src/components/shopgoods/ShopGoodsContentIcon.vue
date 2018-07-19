<template>
  <div class="ifon">
    <h2>{{list.title}}</h2>
    <div class="title">
      <span>月售53份</span>
      <span>好评率100%</span>
      <span>赞28</span>
    </div>
    <div class="tag">
      <a href="javascript:;">人气推荐</a>
      <a href="javascript:;">好评优选</a>
    </div>
    <div class="pic">
      <span>￥{{list.price}}</span>
      <a href="javascript:;">加入购物车</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopGoodsContentIcon",
        props:['list'],

    }
</script>

<style scoped>
  .ifon {
    padding: 0 0.09rem;
    margin-bottom: 0.14rem; }
 .ifon h2 {
    font-size: 0.16rem;
    line-height: 0.26rem; }
   .ifon .title {
    font-size: 0.1rem;
    margin: 0.09rem 0; }
 .ifon .title span {
    color: #999;
    margin-right: .05rem; }
   .ifon .tag {
    display: -webkit-flex; }
  .ifon .tag a {
    width: 0.6rem;
    height: 0.14rem;
    font-size: 0.1rem;
    line-height: 0.14rem;
    text-align: center;
    color: #e05b6e;
    border: 1px solid #e05b6e;
    border-radius: 2px;
    margin-right: .03rem; }
  .ifon .pic {
    display: -webkit-flex;
    justify-content: space-between;
    margin: 0.18rem 0; }
   .ifon .pic span {
    font-size: 0.16rem;
    line-height: 0.28rem; }
  .ifon .pic a {
    width: 0.9rem;
    height: 0.28rem;
    font-size: 0.12rem;
    color: #fff;
    line-height: 0.28rem;
    text-align: center;
    background: #ff294e;
    border-radius: 0.14rem; }
</style>
