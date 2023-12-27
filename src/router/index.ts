import {createRouter, createWebHistory, RouteRecordRaw, RouterView} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/:locale?',
        component: RouterView,
        children: [
            {
                path: '',
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
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
