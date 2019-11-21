import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/vue',
    name: 'vue',
    component: () => import(/* webpackChunkName: "about" */ '../components/Vue')
  },
  {
    path: '/react',
    name: 'react',
    component: () => import(/* webpackChunkName: "about" */ '../components/React')
  },
  {
    path: '/angular',
    name: 'angular',
    component: () => import(/* webpackChunkName: "about" */ '../components/Angular.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
