import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from "axios";
import Header from "./components/global/Header.vue"
import Footer from "./components/global/Footer.vue"
import store from "./store"

Vue.config.productionTip = false;
Vue.component("Header", Header);
Vue.component("Footer", Footer);

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/vuejs-759de/databases/(default)/documents"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
