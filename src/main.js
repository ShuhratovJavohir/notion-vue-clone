import { createApp } from "vue";
import "@/assets/style/main.scss";
import App from "./App.vue";
import { createPinia } from "pinia";

let app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.mount("#app");
