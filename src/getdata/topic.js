//引入axios模块
import axios from 'axios';
//基本配置，创建axios对象
var $http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1',
//timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
//获取栏目列表
function getItemList(options){
//	console.log(options);
	//设置默认参数,Object.assign是对象属性的合并，权重大的放在后面。例如options
	var newOptions=Object.assign({
		page:1,
		limit:9
	},options)
	
	return $http({
		method: 'get',
		//具体的地址
		url: '/topics',
		params:newOptions
	})
}

//获取文章
function getArticle(id){
	return $http.get('/topic/'+id)
}
//向外暴露,主要是暴露axios对象
export {getItemList,getArticle}
