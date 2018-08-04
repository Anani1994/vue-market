import Main from '../views/main/market.vue';

export const indexPage = {
    path: '/index',
    name: 'index',
    meta: {
        title: '首页'
    },
    component: Main
};

export const pageIndex = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录'
    },
    component: () => import('../views/login.vue')
};

export const pageGoods = {
    path: '/goods/:id',
    name: 'goods-detail',
    meta: {
        title: '商城-商品详情'
    },
    component: () => import('../views/main/goods.vue')
};

export const pageCart = {
    path: '/cart',
    name: 'cart',
    meta: {
        title: '商城-购物车'
    },
    component: () => import('../views/cart/cart.vue')
};

export const routers = [
    {
        path: '/',
        redirect: '/index',
    },
    indexPage,
    pageIndex,
    pageGoods,
    pageCart
];
