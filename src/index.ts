import type { App } from 'vue';
import HorizontalCollapseMain from '../lib/components/Main.vue';

export default {
    install: (app: App) => {
        app.component("HorizontalCollapseMain", HorizontalCollapseMain);
    }
}