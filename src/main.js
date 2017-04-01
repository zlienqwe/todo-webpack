// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueAnimatedList from 'vue2-animate/dist/vue2-animate.css'
import Vue2Filters from 'vue2-filters/dist/vue2-filters.min'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-awesome/icons'

import Trend from 'vuetrend'
import VueHighcharts from 'vue-highcharts';

Vue.use(VueHighcharts);
Vue.use(Trend)
Vue.use(VueAnimatedList)
Vue.use(Vue2Filters)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})




