import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './router';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faPhone,
  faEnvelope,
);
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const app = createApp(App);
app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
