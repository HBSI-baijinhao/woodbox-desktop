import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
    maximized: false
  },
  mutations: {
    kvSet(state, payload) {
      if (_.has(state, payload.key)) {
        _.set(state, payload.key, payload.value);
      }
    }
  },
  actions: {},
  modules: {}
});
