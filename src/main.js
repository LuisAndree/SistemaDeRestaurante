import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import {routes} from './routes';

const router = new VueRouter({
  routes : routes,
  mode: 'history'
});
Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
