import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/modules/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/productos',
    name: 'Products', 
    component: () => import('../views/Products.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.token == null){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
  {
    path: '/admin',
    name: 'adminProducts', 
    component: () => import('../views/adminProducts.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.token == null){
        next({name: "Login"})
      }else{
        next()
      }
    }
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
