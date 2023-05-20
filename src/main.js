import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueMaterial from "vue-material";
Vue.config.productionTip = false;
Vue.use(VueMaterial);
new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
