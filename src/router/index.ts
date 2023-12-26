import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[]  = [
  {
    path: '/',
    name: 'main',
    component: () => import('../components/pages/main/main.page.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../components/pages/login/login.page.vue')
      },
      {
        path: 'registration',
        name: 'registration',
        component: () => import('../components/pages/registration/registration.page.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
