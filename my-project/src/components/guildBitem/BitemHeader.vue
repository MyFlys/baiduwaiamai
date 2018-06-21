<template>
  <div class="bItemsHeader">
    <div class="headTop">
      <div class="headLeft">
        <a href="javascript:;"><i class="iconfont icon-flow"></i></a>
        <span class="pages">1/6</span>
      </div>
    </div>

    <div class="userCon">
      <div class="userConL">
        <img src="img/bItems-user.jpg" alt="">
        <p class="userName">星月童话游世界<span>达人</span></p>
        <p class="userIntro">美妆、旅游、生活博主
        </p>
      </div>
      <div class="concern">+关注</div>
    </div>
  </div>
</template>

<script>

    export default {
      name: "BitemHeader",
      // props:{
      //   lists:{
      //     type:Object,
      //     default:{}
      //   }
      // },
    }
</script>

<style scoped lang="scss">
  .bItemsHeader{
    height: 0.9rem;
    padding:0 0.17rem;
    .headTop{
      width: 100%;
      height: 0.44rem;
      display: -webkit-flex;
      justify-content:flex-start;
      align-items:center;
      .headLeft{
        width: 1.85rem;
        display: -webkit-flex;
        justify-content:space-between;
        color:#fff;
        font-size:0.13rem;
        a{
          color:#fff;
          font-size:0.13rem;
      }
        .pages{
          display: block;
      }

    }
  }

    .userCon{
      display: -webkit-flex;
      justify-content:space-between;
      align-items:center;
      .userConL{
        width: 2.5rem;
        img{
          width: 0.35rem;
          height: 0.35rem;
          float:left;
          margin-right: 0.1rem;
      }
        .userName{
          font-size: 0.12rem;
          color:#fff;
          line-height: 0.2rem;
          span{
            display: inline-block;
            width: 0.35rem;
            height: 0.15rem;
            line-height: 0.15rem;
            background: #ff2d4b;
            color:#fff;
            text-align: center;
            font-size: 0.09rem;
            border-radius: 0.07rem;
        }
      }
        .userIntro{
          font-size: 0.1rem;
          color:#999999;
      }
    }
      .concern{
        width: 0.55rem;
        height: 0.23rem;
        line-height: 0.23rem;
        text-align: center;
        border:1px solid #fc3854;
        color:#fc3854;
        font-size: 0.15rem;
      }
    }
  }
</style>
