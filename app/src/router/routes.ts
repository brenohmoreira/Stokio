import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'products', name: 'products', component: () => import('pages/Product/Products.vue') },
      { path: 'unitsOfMeasure', name: 'unitsOfMeasure', component: () => import('pages/UnitOfMeasure/UnitsOfMeasure.vue') }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
