import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import {i18n} from './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap'
import './assets/sass/common.sass';

createApp(App).use(i18n).use(router).mount('#app');
