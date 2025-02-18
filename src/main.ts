import { createApp } from 'vue';
import HorizontalCollapsePlugin from './index';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Correct imports for Vue 3
const routes:any = [];
const router = createRouter({
  history: createWebHistory(), // Use appropriate history mode
  routes,
});
const app = createApp(App);
app.use(router);
app.use(HorizontalCollapsePlugin);

app.mount("#app");
