<template>
  <div class="header">
	  <i class="iconfont icon-flow"></i>
	  <h2>购物车<span>{{tn}}</span></h2>
	  <span class="spanb" @click="removenow">清空</span>
</div>
</template>

<script>
  export default {
     props:{
            tn:{
                type:Number,
                default:0
            }
      },
      methods:{
        removenow(){
          this.$emit("removenow");
        }
      }
  }
</script>

<style scoped >
.header{
  width: 100%;
  height: 0.45rem;
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  -webkit-align-items: center;
}
i{
padding-left: 0.05rem;
font-size: 0.24rem;
color: #333333;
}
h2{
font-weight: 100;
font-size: 0.18rem;
color: #333333;
}
.spanb{
font-size: 0.15rem;
color: #333333;
padding-right: 0.05rem;
  }

</style>
