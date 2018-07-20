import Vue from 'vue';
import Vuex from 'vuex';
// 以下数据在实际项目由下面的函数 getGoodsList、getCart 发送 ajax 获取
import goodses from '../../remote-data/goods';
import cart from '../../remote-data/cart';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
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
            // 实际项目中发送 ajax 请求更新购物车
            let res = context.state.cartList.findIndex(item => item.id === info.id);
            if(res < 0) {
                let ori = context.state.goodsList.find(item => item.id === info.id);
                ori.count = 1;
                context.state.cartList.push(ori);
            }else {
                context.state.cartList[res].count += 1;
            }
        }
    },
    modules: {
        //
    }
});

export default store;