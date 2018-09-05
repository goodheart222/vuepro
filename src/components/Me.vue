<template>
  <div class="me">
  	<div class="head">
  		<ul>
  			<li><a href="/index">主页</a>&nbsp;/&nbsp;</li>
  			<li class="active">关于</li>
  		</ul>
  	</div>
  	<div class="shuru">
  		<h2>关于</h2>
  		<div class="con">
  			<p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
  			<p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
  			<p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../assets/sass/base.scss';
	
	.me{
		margin:rem(40px) auto 0;
		width:rem(730px);
		height:rem(686px);
		background: #fff;
		border-radius: rem(10px);
		.head{
			border-radius: rem(10px) rem(10px) 0 0;
			width:100%;
			height:rem(80px);
			background:#f6f6f6;
			ul{
				display: flex;
				padding-left:rem(20px);
				li{
					font-size:rem(28px);
					line-height: rem(80px);
					color:#999;
					a{
						color:#80bd01;
					}
				}
			}
		}
		.shuru{
			padding:rem(20px) rem(20px) 0;
			h2{
				font-size: rem(40px);
				line-height:rem(80px);
				border-bottom:1px solid #ccc;
			}
			.con{
				padding-top:rem(30px);
				p{
					font-size: rem(30px);
					line-height: rem(50px);
					margin-bottom:rem(30px);
				}
			}
		}
	}
</style>
