import Vue from 'vue';
import Vuex from 'vuex';
// 该数据在实际项目由下面的函数 getGoodsList 发送 ajax 获取
import goodses from '../../remote-data/goods';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        goodsList: []
    },
    getters: {
        colors:  state => (Array.from(new Set(state.goodsList.map(item => item.color)).add('全部'))).reverse(),
        brands:  state => (Array.from(new Set(state.goodsList.map(item => item.brand)).add('全部'))).reverse(),
        sizes:   state => (Array.from(new Set(state.goodsList.map(item => item.size)).add('全部'))).reverse()
    },
    mutations: {
        setGoodsList (state,data) {
            state.goodsList = data;
        }
    },
    actions: {
        getGoodsList( context ) {
            context.commit('setGoodsList',goodses)
        }
    },
    modules: {
        //
    }
});

export default store;