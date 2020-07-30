import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false;

new Vue({
  Router,
  render: h => h(App)
}).$mount("#app");
