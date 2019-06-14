import Vue from "vue";
import App from "./views/App/index.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
