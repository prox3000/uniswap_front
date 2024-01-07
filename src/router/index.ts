import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw, RouterView} from 'vue-router';

import LoginPage from '@/components/pages/login/login.page.vue';
import RegistrationPage from '@/components/pages/registration/registration.page.vue';

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
                meta: {
                    title: 'Logo'
                },
                children: [
                    {
                        path: 'login',
                        name: 'login',
                        component: LoginPage
                    },
                    {
                        path: 'registration',
                        name: 'registration',
                        component: RegistrationPage
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
                    },
                    {
                        path: 'about-company',
                        component: () => import('../components/pages/about-company/about-company.page.vue')
                    },
                    {
                        path: 'insurance-fund',
                        component: () => import('../components/pages/insurance-fund/insurance-fund.page.vue')
                    },
                    {
                        path: 'terminal',
                        component: () => import('../components/pages/terminal/terminal.page.vue')
                    },
                    {
                        path: 'contacts',
                        component: () => import('../components/pages/contacts/contacts.page.vue')
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

router.beforeEach((to, from, next) => {
    document.title = `Company Name - ${to.meta?.title}` ?? 'Company Name'

    next();
});

export default router
