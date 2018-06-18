<template>
  <li class="items  item-thumbnail-left">
    <a href="javascript:;">
      <img src="../../assets/img/guild-list01.jpg" alt="">
      <h3 class="title">这碗百年老汤牛肉面，300万都买不到秘方！</h3>
      <span class="username">江湖米其林</span>
      <span class="look">
        <i class="iconfont icon-chakan-copy">1840</i>
      </span>
    </a>
  </li>
</template>

<script>
    export default {
      name: "GuildArtical",
      props:{
        item:{
          type:Object,
          default:{}
        },
        // idx:{
        //   type:Number,
        //   default:0
        // }
      },
    }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/guild.scss";
</style>
