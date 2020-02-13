import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../views/Pages/Authentication/LoginPage'
import CreateReport from '../views/Pages/List/CreateReport'
import List from '../views/Pages/List/ListOfReports'
import EditOfReports from '../views/Pages/List/EditOfReports'
import authorization from './authorization-check'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: List,
      meta:
        {
          public: true,
          requiresAuth: true
        }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta:
        {
          public: false,
          requiresAuth: false
        }
    },
    {
      path: '/report/create',
      name: 'create',
      component: CreateReport,
      meta:
        {
          public: true,
          requiresAuth: true
        }
    },
    {
      path: '/edit/:status/:id',
      name: 'edit',
      component: EditOfReports,
      meta:
        {
          public: true,
          requiresAuth: true
        }
    }
  ]
})
authorization(router)
export default router
