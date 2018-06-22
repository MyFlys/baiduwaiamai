<template>
  <router-link to="/guild" >
    <div class="bItemsSection">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in lists[indexitem]">
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
      // data(){
      //   return {
      //     index:"",
      //     listss:{}
      //   }
      // },
      mounted(){
       // this.cahnge();
      },
      props:["lists","indexitem"],
      methods:{
        // cahnge(){
        //   console.log(this.inexitem)
        //   if(this.indexitem == "one"){
        //     this.$set(this.listss,{},this.lists.one);
        //   }else{
        //     this.listss = this.lists.two;
        //   }
        //   // console.log(this.listss+"sssss");
        // }
      },
      updated(){
        var mySwiper = new Swiper ('.swiper-container', {

          // 如果需要分页器
          // pagination: {
          //   el: '.swiper-pagination',
          // }
        })
      }
    }
</script>

<style scoped lang="scss">

  // section
  .bItemsSection{
  // padding:0.15rem;
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
