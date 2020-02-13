import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'
import router from './router/routes'
import 'vuetify/dist/vuetify.min.css'
import store from './store/store'
Vue.use(Vuetify)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
