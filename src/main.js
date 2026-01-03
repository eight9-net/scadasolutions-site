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
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faBars,
  faPhone,
  faEnvelope,
  faTimes,
);
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(
  faLinkedin
);

const app = createApp(App);

// Global Helpers
const getImageUrl = function(image) {
  return new URL('/images/' + image, import.meta.url).href
}
app.config.globalProperties.$getImageUrl = getImageUrl;

// Global Components
import ContentLeftSection from './components/ContentLeftSection.vue';
import ContentRightSection from './components/ContentRightSection.vue';
import ContentFullSection from './components/ContentFullSection.vue';
import ContactButton from './components/ContactButton.vue';
app.component('ContentLeftSection', ContentLeftSection);
app.component('ContentRightSection', ContentRightSection);
app.component('ContentFullSection', ContentFullSection);
app.component('ContactButton', ContactButton);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
