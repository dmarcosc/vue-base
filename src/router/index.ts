import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basic',
    name: 'BasicVue',
    component: () => import('@/views/BasicVue.vue')
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('@/views/Components.vue')
  },
  {
    path: '/advanced',
    name: 'AdvancedVue',
    component: () => import('@/views/AdvancedVue.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('@/views/Playground.vue')
  },
  {
    path: '/tests',
    name: 'Tests',
    component: () => import('@/views/Tests.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import('@/views/Form.vue')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import('@/views/Error.vue')
  },
  {
    path: '/client',
    name: 'Client',
    component: () => import('@/views/Client.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/practice1',
    name: 'Practice1',
    component: () => import('@/views/Practice1.vue')
  },
  {
    path: '/practice2',
    name: 'Practice2',
    component: () => import('@/views/Practice2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
