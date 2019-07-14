import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/SGX/HelloWorld'
import Index from '../components/SGX/index.vue'
import Paysuccess from '../components/SGX/Paysuccess.vue'
import Orderdetails from '../components/SGX/Order-details.vue'

Vue.use(Router)

export default new Router({
  
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // ,
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      meta: { index: 0 },
      component: HelloWorld
    },

    ,
    {
      path:'/Index',
      name:'Index',
      meta: { index: 1 },
      component:Index
    },
    {
      path:'/Paysuccess',
      name:'Paysuccess',
      meta: { index: 2 },
      component:Paysuccess
    },
    {
      path:'/Orderdetails',
      name:'Orderdetails',
      meta: { index: 3 },
      component:Orderdetails
    }
  ]
})
