<template>
  <div class="guildSection">
    <h3 class="secTitle">推荐文章</h3>
    <ul class="goods"  v-for="(obj,index) in lists.GuildArticals
">
        <guild-artical :item="p" v-for="p in obj.sArticals" ></guild-artical>
        <li class="bItems">
          <a href="javascript:;">
            <img :src="obj.bArticals[0].bpic" alt="">
            <h3 class="bItemsTitle">{{obj.bArticals[0].btitle}}</h3>
            <span class="look">
                <span class="user">{{obj.bArticals[0].busername}}</span>
                <i class="iconfont icon-chakan-copy"></i>
                <span class="lookNum">{{obj.bArticals[0].bseeNum}}</span>
              </span>
          </a>
        </li>
    </ul>
  </div>
</template>

<script>
  import GuildArtical from "./GuildArtical"
    export default {
      name: "GuildArticalLists",
      // props:{"lists"},
      props:{
        lists:{
          type:Object,
          default:{}
        }
      },
      components:{
        GuildArtical
      },
    }
</script>

<style scoped lang="scss">
  %Title{
    height: 0.31rem;
    font-size:0.16rem;
    background: white;
    padding:0 0.11rem;
    line-height: 0.31rem;
  }
  .guildSection{
    flex:1;
    overflow-y:scroll;
    overflow-x:hidden;
    background: #fff;
    padding: 0 0.1rem;
    // ad block
    // padding-top: 0.9rem;

    // ad none
    padding-top:0;
    .secTitle{
      @extend %Title;
    }
    .goods{
      .bItems{
        margin-bottom:0.4rem;
        a{
          color:#000;
          img{
            width: 3.55rem;
            height: 1.98rem;
          }
          .bItemsTitle{
            font-size:0.16rem;
            line-height:0.24rem;
          }
          .look{
            display: -webkit-flex;
            align-items:center;
            .user{
              font-size:0.1rem;
              color:#000;
              margin-right:0.15rem;
            }
            .iconfont{
              font-size:0.1rem;
              color:#999999;

            }
            .lookNum{
              font-size:0.05rem;
              color:#999999;
            }
          }
        }
      }
    }
  }
</style>
