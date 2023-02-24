import { createApp } from 'vue';
import HorizontalCollapsePlugin from './index';
import App from './App.vue';
import '../lib/assets/style.css';

const app = createApp(App);
app.use(HorizontalCollapsePlugin);

app.mount("#app");
