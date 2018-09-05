<template>
  <div class="all quan">
  	<!--1-->
  	<topic-list :items="items"></topic-list>
  	<!--分页-->
  	<infinite-loading @infinite="infiniteHandler" v-if="isLoadingShow" class="box"></infinite-loading>
  </div>
</template>

<script>
	//引入axios模块
	//import axios from 'axios';
	//引入取数据模块
	import {getItemList} from '@/getdata/topic.js';
	//2、引入公共的主题列表组件
	import topicList from '@/components/topics/Topiclist';
	//引入分页组件
	import InfiniteLoading from 'vue-infinite-loading';
	
	export default {
	  name: 'All',
	  //3、加载组件(类似局部组件)
	  components:{
	  	InfiniteLoading,
	  	topicList
	  },
	  methods: {
	    infiniteHandler($state) {
        setTimeout(() => {
        	//更新数据
        	getItemList({page:++this.page}).then((data)=> {
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
	  data () {
	    return {
	      items:[],
	      page:1,
	      //控制圆圈是否显示
	      isLoadingShow:true,
	    }
	  },
	  //4，钩子函数，传递参数，具体的tab,初始的页面的数据
	  mounted:function(){
	  	getItemList().then((data)=> {
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
