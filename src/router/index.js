import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import { routers } from './router';

// 全局注册
Vue.use(VueRouter);

// 路由配置
const routerConfig = {
    // mode: history,
    routes: routers
};

// 创建 router 实例，然后传 `routes` 配置
export const router = new VueRouter(routerConfig);

// 全局前置守卫
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    title(to.meta.title);
    if (!sessionStorage.user) {
        if (to.name === 'login') {
            next();
        } else {
            next({
                name: 'login'
            })
        }
    } else {
        next();
    }
});

// 全局后置钩子
router.afterEach((to) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

const title = title => {
    title = title || '商城';
    window.document.title = title;
}
