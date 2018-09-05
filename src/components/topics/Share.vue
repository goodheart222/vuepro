<template>
  <div class="share quan">
  	<!--1-->
  	<topic-list :items="items"></topic-list>
  	<!--分页-->
  	<infinite-loading @infinite="infiniteHandler" v-if="isLoadingShow" class="box"></infinite-loading>
  </div>
</template>

<script>
	//引入axios模块
	//import axios from 'axios';
	//引入取数据函数
	import {getItemList} from '@/getdata/topic.js';
	//2、引入公共的主题列表组件
	import topicList from '@/components/topics/Topiclist';
	//引入分页组件
	import InfiniteLoading from 'vue-infinite-loading';
	
	export default {
	  name: 'Share',
	  data () {
	    return {
	      items:[],
	      //控制圆圈是否显示
	      isLoadingShow:true,
	      page:1
	    }
	  },
	   methods: {
	    infiniteHandler($state) {
        setTimeout(() => {
        	//更新数据
        	getItemList({tab:'share',page:++this.page}).then((data)=> {
//				    console.log(data.data.data);
				    this.items=this.items.concat(data.data.data);
				    if(data.data.data.length==0){
				    	this.isLoadingShow=false;
				    }else{
				    	 $state.loaded();
				    }
				  })
         
	      }, 1000);
	    },
	  },
	  //3、加载组件(类似局部组件)
	  components:{
	  	InfiniteLoading,
	  	topicList
	  },
	  //4.钩子函数
	  mounted:function(){
	  	//分类这里之所以要传对象，是因为axios的语法就是这样params：{}
	  	getItemList({tab:'share'}).then((data)=> {
		    //console.log(data.data.data);
		    this.items=data.data.data;
		  })
	  },
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
		@import '../../assets/sass/base.scss';
	.box{
		margin-bottom:rem(100px);
	}
</style>
