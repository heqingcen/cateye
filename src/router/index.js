import Vue from 'vue'
import VueRouter from 'vue-router'

import movie from '../views/movie/movie.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'movie',
    component: movie
  },
  {
    path: '/cinema',
    name: 'cinema',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cinema/cinema.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
