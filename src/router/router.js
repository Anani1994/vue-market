import Main from '../views/main/market.vue';

<<<<<<< HEAD
export const indexPage = {
=======
export const pageIndex = {
>>>>>>> 6e9d8070f73079cad46747d7270b5edc7e3bd119
    path: '/',
    name: 'index',
    meta: {
        title: '首页'
    },
    component: Main
};
<<<<<<< HEAD
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
=======
export const goodsPage = {
    path: '/goods/:id',
    name: 'goods-detail',
    meta: {
        title: '商品详情'
    },
    component: () => import('../views/main/goods.vue')
}
export const routers = [
    pageIndex,
    goodsPage
>>>>>>> 6e9d8070f73079cad46747d7270b5edc7e3bd119
];
