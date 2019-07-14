import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Guide from './../components/Xhh/guide.vue'
import Guide1 from './../components/Xhh/guide1.vue'
import Guide2 from './../components/Xhh/guide2.vue'
import Shaixuana from './../components/Xhh/shaixuana.vue'
import Shaixuanb from './../components/Xhh/shaixuanb.vue'
import Register from './../components/Xhh/register.vue'
import Login from './../components/Xhh/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/guide1',
      name: 'Guide1',
      component: Guide1
    },
    {
      path: '/guide2',
      name: 'Guide2',
      component: Guide2
    },
    {
      path: '/shaixuana',
      name: 'Shaixuana',
      component: Shaixuana
     
},
{
  path: '/shaixuanb',
  name: 'Shaixuanb',
  component: Shaixuanb
},
{
  path: '/register',
  name: 'Register',
  component: Register
},
{
  path: '/login',
  name: 'Login',
  component: Login
},
  ]
})
