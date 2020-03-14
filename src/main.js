import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Header from "./components/global/Header.vue"

Vue.config.productionTip = false;
Vue.component("Header", Header);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
