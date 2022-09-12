import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// import router from './routes.js';

import CollectionArea from "./components/CollectionArea.vue";

Vue.config.productionTip = false;

// Vue.use(route)

Vue.component("collection-area", CollectionArea);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
