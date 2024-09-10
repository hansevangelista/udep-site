import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Terms from '../views/Terms.vue'
import Remember from '../views/Remember.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/play',
      component: Play
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/terms',
      component: Terms
    },
    {
      path: '/remember',
      component: Remember
    },
  ]
})

export default router
