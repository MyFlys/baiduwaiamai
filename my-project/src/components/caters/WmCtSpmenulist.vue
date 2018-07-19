<template>
    <div class="menuList">
      <img :src="item.img">
      <h3>{{item.title}}</h3>
      <p >{{item.jieshao}}</p>
      <span>￥{{item.price}}</span>
    </div>

</template>

<script scoped>
    export default {
      props:{
        item:{
          type:Object,
          default:{}
        }
      },
        name: "WmCtSpmenulist"
    }
</script>

<style scoped>
  .menuList{
    width: 1rem;
    /*height: 2rem;*/
    margin-right: 0.1em;
    -webkit-flex-shrink:0;
    /*margin-right:0.1rem;*/
  }
  .menuList img{
    width: 1rem;
    height:1rem;
    border:1px solid #e5e5e3;

  }
  .menuList h3{
    margin-top:0.08rem;
    font-size:0.13rem;
    color:#333333;
    line-height: 0.23rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;

  }
  .menuList p{
    font-size: 0.11rem;
    line-height: 0.2rem;
    color:#999999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .menuList span{
    font-size:0.09rem;
    color:#ff2d4b;
    line-height: 0.2rem;
    display: block;
  }
</style>
