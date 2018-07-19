<template>
    <header>
        <p><i class="iconfont icon-flow"></i></p>
        <h2>百度账号登陆</h2>
        <h3>注册</h3>
    </header>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style scoped lang="scss">
    header{
	display: -webkit-flex;
	-webkit-justify-content: space-between;
	height: 0.44rem;
	padding: 0 0.14rem;
	border-bottom: 1px solid #999;
	p{	
		line-height: 0.44rem;
		.iconfont{
			display: block;
			font-size: 0.28rem;
			color: #999;
		}
	}
	h2{
		font-size: 0.19rem;
		line-height: 0.44rem;
		font-weight: 100;
	}
	h3{
		color: #e10602;
		font-size: 0.16rem;
		line-height: 0.44rem;
		font-weight: 100;
	}
}
 
</style>
