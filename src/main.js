import Vue from "vue"
import Vuex from 'vuex'
import Router from 'vue-router'
import App from "./views/App/index.vue"
import FishUI from 'fish-ui'
import storeConfig from './store/index'
import routes from "./routes/index"

Vue.use(Vuex)
Vue.use(Router)
Vue.use(FishUI)

Vue.config.productionTip = false;

const store = new Vuex.Store(storeConfig)
const router = new Router({
  routes: routes,
  mode: 'hash'
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
