/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useUserStore } from '@/stores/user';
// Components
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
registerPlugins(app);


const userStore = useUserStore();
userStore.initialize();

app.mount('#app');
