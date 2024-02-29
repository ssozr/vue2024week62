import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/front/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/HomeView.vue')
      },
      {
        path: 'about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: 'article',
        component: () => import('../views/front/ArticleView.vue')
      },
      {
        path: 'articles',
        component: () => import('../views/front/ArticlesView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/front/CartView.vue')
      },
      {
        path: 'product',
        component: () => import('../views/front/ClassView.vue')
      },
      {
        path: 'products',
        component: () => import('../views/front/ClassesView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/front/OrderView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/user/UserView.vue'),
    children: [
      {
        path: 'article',
        component: () => import('../views/user/ArticleView.vue')
      },
      {
        path: 'order',
        component: () => import('../views/user/UserOrder.vue')
      },
      {
        path: 'products',
        component: () => import('../views/user/UserProducts.vue')
      },
      {
        path: 'voucher',
        component: () => import('../views/user/VoucherView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
