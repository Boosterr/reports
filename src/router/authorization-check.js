import store from '../store/store'

export default (router) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
        next()
      } else {
        next('/login')
      }
    } else {
      if (!store.getters.isLoggedIn) {
        next()
      } else {
        next('/')
      }
    }
  })
}
