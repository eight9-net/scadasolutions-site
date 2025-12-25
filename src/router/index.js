import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import Scada from '../views/Scada.vue';
import Communications from '../views/Communications.vue';
import News from '../views/News.vue';
import Careers from '../views/Careers.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'company',
        name: 'Company',
        component: Company
      },
      {
        path: 'scada',
        name: 'Scada',
        component: Scada
      },
      {
        path: 'communications',
        name: 'Communications',
        component: Communications
      },
      {
        path: 'news',
        name: 'News',
        component: News
      },
      {
        path: 'careers',
        name: 'Careers',
        component: Careers
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
