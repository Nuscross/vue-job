import { createApp } from 'vue';
import App from './App.vue';

import './style.css';
import 'primeicons/primeicons.css';

import Toast from "vue-toastification";
import 'vue-toastification/dist/index.css';

import router from "../src/router";

createApp(App).use(router).use(Toast).mount("#app");