import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateFormPage from '@/components/CreateFormPage.vue';
import RosterListPage from '@/components/RosterListPage.vue';
import ShopItemBuyPage from '@/components/ShopItemBuyPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'createFormpage',
      component: CreateFormPage,
    },
    {
      path: '/create-form-page',
      name: 'CreateFormPage',
      component: CreateFormPage,
    },
    {
      path: '/a',
      name: 'RosterListPage',
      component: RosterListPage,
    },
    {
      path: '/b',
      name: 'ShopItemBuyPage',
      component: ShopItemBuyPage,
    }
  ],
});
