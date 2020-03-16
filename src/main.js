import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import Header from "./components/global/Header.vue"

Vue.config.productionTip = false;
Vue.component("Header", Header);

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-759de/databases/(default)/documents"

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
