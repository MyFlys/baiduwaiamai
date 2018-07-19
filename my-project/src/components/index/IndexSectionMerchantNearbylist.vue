<template>


  <div class="neardy">
    <router-link to="/shop">
      <li class="food">
        <div class="ny-left">
          <img :src="nrnrnrlist.img" alt="">
        </div>
        <div class="ny-right">
          <p>
            <a href="javascript">品牌</a>
            {{nrnrnrlist.title}}
          </p>
          <p>
            <img :src="nrnrnrlist.star" alt="">
            {{nrnrnrlist.score}}<span>|</span>月售{{nrnrnrlist.sales}}份<span>{{nrnrnrlist.times}}</span>
          </p>
          <p>
            起送￥0<span>|</span>配送￥9<span>|</span>人均{{nrnrnrlist.consume}}<span>{{nrnrnrlist.space}}</span>
          </p>
          <p>
            <a href="javacript:;">特价</a><a href="javacript:;">发票</a>
          </p>
        </div>
      </li>
    </router-link>
  </div>


</template>

<script>
 export default {
   props:{
     nrnrnrlist:{
       type:Object
     }
   },
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped>
section .merchant .mh-con .neardy .food  {
    height: 0.87rem;
    display: -webkit-flex;
    padding: 0.2rem 0.11rem 0.14rem 0.15rem;
    border-bottom: 1px solid #e6e6e6; }
    section .merchant .mh-con .neardy .food  .ny-left {
      margin-right: 0.1rem; }
      section .merchant .mh-con .neardy .food  .ny-left img {
        width: 0.75rem;
        height: 0.55rem;
        vertical-align: top; }
    section .merchant .mh-con .neardy .food  .ny-right {
      width: 2.69rem; }
      section .merchant .mh-con .neardy .food  .ny-right p:nth-child(1) {
        line-height: 0.19rem;
        font-size: 0.15rem;
        font-weight: 600; 
        color:#333;}
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(1) a {
          display: inline-block;
          color: #fff;
          font-size: 0.1rem;
          width: 0.28rem;
          height: 0.15rem;
          line-height: 0.15rem;
          text-align: center;
          background: #ff6b12;
          border-radius: 2px; }
      section .merchant .mh-con .neardy .food  .ny-right p:nth-child(2) {
        line-height: 0.2rem;
        font-size: 0.11rem;
        color: #333; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(2) img {
          display: inline-block;
          width: 0.58rem;
          height: 0.2rem;
          vertical-align: middle; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(2) span:nth-of-type(1) {
          color: #e1e3e6;
          margin: 0 0.06rem; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(2) span:nth-of-type(2) {
          color: #888;
          float: right; }
      section .merchant .mh-con .neardy .food  .ny-right p:nth-child(3) {
        line-height: 0.2rem;
        font-size: 0.11rem;
        color: #333; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(3) span:nth-of-type(-n+2) {
          color: #e1e3e6;
          margin: 0 0.06rem; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(3) span:nth-of-type(3) {
          color: #888;
          float: right; }
      section .merchant .mh-con .neardy .food  .ny-right p:nth-child(4) {
        height: 0.27rem;
        display: -webkit-flex;
        align-items: center; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(4) a {
          display: inline-block;
          font-size: 0.1rem;
          width: 0.27rem;
          height: 0.15rem;
          line-height: 0.15rem;
          text-align: center; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(4) a:nth-child(1) {
          color: #ff4560;
          border: 1px solid #ff4560;
          margin-right: 0.06rem; }
        section .merchant .mh-con .neardy .food  .ny-right p:nth-child(4) a:nth-child(2) {
          color: #30c3c6;
          border: 1px solid #30c3c6; }

</style>
