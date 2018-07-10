import Vue from 'vue';
import App from './app.vue';
import { router } from './router/index';

new Vue({ // 创建 vue 实例
  // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  el: '#app', 
  // 创建和挂载根实例
  router: router,
  // 声明了 html 中的内容
  render: h => h(App)
})