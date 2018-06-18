<template>
  <div class="guildSection">
    <h3 class="secTitle">推荐文章</h3>
    <ul class="goods">
      <guild-artical :item="p" v-for="p in lists" :key="item.id"></guild-artical>
    </ul>
  </div>
</template>

<script>
  import GuildArtical from "./GuildArtical"
    export default {
      name: "GuildArticalLists",
      props:{
        lists:{
          type:Array,
          default:[]
        }
      },
      components:{
        GuildArtical
      }
    }
</script>

<style scoped lang="scss">
  @import "../../assets/scss/guild.scss";
</style>
