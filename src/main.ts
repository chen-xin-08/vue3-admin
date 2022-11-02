import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import TDesign from "tdesign-vue-next";
import { createPinia } from "pinia";
// 引入组件库全局样式资源
import "tdesign-vue-next/dist/reset.css";
import "tdesign-vue-next/es/style/index.css";

const app = createApp(App);
app.use(router).use(TDesign).use(createPinia()).mount("#app");
