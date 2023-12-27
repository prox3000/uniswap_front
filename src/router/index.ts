import {createRouter, createWebHistory, RouteRecordRaw, RouterView} from 'vue-router';

import {defaultLocale} from '../i18n';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: `/${defaultLocale}/`
    },
    {
        path: '/(.*)',
        redirect: (to: any) => {
            return `/${defaultLocale}/${to.path}`;
        }
    },
    {
        path: '/:locale',
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
                    },
                    {
                        path: 'goods',
                        component: () => import('../components/pages/goods/goods.page.vue')
                    },
                    {
                        path: 'indexes',
                        component: () => import('../components/pages/indexes/indexes.page.vue')
                    },
                    {
                        path: 'currencies',
                        component: () => import('../components/pages/currencies/currencies.page.vue')
                    },
                    {
                        path: 'stock',
                        component: () => import('../components/pages/stock/stock.page.vue')
                    },
                    {
                        path: 'cryptocurrencies',
                        component: () => import('../components/pages/cryptocurrencies/cryptocurrencies.page.vue')
                    },
                    {
                        path: 'metals',
                        component: () => import('../components/pages/metals/metals.page.vue')
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
