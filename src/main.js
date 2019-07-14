// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Axios from "axios"
Vue.prototype.axios = Axios
Vue.config.productionTip = false

// su gui xi
import store from './store/store.js'
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
