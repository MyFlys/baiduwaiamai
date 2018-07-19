<template>
  <div class="describe">
    <dl>
      <dt>商品描述</dt>
      <dd>{{list.describe}}</dd>
    </dl>
  </div>
</template>

<script>
    export default {
        name: "ShopGoodsContentDescribe",
        props:['list'],


    }
</script>

<style scoped>
 .describe {
    padding: 0 0.09rem; }
  .describe dl {
    margin-bottom: 0.28rem; }
  .describe dl dt {
    font-size: 0.18rem;
    line-height: 0.42rem;
    margin-bottom: 0.06rem; }
 .describe dl dd {
    font-size: 0.12rem;
    color: #999;
    line-height: 0.21rem; }
</style>
