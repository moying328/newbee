import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页我们需要默认空路径重定向到 home 下，避免空页面
  {
    path: '/',
    name: 'home',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      index:1// 添加 meta 属性，约定 1 为第一级
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
    meta: {
      index: 1
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: ()=>import('../views/Detail.vue'),
    meta:{
      index:2// 添加 meta 属性，约定 1 为第一级
    }
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login.vue'),
    meta:{
      index:2// 添加 meta 属性，约定 1 为第一级
    }
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "product-list" */ '../views/ProductList.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "ProductDetail" */ '../views/ProductDetail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/create-order',
    name:'create-order',
    component:()=>import('../views/CreateOrder.vue'),
    meta:{
      index:2
    }
  },
  {
    path: '/address',
    name: 'address',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue'),
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "address-edit" */ '../views/AddressEdit.vue'),
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
