import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/components/SGX/HelloWorld'//评论列表页
import Index from '../components/SGX/index.vue'//全部评论页
import Paysuccess from '../components/SGX/Paysuccess.vue'//支付完成待取车页
import Orderdetails from '../components/SGX/Order-details.vue'//订单详情页
import Orderinformation from '../components/SGX/orderinformation.vue' //订单信息页
import Evaluation from '../components/SGX/evaluation.vue'//评价页


import Carlist from '@/components/Zyb/thecarlist/carlist'
import Attestation from '@/components/Zyb/attescar/attestation'
import Setting from '@/components/Zyb/setting/setting'
import Locat from '@/components/Zyb/location/locat'
import Shop from '@/components/Zyb/shop/shop'


// 2J列表
// 附近门店
import Fjshop from '@/components/Zyb/shop/2jpag/fjshop'
// 金水
import Jsshop from '@/components/Zyb/shop/2jpag/jsshop'
// 二七
import Eqshop from '@/components/Zyb/shop/2jpag/eqshop'
// 航空港
import Gcshop from '@/components/Zyb/shop/2jpag/gcshop'
// 经开
import Jkshop from '@/components/Zyb/shop/2jpag/jkshop'
// 郑东
import Zdxshop from '@/components/Zyb/shop/2jpag/zdxshop'
// 中原
import Zyshop from '@/components/Zyb/shop/2jpag/zyshop'




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
      meta: { index: 0 }, //
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
    },
    {
      path:'/Orderinformation',
      name:'Orderinformation',
      meta: { index: 4 },
      component:Orderinformation
    },
    {
      path:'/Evaluation',
      name:'Evaluation',
      meta: { index: 5 },
      component:Evaluation
    },
    {
      path: '/Carlist',
      name: 'Carlist',
      component: Carlist
    },
    {
      path: '/Attestation',
      name: 'Attestation',
      component: Attestation
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/Locat',
      name: 'Locat',
      component: Locat
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
      children:[
        {
          path: '/',
          name: '',
          component: Fjshop
        },
        {
          path: 'Fjshop',
          name: 'Fjshop',
          component: Fjshop
        },
        {
          path: 'Jsshop',
          name: 'Jsshop',
          component: Jsshop
        },
        {
          path: 'Eqshop',
          name: 'Eqshop',
          component: Eqshop
        },
        {
          path: 'Gcshop',
          name: 'Gcshop',
          component: Gcshop
        },
        {
          path: 'Jkshop',
          name: 'Jkshop',
          component: Jkshop
        },
        {
          path: 'Zdxshop',
          name: 'Zdxshop',
          component: Zdxshop
        },
        {
          path: 'Zyshop',
          name: 'Zyshop',
          component: Zyshop
        },
      ]
    },
  ]
})
