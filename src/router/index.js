import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Login from '@/pages/Login/Login'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/*',
      redirect: "Login"
    }
  ]
})




export default router