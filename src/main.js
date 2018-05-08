// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import vueRouter from 'vue-router';
import vueResource from 'vue-resource';
import App from './App';
import Routes from './router/routes';

Vue.use(vueRouter);
Vue.use(vueResource);

Vue.config.productionTip = false;

/****************************************/
/********** Router START here **********/
/**************************************/

const router = new vueRouter({
  mode: 'history',
  routes: Routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
}).$mount('#app');
