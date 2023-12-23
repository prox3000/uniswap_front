import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/pages/main/main.page.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
