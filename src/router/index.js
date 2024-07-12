import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'


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
  ]
})

export default router
