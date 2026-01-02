import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './router';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faBars,
  faPhone,
  faEnvelope,
);
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App);

// Global Helpers
const getImageUrl = function(image) {
  return new URL('/images/' + image, import.meta.url).href
}
app.config.globalProperties.$getImageUrl = getImageUrl;


app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
