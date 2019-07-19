// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from "axios"
Vue.prototype.axios = Axios
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Vuex from 'vuex';
Vue.use(Vuex);

//引入地图组件
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: '0dWyNG1uG7vQLwHkhrj9m8Mf4P4UsCOt'
})

let store = new Vuex.Store({
  state:{
    num: 500,
    speedday_: '',
    beginnow: '',
    endfuture:'',
  },
  mutations:{
    change(state,v){
      state.num = v;
    },
    changes(state,a){
      state.num = a;
    },
    //租车天数
   speedday_(state,date) {
     state.speedday_ = date;
    },
    //租车开始时间
   beginnow(state, date) {
     state.beginnow = date;
    },
    //租车结束时间
   endfuture(state, date) {
     state.endfuture = date;
    },
  }
})

Vue.config.productionTip = false

// su gui xi
// import store from './store/store.js'
import Animation from 'animate.css'
Vue.use(Animation);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  
})
