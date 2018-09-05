<template>
  <div class="all quan">
  	<!--<loading v-if="items.length==0"></loading>-->
  	<ul class="items">
  		<li class="item" v-for="item in items">
  			<img v-lazy="item.author.avatar_url"/>
  			<div class="tab">
  				<div class="bj" v-if="item.top==true">置顶</div>
  				<div class="bj" v-else-if="item.good==true">精华</div>
  				<div class="bj1" v-else>{{tab[item.tab]}}</div>
  			</div>
  			<router-link :to="'/index/detail/'+item.id" tag="div" class="title">{{item.title}}</router-link>
  		</li>
  	</ul>
  	<div class="back">回<br>到<br>顶<br>部</div>
  </div>
</template>

<script>
	//引入axios模块
	//import axios from 'axios';
	//引入取数据模块 ，数据和组件分开，所以这里不引入数据模块
	//import {getItemList} from '@/getdata/topic.js';
	//引入loading组件
	import Loading from '@/components/Loading';
	
	export default {
	  name: 'All',
	  data () {
	    return {
	      tab:{
					share:'分享',
					ask:'问答',
					dev:'测试',
					job:'招聘'
				},
	    }
	  },
	  //加载loading组件、分页组件
	  components:{
	  	Loading
	  },
	  //接收数据,这个items是在子组件中绑定的属性名称
	  props:['items'],
	  //钩子函数，这里不取数据，所以不用钩子函数
		mounted:function(){
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
	.quan{
		width:rem(730px);
		margin:0 auto;
		background:#fff;
		.items{
			width:100%;
			.item{
				display: flex;
				height:rem(100px);
				align-items: center;
				border-bottom: 1px solid #ccc;
				img{
					display: block;
					width:rem(60px);
					height:rem(60px);
					border-radius: rem(10px);
					margin:0 rem(15px);
				}
				.tab{
					.bj{
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
				.title{
					width:rem(500px);
					line-height: rem(100px);
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: rem(30px);
				}
			}
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
