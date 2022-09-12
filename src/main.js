import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// import router from './routes.js';

import CollectionArea from "./components/CollectionArea.vue";
import CapsulesCoffees from "./components/CapsulesCoffees.vue";

Vue.config.productionTip = false;

// Vue.use(route)

Vue.component("collection-area", CollectionArea);
Vue.component("capsules-coffees", CapsulesCoffees);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
