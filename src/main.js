import Vue from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import VueParticles from "vue-particles";
import Lottie from "vue-lottie";
Vue.component("lottie", Lottie);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "../public/assets/css/template.scss";
Vue.use(BootstrapVue);
Vue.component("apexchart", VueApexCharts);
Vue.use(VueParticles);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
