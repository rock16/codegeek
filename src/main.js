import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./js/firebase";
import "./assets/css/style.css";

Vue.config.productionTip = false;
let app;

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
