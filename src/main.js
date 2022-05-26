import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router/index";
import store from "./store/index";

library.add(faStar, faUpload);

let app;

store.dispatch("user/onAuthChange", () => {
  if (!app) {
    app = createApp(App);
    app.use(store).use(router).use(Toast);

    app.component("font-awsome-icon", FontAwesomeIcon);

    app.mount("#app");
  }
});
