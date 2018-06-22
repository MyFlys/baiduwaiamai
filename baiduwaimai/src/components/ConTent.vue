<template>
  <li  class="li-one" v-if="life">
    <i :class="[goodlife ? one: two]" @click="changicon"></i>
    <img :src="lilist.pic">
    <div class="list-one">
      <div class="list-onea">{{lilist.title}}</div>
      <div class="list-oneb">
        <p class="onep">
          <i class="iconfont icon-jianshao" @click="sub(keyi,lilist.qul)"></i>
          <span>{{lilist.qul}}</span>
          <i class="iconfont icon-tianjia1" @click="add(keyi,lilist.qul)"></i>
        </p>
        <p class="twop">
          <span>{{lilist.price}}￥</span>
          <i class="iconfont icon-laji" @click="removeli"></i>
        </p>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
       props:["lilist","keyi","goodlife"],
      // props:["lilist","idx"],
      // data(){
      //   return{
      //     title:"全熟豪华单人餐",
      //     price:"￥120",
      //     qul:"1"
      //   }
      // }
      data(){
        return {
          life:true,
          one:"iconfont icon-checked",
          two:"iconfont icon-kuang",
          flag:true
        }
      },
      methods:{
        checked(){
          if(this.goodlife === false){
            this.flag =false;
            this.$set(this.lilist,"goodChecked",false);
          }else{
            this.flag =true;
            this.$set(this.lilist,"goodChecked",true);
          }
        },
        changicon(){
          if(this.goodlife===true){
            this.goodlife =false;
            this.$set(this.lilist,"goodChecked",false);
            this.$emit("changgood",this.goodlife);

          }else{
            this.goodlife =true;
            this.$set(this.lilist,"goodChecked",true);
            this.$emit("changgood",this.goodlife);
          }
        },
        removeli(){
            this.life = false;
            this.$emit("changequl",this.keyi)
        },
            sub(idx,val){
               this.$emit("sadd",idx,val)
            },
            add(idx,val){
               this.$emit("ssub",idx,val)
            }
        }
    }
</script>

<style scoped>
  .li-one{
    -webkit-align-items: center;
    height: 0.95rem;
    display: -webkit-flex;
  }
  .li-one .icon-checked{
    font-size: 0.15rem;
    color: red;
    margin-right: 0.11rem;
  }
  .li-one .icon-kuang{
    font-size: 0.15rem;
    color: #cccccc;
    margin-right: 0.11rem;
  }
  .li-one img{
    height: 0.55rem;
    width: 0.55rem;
    margin-right: 0.10rem;
  }
  .li-one .list-one .list-onea{
    font-size: 0.13rem;
    color: #333333;
    margin-bottom: 0.06rem;
  }
  .li-one .list-one .list-oneb{
    display: -webkit-flex;
    }
  .li-one .list-one .list-oneb .onep{
      margin-right: 1.3rem;
      display: -webkit-flex;
  }
  .li-one .list-one .list-oneb .onep .iconfont{
      font-size: 0.20rem;
      color: #ff405b;
  }
  .li-one .list-one .list-oneb .onep .icon-tianjia1{
      margin-right: 0.1rem;
  }
  .li-one .list-one .list-oneb .onep .icon-jianshao{
    margin-left: 0.1rem;
  }
  .li-one .list-one .list-oneb .onep span{
    font-size: 0.13rem;
    color: #333333;
    font-weight: 600;
  }
  .li-one .list-one .list-oneb .twop{
    display: -webkit-flex;
  }
  .li-one .list-one .list-oneb .twop span{
    font-size: 0.13rem;
    font-weight: 600;
  }
  .li-one .list-one .list-oneb .twop i{
    margin-left: 0.06rem;
    font-size: 0.15rem;
    color: #999999;
  }  
</style>
