<template>
  <div class="login">
  	<div class="head">
  		<ul>
  			<li><a href="/index">主页</a>&nbsp;/&nbsp;</li>
  			<li class="active">登陆</li>
  		</ul>
  	</div>
  	<div class="shuru">
  		<p>用户名</p>
  		<input type="text"  />
  		<p>密码</p>
  		<input type="password" /><br />
  		<a href="#" class="btn">登录</a>
  		<a href="#"  class="btn1">通过GitHub登录</a>
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
	
	.login{
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
			height:rem(526px);
			padding-top:rem(80px);
			padding-left:rem(20px);
			p{
				font-size: rem(30px);
				color:#333;
				margin-bottom: rem(15px);
			}
			input{
				width:rem(568px);
				height:rem(60px);
				border:rem(2px) solid #ccc;
				border-radius: rem(10px);
				margin-bottom: rem(40px);
				font-size: rem(30px);
			}
			a{
				display: inline-block;
				padding:rem(15px);
				color:#fff;
				border-radius: rem(10px);
				font-size: rem(28px);
				margin:rem(30px) rem(5px);
			}
			.btn{
				background:#0088cc;
				margin-left:rem(20px);
			}
			.btn1{
				background: #5bc0de;
				
			}
		}
	}
</style>
