import Vue from 'vue'
import App from '../popup/App.vue'
import Router from "../router.js";
import 'bulma'  //'@//node_modules/bulma/css/bulma.css';
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
new Vue({
  router: Router,
  render: h => h(App)
}).$mount("#app");