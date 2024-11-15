import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue';
import HomePage from '../pages/HomePage.vue';

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
  ],
})

export default router
