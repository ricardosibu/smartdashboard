import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/tailwind.css";
import VueApexCharts from "vue-apexcharts";
import { dollarFilter } from "@/filter";

Vue.component("apexchart", VueApexCharts);
Vue.filter("dollar", dollarFilter);

Vue.config.productionTip = false;

new Vue({
  router,
  VueApexCharts,
  render: h => h(App)
}).$mount("#app");
