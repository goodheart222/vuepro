<template>
  <div class="index">
	  <nav class="top">
	  	<ul>
	  		<router-link to="/index/" tag="li" :class="(res==''||res==undefined)?'bj':''">全部</router-link>
	  		<router-link to="/index/good" tag="li" :class="res=='good'?'bj':''">精华</router-link>
	  		<router-link to="/index/share" tag="li" :class="res=='share'?'bj':''">分享</router-link>
	  		<router-link to="/index/ask" tag="li" :class="res=='ask'?'bj':''">问答</router-link>
	  		<router-link to="/index/job" tag="li" :class="res=='job'?'bj':''">招聘</router-link>
	  		<router-link to="/index/test" tag="li" :class="res=='test'?'bj':''">测试</router-link>
	  	</ul>
	  </nav>
	  <!--{{res}}-->
	  <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  //计算属性
  computed:{
  	res:function(){
  		var arr=this.$route.path.split('/');
//		console.log(arr[2]);
  		return arr[2];
  		
  	}
  },
  mounted:function(){
		var swiper = new Swiper('.swiper-container', {
			// 显示 slide 的个数
			slidesPerView: 5,
			spaceBetween: 15,
		});  	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../assets/sass/base.scss';
	nav.top{
		width:rem(730px);
		height:rem(70px);
		background: #f6f6f6;
		border-radius: rem(15px) rem(15px) 0 0;
		margin:rem(40px) auto 0;
		ul{
			display:flex;
			width:100%;
			height: 100%;
			align-items: center;
			justify-content: space-around;
			li{
				font-size: rem(34px);
				color:#90b910;
			}
			.bj{
				background: #8dbd3e;
				color:#fff;
				padding:rem(5px) rem(10px);
				border-radius:rem(10px)
			}
		}
	}
</style>
