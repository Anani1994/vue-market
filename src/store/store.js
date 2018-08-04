import Vue from 'vue';
import Vuex from 'vuex';
import iview from 'iview';
// 以下数据在实际项目由下面的函数 getGoodsList、getCart 发送 ajax 获取
import goodses from '../../remote-data/goods';
import cart from '../../remote-data/cart';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        showNav: false,
        goodsList: [],
        cartList: []
    },
    getters: {
        colors:  state => (Array.from(new Set(state.goodsList.map(item => item.color)).add('全部'))).reverse(),
        brands:  state => (Array.from(new Set(state.goodsList.map(item => item.brand)).add('全部'))).reverse(),
        sizes:   state => (Array.from(new Set(state.goodsList.map(item => item.size)).add('全部'))).reverse()
    },
    mutations: {
        setGoodsList (state,data) {
            state.goodsList = data;
        },
        setCart(state,data) {
            state.cartList = data;
        },
        addCartGoodsDo(state,data) {
            let res = state.cartList.findIndex(item => item.id === data.id);
            if(res < 0) {
                let ori = state.goodsList.find(item => item.id === data.id);
                ori.count = 1;
                state.cartList.push(ori);
            }else {
                state.cartList[res].count += 1;
            }
        },
        removeCartGoodsDo(state,data) {
            let res = state.cartList.findIndex(item => item.id === data.id);
            state.cartList.splice(res,1);
        },
        buySelectedDo(state,data) {
            for(let i = 0; i < data.id.length; i++) {
                state.cartList.splice(state.cartList.findIndex(item => item.id === data.id[i]),1);
            }
            iview.Message.success('购买成功');
        },
        toggleNav(state) {
            state.showNav = !state.showNav;
        }
    },
    actions: {
        getGoodsList( context ) {
            context.commit('setGoodsList',goodses)
        },
        getCart(context) {
            context.commit('setCart',cart);
        },
        addCartGoods(context,info) {
            // 实际项目中发送 ajax 请求更新购物车商品数组
            context.commit('addCartGoodsDo',info)
        },
        reduceCartGoods(context,info) {
            // 实际项目中发送 ajax 请求更新购物车商品数组
            let res = context.state.cartList.findIndex(item => item.id === info.id);
            if(context.state.cartList[res].count > 1) {
                context.state.cartList[res].count -= 1;
                return 1;
            }else {
                return 0;
            }
        },
        removeCartGoods(context,info) {
            // 实际项目中发送 ajax 请求更新购物车商品数组
            context.commit('removeCartGoodsDo',info)
        },
        buySelected(context,info) {
            context.commit('buySelectedDo',info);
        }
    },
    modules: {
        //
    }
});

export default store;