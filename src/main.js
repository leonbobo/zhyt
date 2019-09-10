import $ from "jquery";
import Swiper from "swiper";
import Vue from "vue";
import "swiper/dist/css/swiper.css";
import "./css/index.css"

import App from "./App.vue";

new Vue({
  el: "#app",
  data:{},
  render: c => c(App),
    mounted(){
      var mySwiper = new Swiper('.swiper-container',{
        direction: "vertical",
        speed:3000
      })
  
    },
});
