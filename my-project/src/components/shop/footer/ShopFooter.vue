<template>
  <footer>
        <div class="foot">
            <p>满减优惠：满99减15，满298减23，满398减31（在购物车可查看）<a href="javascript:;">x</a></p>
            <div class="shopcart">
                <router-link to="/carts" class="icon-cart"><i class="iconfont icon-gouwuche"></i></router-link>
                <span >另需配送费10元</span>
                <span >80元起送</span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "ShopFooter",
    }
</script>

<style scoped>
  footer {
  margin: 0.15rem;
  position: fixed;
  left: 0;
  bottom: 0;
  }
  footer .foot {
    width: 3.45rem;
    height: 0.85rem;
    position: relative;
    background: #fef6c5;
    border-radius: 0.08rem 0.08rem 0.21rem 0.21rem; }
    footer .foot p {
      padding: 0.1rem;
      width: 3.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.13rem;
      color: #474218; }
      footer .foot p a {
        display: inline;
        font-size: 0.17rem;
        color: #ef900e;
        position: absolute;
        right: 0.1rem;
        bottom: 0.57rem; }
    footer .foot .shopcart {
      width: 3.45rem;
      height: 0.42rem;
      background: #3a3635;
      border-radius: 0.21rem;
      font-size: 0.13rem;
      color: #fff;
      line-height: 0.42rem;
      position: absolute;
      bottom: 0;
      left: 0; }
      footer .foot .shopcart .icon-cart {
        display: inline-block;
        width: 0.42rem;
        height: 0.42rem;
        text-align: center;
        border-radius: 0.21rem;
        background: #322e2d; }
        footer .foot .shopcart .icon-cart .iconfont {
          display: inline;
          font-size: 0.27rem;
          color: #fff;
          line-height: 0.42rem; }
          footer .foot .shopcart span:nth-of-type(2) {
        display: inline-block;
        height:0.42rem;
        line-height:0.42rem;
        float: right;
        margin-right: 0.2rem;}
      footer .foot .shopcart span:nth-of-type(3) {
        float: right;
        margin-right: 0.25rem; }

</style>
