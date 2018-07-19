<template>
    <section>
		<div class="sec-intr">
			<p><img src="../../assets/img/logo.jpg" alt="">|<span>百度外卖</span></p>
			<p>欢迎登陆百度账号</p>
		</div>
		<div class="user">
			<form action="">
				<div class="user-one">
					<label>请输入用户名/手机号/邮箱</label>
					<input type="text">
				</div>
				<div class="user-one">
					<label>请输入登录密码</label>
					<input type="password">
				</div>
				<p>
					短信快捷登陆&nbsp;|&nbsp;更多<span>忘记密码</span>
				</p>
				<router-link to="/WmMysql">登录</router-link>
			</form>
		</div>
	</section>
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
section{
	margin: 0 0.29rem;
    flex:1;
    overflow: auto;
	.sec-intr{
		margin: 0.47rem 0 0.8rem;
		p:nth-child(1){
			display: -webkit-flex;
			color: #999;
			font-size: 0.13rem;
			line-height: 0.39rem;
			img{
				display: block;
				width: 0.81rem;
				height: 0.39rem;
				margin-right: 0.11rem;
			}
			span{
				color: #999;
				margin-left: 0.11rem;
			}
		}
		p:nth-child(2){
			line-height: 0.35rem;
			font-size: 0.27rem;
			color: #121c32;
			font-weight: 600;
		}
	}
	.user{
		form{
			.user-one{
				margin-bottom: 0.34rem;
				label{
					display: block;
					font-size: 0.16rem;
					color: #999;
					line-height: 0.25rem;
				}
				input{
					display: block;
					width: 3.17rem;
					height: 0.24rem;
					border: none;
					border-bottom: 1px solid #999;
				}
			}
			p{
				margin: -0.17rem 0 0.25rem;
				font-size: 0.13rem;
				color: #333;
				line-height: 0.34rem;
				span{
					display: block;
					float: right;
				}
			}
			a{
				font-size: 0.17rem;
				display: block;
				width: 3.17rem;
				height: 0.5rem;
				text-align: center;
				border-radius: 0.25rem;
				line-height: 0.5rem;
				background: #dcdfe6;
				color: #fff;
			}
		}
	}
}

</style>
