import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Me from '@/components/Me'
import Login from '@/components/Login'
//主题组件
import All from '@/components/topics/All'
import Ask from '@/components/topics/Ask'
import Share from '@/components/topics/Share'
import Job from '@/components/topics/Job'
import Good from '@/components/topics/Good'
import Test from '@/components/topics/Test'
import Detail from '@/components/topics/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'/',
      		component:All
      	},
      	{
      		path:'good',
      		component:Good
      	},
      	{
      		path:'ask',
      		component:Ask
      	},
      	{
      		path:'share',
      		component:Share
      	},
      	{
      		path:'test',
      		component:Test
      	},
      	{
      		path:'job',
      		component:Job
      	},
      	{
      		path:'detail/:id',
      		component:Detail
      	},
      ]
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/*',
    	redirect:'/index'
    }
  ]
})
