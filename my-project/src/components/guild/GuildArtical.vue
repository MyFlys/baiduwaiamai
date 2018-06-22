<template>
    <li class="items ">
      <!--<router-link to="/bitem">-->
      <a href="javascript:;">
        <img :src="item.pic" alt="" >
        <h3 class="title">{{item.title}}</h3>
        <span class="username">{{item.username}}</span>
        <span class="look">
        <i class="iconfont icon-chakan-copy">{{item.seeNum}}</i>
      </span>
      </a>
      <!--</router-link>-->
    </li>
</template>

<script>
    export default {
      name: "GuildArtical",
      props:{
        item:{
          default:[]
        }
      },
      methods:{
        // __test(){console.log($('.title'))}
        // __show(){
        //
        // }
      },
      created(){
        // this.__test()
        // this.__show()
      }
    }
</script>

<style scoped lang="scss">
  .items{
    // display: -webkit-flex;
    margin-bottom: 0.2rem;
    a{
      color:#000;
      img{
        width: 1.3rem;
        height: 0.85rem;
        float:left;
        margin-right:0.1rem;
      }
      span{
        display: block;
      }
      .title{
        font-size:0.15rem;
        line-height: 0.24rem;
        height: 0.48rem;
      }
      .username{
        font-size: 0.1rem;
      }
      .look{
        font-size:0.1rem;
        color:#999999;
        display: -webkit-flex;
      }
    }

  }
</style>
