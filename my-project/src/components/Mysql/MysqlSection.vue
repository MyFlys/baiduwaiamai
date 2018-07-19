<template>
     <section>
		<div class="user-infr">
			<router-link to="/WmLogin"  ><img src="../../assets/img/3.1.jpg"></router-link>
			<p><a href="javascript:;">mamamamamamama4</a></p>
			<p><a href="javascript:;">味至浓时是故乡</a></p>
		</div>
		<div class="uls">
			<div class="uls-one">
				<ul>
					<li>
						<i class="iconfont icon-klmshoucang"></i>
						<h3>收藏店铺</h3>
						<span>0个店铺</span>
					</li>
					<li>
						<i class="iconfont icon-qianbao"></i>
						<h3>外卖钱包</h3>
						<span>支付设置</span>
					</li>
					<li>
						<i class="iconfont icon-daijinquan"></i>
						<h3>代金券</h3>
						<span>0个使用</span>
					</li>
				</ul>
			</div>
			<div class="uls-two">
				<h2>常用</h2>
				<ul>
					<li>
						<i class="iconfont icon-xiaoxi"></i>
						<span>我的评价</span>
					</li>
					<li>
						<i class="iconfont icon-dizhi"></i>
						<span>我的地址</span>
					</li>
					<li>
						<i class="iconfont icon-wodechengjiu"></i>
						<span>我的成就</span>
					</li>
					<li>
						<i class="iconfont icon-qian"></i>
						<span>赠送记录</span>
					</li>
				</ul>
			</div>
			<div class="uls-one uls-three">
				<h2>其他</h2>
				<ul>
					<li>
						<i class="iconfont icon-liwu"></i>
						<h3>分享有礼</h3>
						<span>邀友得现金</span>
					</li>
					<li>
						<i class="iconfont icon-kefu"></i>
						<h3>我的客服</h3>
						<span>常见问题</span>
					</li>
					<li>
						<i class="iconfont icon-shangjia"></i>
						<h3>商家加盟</h3>
						<span></span>
					</li>
				</ul>
			</div>
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
	-webkit-flex: 1;
	overflow: auto;
	margin: 0 0.16rem;
	.user-infr{
		margin-bottom: 0.41rem;
		img{
        float: right;
				width: 0.49rem;
				height: 0.49rem;
				vertical-align: top;
			}

		p:nth-of-type(1){
            //  display: inline;
			font-size: 0.2rem;
			line-height: 0.36rem;
			font-weight: 600;
            width: 2.5rem;
			a{
                display: inline-block;
				color: #000;
			}
		}
		p:nth-of-type(2){
            //  display: inline;
			font-size: 0.13rem;
			line-height: 0.21rem;
            width: 2.5rem;
			a{
                display: inline-block;
				color: #999;
			}
		}
	}
	.uls{
		margin: 0 0.04rem;
		.uls-one{
			padding-bottom: 0.2rem;
			border-bottom: 1px solid #eaeaea;
			ul{
				display: -webkit-flex;
				li{
					margin-right: 0.44rem;
					text-align: center;

					.iconfont{
						display: block;
						font-size: 0.28rem;
						color: #ff3e59;
					}
					h3{
						font-size: 0.13rem;
						line-height: 0.23rem;
						color: #333;
					}
					span{
						display: block;
						font-size: 0.1rem;
						color: #999;
					}
				}
			}
		}
		.uls-two{
			padding: 0.2rem 0 0.29rem;
			border-bottom: 1px solid #eaeaea;
			h2{
				font-size: 0.18rem;
				line-height: 0.24rem;
				margin-bottom: 0.18rem;
			}
			ul{
				display: -webkit-flex;
				-webkit-justify-content: space-between;
				li{
					text-align: center;
					.iconfont{
						display: block;
						font-size: 0.28rem;
						line-height: 0.32rem;
						color: #444;
					}
					span{
						display: block;
						font-size: 0.13rem;
						line-height: 0.2rem;
						color: #444;
					}
				}
			}
		}
		.uls-three{
			h2{
				padding-top: 0.18rem;
				font-size: 0.18rem;
				line-height: 0.24rem;
				margin-bottom: 0.18rem;
			}
			ul{
				li .iconfont{
					color: #444;
				}
				li:nth-child(1) span{
					color: #ff2d4b;
				}
			}
		}
	}
}

</style>
