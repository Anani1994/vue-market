import Main from '../views/main/market.vue';

export const indexPage = {
    path: '/',
    name: 'index',
    meta: {
        title: '首页'
    },
    component: Main
};
export const pageGoods = {
    path: '/goods/:id',
    name: 'goods-detail',
    meta: {
        title: '商城-商品详情'
    },
    component: () => import('../views/main/goods.vue')
}
export const pageCart = {
    path: '/cart',
    name: 'cart',
    meta: {
        title: '商城-购物车'
    },
    component: () => import('../views/cart/cart.vue')
}
export const routers = [
    indexPage,
    pageGoods,
    pageCart
];
