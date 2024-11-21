import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue';
import HomePage from '../pages/HomePage.vue';
import CashFlowPage from '../pages/CashFlowPage.vue';
import ReportsPage from '../pages/ReportsPage.vue';
import ConfigurationPage from '../pages/ConfigurationPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/cash-flow-page',
      name: 'CashFlowPage',
      component: CashFlowPage,
    },
    {
      path: '/reports',
      name: 'ReportsPage',
      component: ReportsPage,
    },
    {
      path: '/configuration',
      name: 'ConfigurationPage',
      component: ConfigurationPage,
    },
  ],
})

export default router
