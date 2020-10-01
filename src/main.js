import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./js/firebase";
import "./assets/css/style.css";
import "swiper/swiper-bundle.min.css";
import vueAwsomeSwiper from "vue-awesome-swiper";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faSlack,
  faGitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faTwitter, faSlack, faGitter);

Vue.config.productionTip = false;
let app;

Vue.use(vueAwsomeSwiper);
Vue.component("font-awesome-icon", FontAwesomeIcon);

auth.onAuthStateChanged((user) => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }

  if (user) {
    console.log(user.name);
    store.dispatch("fetchUserProfile", user);
  }
});
