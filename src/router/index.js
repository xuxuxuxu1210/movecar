import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Guide from './../components/Xhh/guide.vue'//引导页

import Shaixuana from './../components/Xhh/shaixuana.vue'//价格筛选
import Shaixuanb from './../components/Xhh/shaixuanb.vue'//车型筛选
import Register from './../components/Xhh/register.vue'//注册
import Login from './../components/Xhh/login.vue'//登录
Vue.use(Router)

export default new Router({
  routes: [
    //引导页

    {
      path: '/',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
//价格筛选
    {
      path: '/shaixuana',
      name: 'Shaixuana',
      component: Shaixuana
     
},
//车型筛选
{
  path: '/shaixuanb',
  name: 'Shaixuanb',
  component: Shaixuanb
},
//注册
{
  path: '/register',
  name: 'Register',
  component: Register
},
//登录
{
  path: '/login',
  name: 'Login',
  component: Login
},
  ]
})
