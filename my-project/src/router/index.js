import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Work from '@/components/Work'
import Stark from '@/components/Stark'
import User from '@/components/User'

Vue.use(Router)
const UserProfile = { template: `<div> 我是profile 组件 </div>` };
const UserPosts = { template: `<div> 我是UserPosts 组件 </div>` };
const Blog = { template: `<div> 我是Blog 组件 </div>` };
const Info = { template: `<div> 我是Info 组件 </div>` };
const NotFound = { template: `<div>404 您访问的页面不存在 </div>` };
const About = { template: `<div> 我是About组件 <router-view> </router-view> </div>` };
const Users = {
    // template: '<div>User {{ $route.params.id }}</div>'
    template: ' <div class="user"> \
            <h2> User {{ $route.params.id } } </h2> \
            <router-view> </router-view> \
            </div>'
}

export default new Router({
	mode:'history',
	linkExactActiveClass:'shudong',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/stark',
      name: 'Stark',
      component: Stark
    },
    {
      path: '/user/:userId?/:name?',
      name: 'User',
      component: User
    },
    {
      path: '/users/:id',
      component: Users,
	    children:[
    		{
      		path:'profile',
      		component:UserProfile
      	},{
      		path:'posts',
      		component:UserPosts
      	}
      ]
    },
    {
			path: '/about',
			component: About,
			children: [{
			        path: '/blog',
			        name: 'blog',
			        component: Blog
			    },
			    {
			        path: '/info',
			        name: 'info',
			        component: Info
			    }
			]
    },
    {
    	path:'*',
    	redirect: (to) =>{
    		if(to.path ==='/aaa'){
    			return '/work'
    		}else if(to.path ==='/bbb'){
    			return '/info'
    		}else{
    			return '/'
    		}
    	}
    	
    }
  ]
})
