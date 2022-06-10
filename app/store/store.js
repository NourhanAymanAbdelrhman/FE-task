import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      count: 0,
    //   chartData: [{
    //         date_ms: 1641772800000,
    //         performance: 0.2,
    //       },
    //       {
    //         date_ms: 1641859200000, 
    //         performance: 0.33,
    //       },
    //  ],
    };
  },
  //   getters:{
  //   getcount:state=>state.count
  //   },
  // mutations: {
  //   getchartData(state) {
  //     axios
  //       .get('https://fe-task.getsandbox.com/performance')
  //       .then((res) => {
  //         console.log("hello");
  //         state.chartData = res.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },

    increment(state, amount) {
      state.count += amount;
    },
  },

  // actions: {
  //   increment(context, amount) {
  //     context.commit("increment", amount);
  //   },
  // },
);
export default store;
