import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import CreateFormPage from '@/components/CreateFormPage.vue';
import RosterListPage from '@/components/RosterListPage.vue';
import ShopItemBuyPage from '@/components/ShopItemBuyPage.vue';
import AnonymouslyPage from '@/components/AnonymouslyPage.vue';
import SignInFinishPage from '@/components/SignInFinishPage.vue';
import EmailAuthPage from '@/components/EmailAuthPage.vue';

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
      name: 'createFormPage',
      component: CreateFormPage,
    },
    {
      path: '/roster-list-page',
      name: 'RosterListPage',
      component: RosterListPage,
    },
    {
      path: '/shop-item-buy-page',
      name: 'ShopItemBuyPage',
      component: ShopItemBuyPage,
    },
    {
      path: '/anonymously-page',
      name: 'AnonymouslyPage',
      component: AnonymouslyPage,
    },
    {
      path: '/sign-in-finish-page',
      name: 'sign_in_finish_page',
      component: SignInFinishPage,
    },
    {
      path: '/email-auth-page',
      name: 'email_auth_page',
      component: EmailAuthPage,
    },
  ],
});
