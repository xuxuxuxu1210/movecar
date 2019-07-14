import Vue from 'vue'
import Router from 'vue-router'


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
