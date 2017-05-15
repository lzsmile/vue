import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './assets/js/Adaptive'


import VueRouter from 'vue-router';

//配置axios
import axios from 'axios'
Vue.prototype.$http=axios;

//状态管理
import store from './store';
//配置路由
Vue.use(VueRouter);
 import routes from './router.config'
const router=new VueRouter(routes);

 //配置loading
import loading from './components/loading'
Vue.use(loading);
//引入动画
import 'animate.css'
new Vue({
  el: '#app',
  render: h => h(App),
    router,
    store
});
