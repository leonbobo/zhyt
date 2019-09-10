import $ from "jquery";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);
import "swiper/dist/css/swiper.css";

import App from "./App.vue";

new Vue({
  el: "#app",
  render: c => c(App)
});
