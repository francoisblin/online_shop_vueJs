import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters'
import router from './router'
import axios from 'axios'
import store from './store/store'

Object.keys(Filters).forEach((f) => {
  Vue.filter(f, Filters[f])
})

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://vue-online-shop-8f09e-default-rtdb.europe-west1.firebasedatabase.app/'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
