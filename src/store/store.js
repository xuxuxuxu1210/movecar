import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        num:1020,
        arr:[1,15,15,46,46]
    },
    mutations:{
        add_(state,a){
            state.num+=a;
        }
    },
    getters:{
        get_arr(state){
            var res=[];
            for (var i = 0; i < state.arr.length; i++) {
                if (state.arr[i] > 5) {
                  res.push(state.arr[i]);
                }
              }
              return res;
        }
    }
})