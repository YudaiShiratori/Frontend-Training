import Vue from 'vue';
import Router from 'vue-router';
import TopPage from './views/TopPage.vue'
import VueRouterTopPage from '@/views/vuerouter/VueRouterTopPage.vue'
import VueRouterAgendaPage from '@/views/vuerouter/VueRouterAgendaPage.vue'
import VueRouterFirstPage from '@/views/vuerouter/VueRouterFirstPage.vue'
import VueRouterSecondPage from '@/views/vuerouter/VueRouterSecondPage.vue'
import NotFoundPage from '@/views/vuerouter/NotFoundPage.vue'
import VuetifyTopPage from '@/views/vuetify/VuetifyTopPage.vue'
import VuetifyChildPage1 from '@/views/vuetify/VuetifyChildPage1.vue'
import VuetifyChildPage2 from '@/views/vuetify/VuetifyChildPage2.vue'
import VuetifyChildPage3 from '@/views/vuetify/VuetifyChildPage3.vue'
import LocalForageRosterListPage from '@/views/LocalForageRosterListPage.vue'
import AxiosLesson from '@/views/AxiosLesson.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage,
    },
    {
      path: '/vue_router_top_page',
      name: 'vue_router_top_page',
      component: VueRouterTopPage,
      children: [
        {
          path: '/',
          name: 'vue_router_agenda_page',
          component: VueRouterAgendaPage,
        },
        {
          path: 'vue_router_first_page',
          name: 'vue_router_first_page',
          component: VueRouterFirstPage,
        },
        {
          path: 'vue_router_second_page/:id',
          name: 'vue_router_second_page',
          component: VueRouterSecondPage,
        },
      ],
    },
    {
      path: '/vuetify_top_page',
      name: 'vuetify_top_page',
      component: VuetifyTopPage,
      children: [
        {
          path: 'vuetify_child_page1',
          name: 'vuetify_child_page1',
          component: VuetifyChildPage1,
        },
        {
          path: 'vuetify_child_page2',
          name: 'vuetify_child_page2',
          component: VuetifyChildPage2,
        },
        {
          path: 'vuetify_child_page3',
          name: 'vuetify_child_page3',
          component: VuetifyChildPage3,
        },
      ],
    },
    {
      path: '/localforage',
      name: 'LocalForageRosterListPage',
      component: LocalForageRosterListPage,
    },
    {
      path: '/axios',
      name: 'AxiosLesson',
      component: AxiosLesson,
    },
    {
      path: 'not_found_page',
      name: 'not_found_page',
      component: NotFoundPage,
    },
    {
      path: '*',
      redirect: { name: 'not_found_page' },
    },
  ],
});
