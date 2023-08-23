import './assets/main.css';

import { createApp } from 'vue';
import { createPinia  } from 'pinia';

import App from './App.vue';
import router from './router';

import { ElTable,ElButton } from 'element-plus';
import './utils/rem';

const app = createApp(App);

app.use(createPinia());
app.use(router).use(ElTable).use(ElButton);

app.mount('#app');
