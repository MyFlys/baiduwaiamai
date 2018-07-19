<template>
    <div>
      <footer>
          <router-link to="/WmIndex"><i class="iconfont icon-shouye active "></i><span class="active">首页</span></router-link>
          <router-link to="/guild"><i class="iconfont icon-zhinan"></i><span>指南</span></router-link>
          <router-link to="/carts"><i class="iconfont icon-dingdan"></i><span>购物车</span></router-link>
          <router-link to="/WmMysql"><i class="iconfont icon-xiaolian"></i><span>我的</span></router-link>
      </footer>
    </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
footer {
  height: 0.44rem;
  padding: 0.06rem 0;
  display: -webkit-flex; }
  footer a {
    width: 25%;
    text-align: center; }
    footer a .iconfont {
      display: block;
      font-size: 0.24rem;
      color: #c1c1c1;
      margin: 0.03rem 0; }
    footer .active ,footer a .active {
      color: #ff314f; }
    footer a span {
      display: block;
      font-size: 0.1rem;
      line-height: 0.15rem;
      color: #9b9b9b; }

</style>
