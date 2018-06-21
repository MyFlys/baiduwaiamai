<template>
  <!-- header -->
  <div class="guildHeader">
    <div class="top">
      <div class="topRight">
        <h3>指南</h3>
        <div class="topRightIcon">
          <a href="javascript:;" ><i class="iconfont icon-rili"></i></a>
          <a href="javascript:;" ><i class="iconfont icon-klmshoucang"></i></a>
        </div>
      </div>
    </div>
    <div class="ad">
      <img src="img/guild-zhaji.jpg" alt="" class="adImg">
      <div class="detail">
        <div class="date">
          <p class="day">14</p>
          <p class="bg"></p>
          <div class="yearMonth">
            <p class="year">2018</p>
            <p class="month">JUN</p>
          </div>
        </div>
        <h4 class="detailTitle"></h4>
        <p class="detailCon">
          夜宵点上一大份炸鸡再配上啤酒，看着喜欢的剧，满足感爆棚啊！
        </p>
        <div class="detailUser">
          <div class="userLeft">
            <img src="img/guild-head.jpg" alt="" class="headImg">
            <div class="name">眼角笑意</div>
          </div>
          <div class="userRight">
            <a href="javascript:;"><i class="iconfont icon-iconfontcolor89"></i></a>
          </div>

        </div>

      </div>
    </div>
    <h3 class="headerTitle">推荐文章</h3>
  </div>
</template>

<script>
  export default {
      // name: "GuildHeader"
  }
</script>

<style scoped lang="scss">
  i{
    display: block;
  }
  // header
  .guildHeader{
    /*height: 4.27rem;*/

    // ad block
    // height: 3.5rem;

    // ad none
    height: 0.44rem;
    // background: -webkit-linear-gradient(top,#e3e6ef,#f8f9fd,#f5f6fa,#f8f9fb,#fff);
    .top{
      height: 0.44rem;
      background: white;
      display: -webkit-flex;
      justify-content: flex-end;
      padding:0 0.16rem;
      // ad block
      // background:transparent;

      // ad none
      background: #fff;


      .topRight{
        width: 1.88rem;
        display: -webkit-flex;
        justify-content:space-between;
        align-items:center;

        h3{
          font-size:0.17rem;
          font-style: normal;
        }
        .topRightIcon{
          display: -webkit-flex;
          justify-content:space-between;
          align-items:center;
          a{
            color:black;
            .iconfont{
              font-size:0.24rem;
            }
            .icon-rili{
              margin-right:0.2rem;
            }
          }
        }

      }
    }
    .ad{
      display: none;
      .adImg{
        height: 2.35rem;
      }
      .detail{
        width: 3.55rem;
        height: 1.43rem;
        background: rgba(255,255,255,.8);
        margin:0 auto;
        border-radius: 0.1rem;
        position: relative;
        box-shadow: 5px 5px 10px #ccc;
        .date{
          width: 1.05rem;
          height: 0.4rem;
          background: #000;
          border-radius:0.05rem;
          position:absolute;
          left:0.2rem;
          top: -0.19rem;
          display: -webkit-flex;
          justify-content:space-around;
          align-items:center;
          color:#fff;
          .day{
            font-size:0.3rem;
            font-weight:bold;
          }
          .bg{
            width: 0.01rem;
            height: 0.18rem;
            background: #fff;
          }
          .yearMonth{
            p{
              font-size:0.1rem;
            }
          }

        }
        .detailTitle{
          padding-top:0.2rem;
          height: 0.45rem;
        }
        .detailCon{
          font-size:0.14rem;
          line-height:0.2rem;
          color:#6e6e6e;
          padding: 0 0.2rem ;
        }
        .detailUser{
          padding: 0.05rem 0.2rem ;
          display: -webkit-flex;
          justify-content: space-between;
          align-items:center;
          .userLeft{
            display: -webkit-flex;
            .headImg{
              width: 0.22rem;
              height: 0.22rem;
            }
            .name{
              font-size:0.1rem;
              color:#5f5f5f;
              padding-left:0.1rem;
            }
          }
          .userRight{
            a{
              color:#e5e5e5;
              .iconfont{
                font-size:0.25rem;

              }
            }
          }
        }
      }
    }
    .headerTitle{
      height: 0.31rem;
      font-size:0.16rem;
      background: white;
      padding:0 0.11rem;
      line-height: 0.31rem;
      display: none;
    }
  }
</style>
