<template>
  <router-link to="/guild" >
    <div class="bItemsSection">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lists.guildSwiper" key="index">
              <img :src="item.pic" alt="">
              <div class="imgIntro">
                <p>{{item.title}}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
  import Swiper from 'swiper';
    export default {
      name: "BitemSection",
      props:["lists"],
      methods:{

      },
      updated(){
        var mySwiper = new Swiper ('.swiper-container', {

        })
      }
    }
</script>

<style scoped lang="scss">

  // section
  .bItemsSection{
  .swiper-container{
  .swiper-wrapper{
  .swiper-slide{
  img{
    width:100%;
    height: 2.81rem;
    margin:0.8rem 0;
  }
  .imgIntro{
    padding:0 0.15rem;
    color:#fff;
    font-size:0.1rem;
    height:0.8rem;
    position:relative;
    p{
      line-height:0.19rem;
      position:absolute;
      bottom:0px;
      padding:0px;
      margin:0px;
    }
  }

  }
  }
  }

  }
</style>
