import Main from '../views/main/market.vue';

export const pageIndex = {
    path: '/',
    name: 'index',
    meta: {
        title: '首页'
    },
    component: Main
};
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
];
