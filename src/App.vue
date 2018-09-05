<template>
  <div id="app">
  	<nav class="logo">
  		<img src="../static/images/cnodejs_light.svg"/>
  		<div class="input">
  			<span class="iconfont icon-gouwuche"></span>
  			<input type="text" />
  		</div>
  	</nav>
    <nav class="bottom">
    	<ul>
    		<router-link to="/index" tag="li" :class="res=='index'?'selected':''">首页</router-link>
    		<router-link to="/me" tag="li" :class="res=='me'?'selected':''">关于我们</router-link>
    		<router-link to="/login" tag="li" :class="res=='login'?'selected':''">登录</router-link>
    	</ul>
    </nav>
    <router-view/>
    <!--{{res}}-->
  </div>
</template>

<script>
	export default {
	  name: 'App',
	  computed:{
	  	res:function(){
	  		var arr = this.$route.path.split('/');
	  		return arr[1];
	  	}
	  },
	  mounted:function(){
	  	var div1=document.getElementsByClassName('input')[0];
			var input1=document.getElementsByTagName('input')[0];
			input1.onfocus=function(){
				this.style.background='#fff';
				div1.style.background='#fff';
			}
			input1.onblur=function(){
				this.style.background='#888';
				div1.style.background='#888';
			}
		}
	}
</script>

<style lang="scss">
	@import './assets/sass/base.scss';
	nav.logo{
		width:rem(730px);
		height:rem(160px);
		background: #444;
		margin:0 auto;
		padding-top:rem(10px);
		img{
			display: block;
			width:rem(243px);
			margin:0 auto;
		}
		div.input{
			width:rem(470px);
			height:rem(54px);
			border-radius: rem(30px);
			background: #888;
			margin:rem(20px) auto 0;
			display: flex;
			align-items: center;
			padding-left:rem(15px);
			span{
				font-size: rem(40px);
				font-weight: bold;
				color:#5c5c5c;
			}
			input{
				background: transparent;
				height:98%;
				border-radius: 0 rem(10px) rem(10px) 0;
				border:none;
				font-size: rem(34px);
				
			}
		}
	}
	nav.bottom{
		width:100%;
		height:rem(80px);
		background: #8cba48;
		position: fixed;
		bottom: 0;
		left:0;
		ul{
			width:100%;
			height:rem(80px);
			display: flex;
			li{
				font-size: rem(38px);
				width:33.33%;
				height:100%;
				line-height: rem(80px);
				text-align: center;
				color:#fff;
			}
			.selected{
				background: #009606;
			}
		}
	}
</style>
