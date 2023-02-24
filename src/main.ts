import { createApp } from 'vue';
import HorizontalCollapsePlugin from './index';
import App from './App.vue';

const app = createApp(App);
app.use(HorizontalCollapsePlugin);

app.mount("#app");
