import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Play from '../views/Play.vue'
import Signup from '../views/Signup.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
  ]
})

export default router
