<template>
  <div class="detail">
  	<h2 class="title">
  		<span v-if="top1==true" class="bj">置顶</span>
  		<span v-else-if="tab1.good==true" class="bj">精华</span>
  		{{title}}
  	</h2>
  	<div class="author">作者： {{author}}</div>
  	<div class="content" v-html="content"></div>
  	<div class="back">回<br>到<br>顶<br>部</div>
  </div>
</template>

<script>
	//引入查询数据的模块
	import {getArticle} from '@/getdata/topic.js';
	export default {
	  name: 'Detail',
	  data () {
	    return {
	      title:'',
	      author:'',
	      content:'',
	      tab1:'',
	      top1:''
	    }
	  },
	  mounted:function(){
	  	//获取id
	  	var id=this.$route.params.id;
	  	getArticle(id).then((data)=>{
	  		//console.log(data.data.data.top);
	  		this.title=data.data.data.title;
	  		this.author=data.data.data.author.loginname;
	  		this.content=data.data.data.content;
	  		this.tab1=data.data.data.tab;
	  		this.top1=data.data.data.top;
	  		
	  	})
	  	$(window).scroll(function(){
				var top=$(window).scrollTop();
				if(top>200){
					$('.back').css('display','block');
				}else if(top<200){
					$('.back').css('display','none');
				}
			})
			$('.back').click(function(){
				$('html').animate({scrollTop:0},500);
			})
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../../assets/sass/base.scss';
	.detail{
		background: #fff;
		width:rem(730px);
		margin:rem(30px) auto rem(100px);
		padding:rem(10px) 0;
		.title{
			line-height: rem(60px);
			margin-top:rem(30px);
			font-size: rem(34px);
			text-align:center;
			padding:0 rem(15px);
			.bj{
				display: inline-block;
				width:rem(65px);
				height:rem(40px);
				font-size: rem(26px);
				background: #9cba48;
				color:#fff;
				text-align: center;
				line-height: rem(40px);
				border-radius: rem(10px);
				margin-right:rem(15px);
			}
			.bj1{
				display: inline-block;
				width:rem(65px);
				height:rem(40px);
				font-size: rem(26px);
				background: #e5e5e5;
				color:#999;
				text-align: center;
				line-height: rem(40px);
				border-radius: rem(10px);
				margin-right:rem(15px);
				}
			}
		.author{
			color:#999;
			text-align: center;
			line-height:rem(80px);
			border-bottom:1px solid #ccc;
			margin-bottom:rem(20px);
		}
		.content{
			text-indent: 2em;
			margin-bottom:rem(100px);
			line-height: rem(60px);
			padding:0 rem(40px);
		}
		.back{
			display: none;
			position: fixed;
			top:60%;
			right:0;
			padding:rem(15px);
			background: #f5f5f5;
			border:1px solid #ccc;
			border-right:none;
			color:grey;
			font-size:rem(28px);
			border-radius: rem(20px) 0 0 rem(20px);
		}		
	}
	
</style>
