<template>
  <li>
    <img :src="item.img">
    <div class="liright">
      <div class="lirighttop">
        <h3>{{item.title}}</h3>
        <p>{{item.brand}}</p>
      </div>
      <p class="start">
        <span></span>
        {{item.sales}}
      </p>
      <div class="lirightbot">
        <p>{{item.qisong}}</p>
        <h3>{{item.time}}</h3>
      </div>
      <p>
        <i class="iconfont icon-dianzan"></i>
        {{item.dianzan}}
      </p>
      <div class="lirightbotbot">
        <span class="special" v-for="(t,index) in item.tejia">{{item.tejia[index]}}</span>
        <span class="invoice">{{item.fapiao}}</span>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
      props:{
        item:{
          type:Object,
          default:{}
        }
      },
      name: "CTproduct"
    }
</script>

<style scoped>
  .rankbotlist li{
    margin-top:0.2rem;
    display: -webkit-flex;
    justify-content: space-between;
  }
  .rankbotlist li img{
    width: 0.74rem;
    height:0.54rem;
    border:1px solid #e6e6e6;
    border-radius: 0.03rem;
  }
  .liright{
    width:2.6rem;
    border-bottom:1px solid #e6e6e6;
    display: -webkit-flex;
    flex-direction: column;
  }
  .lirighttop{
    overflow: hidden;
    /*margin-bottom: 0.05rem;*/
  }
  .lirighttop h3{
    float: left;
    color:#333333;
    font-size:0.15rem;
    width: 2.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .liright .lirighttop p{
    float: right;
    padding:0.03rem 0.03rem 0.02rem;
    color:#fff;
    font-size: 0.09rem;
    background: #ff6b12;

  }
  .start span{
    display: block;
    /*background: url("../../assets/img/start1.png");*/
  }
  .lirightbot{
    overflow: hidden;
  }
  .lirightbot p{
    float: left;
  }
  .lirightbot h3{
    float: right;
    color:#333333;
    font-size:0.1rem;
  }
  .lirightbot span{
    color:#e5e5e5;
    font-size:0.1rem;
  }
  .liright p{
    color:#333333;
    font-size:0.11rem;
    margin-bottom: 0.05rem;

  }
  .lirightbotbot{
    margin-bottom: 0.15rem;
    /*display: block;*/
    /*line-height: 0.5rem;*/
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .special{
    border:1px solid #ffabb7;
    padding:0.02rem;
    color:#ff2d4b;
    font-size:0.1rem;
    border-radius: 2px;
    /*display: inline-block;*/
    margin:0rem 0.05rem 0.05rem 0rem;
    display: block;
  }
  .invoice{
    display: inline-block;
    border:1px solid #ace7e8;
    padding:0.02rem;
    color:#2fc3c6;
    font-size:0.1rem;
    border-radius: 2px;
    margin-bottom:0.03rem;
  }
  .rankimg{
    margin:0.11rem 0rem;
  }
  .rankimg img{
    border-radius: 0.04rem;
    width: 3.44rem;
    height:1.38rem;
  }
</style>
