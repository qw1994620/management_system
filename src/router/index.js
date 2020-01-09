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
      redirect: "/home"
    },
    {
      path: '/home',
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
      redirect: "/login"
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    return next()
  } else {
    let tokens = window.sessionStorage.getItem('token')
    if (!tokens) {
      return next('/login')
    } else {
      next()
    }
  }
})


export default router