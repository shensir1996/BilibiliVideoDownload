import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/download',
    name: 'Download',
    component: () => import('../views/Download.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: process.env.IS_ELECTRON ? 'hash' : 'history'
})

export default router
