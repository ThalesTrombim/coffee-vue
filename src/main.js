import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// import router from './routes.js';

Vue.config.productionTip = false;

// Vue.use(route)

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
