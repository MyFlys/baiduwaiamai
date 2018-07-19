<template>
 <div>
     <header>
        <div class="top">
            <ul class="left"> 
                <span>送至:</span>
                <li><a href="javascript:;">立人科技</a><i class="iconfont icon-xiala"></i></li>
            </ul>
            <router-link to="/carts"><a class="right" href="javascript:;"><i class="iconfont icon-gouwuche"></i></a></router-link>
        </div>
        <div class="sreach">
            <a href="javascript:;"><i class="iconfont icon-fangdajing"></i>5折单人餐</a>
        </div>
    </header>
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {
    //    name:"IndexHeader"
   }
 }
</script>

<style scoped>
header {
  height: 0.99rem;
  padding-bottom: 0.16rem;
  background: #fff; }
  header .top {
    line-height: 0.42rem;
    display: -webkit-flex;
    justify-content: space-between; }
    header .top .left {
      display: -webkit-flex;
      padding-left: 0.15rem;
      font-size: 0.16rem; }
      header .top .left span {
        display: inline-block;
        margin-right: 0.1rem;
        font-weight: 600;
        font-size: 0.16rem; }
      header .top .left a {
        color: #2c2c2c; }
      header .top .left li {
        display: -webkit-flex;
        align-items: center;
        font-weight: 600; }
        header .top .left li .iconfont {
          margin-left: 0.05rem;
          font-size: 0.05rem; }
    header .top .right {
      margin-right: 0.15rem; }
      header .top .right i {
        display: block;
        font-size: 0.21rem;
        color: #2c2c2c; }
  header .sreach {
    padding: 0.07rem 0.15rem;
    font-size: 0.15rem; }
    header .sreach a {
      display: -webkit-flex;
      align-items: center;
      width: 3.45rem;
      height: 0.4rem;
      color: #818181;
      line-height: 0.4rem;
      background: #f3f0f0;
      border-radius: 0.21rem; }
      header .sreach a .iconfont {
        font-size: 0.21rem;
        margin-left: 0.16rem;
        margin-right: 0.12rem; }
</style>
