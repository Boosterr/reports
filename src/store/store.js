import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import list from './modules/listEditor'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    list
  }
})
