import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import Scada from '../views/Scada.vue';
import Communications from '../views/Communications.vue';
import ScopeOfWorkProcess from '../views/ScopeOfWorkProcess.vue';
import RequestAQuote from '../views/RequestAQuote.vue';
import WindEnergyTutorial from '../views/WindEnergyTutorial.vue';
import WindFacts from '../views/WindFacts.vue';
import Glossary from '../views/Glossary.vue';
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
        name: 'home',
        component: Home
      },
      {
        path: 'company',
        name: 'company',
        component: Company
      },
      {
        path: 'scada',
        name: 'scada',
        component: Scada
      },
      {
        path: 'communications',
        name: 'communications',
        component: Communications
      },
      {
        path: 'scope-of-work-process',
        name: 'scopeofworkprocess',
        component: ScopeOfWorkProcess
      },
      {
        path: 'request-a-quote',
        name: 'requestaquote',
        component: RequestAQuote
      },
      {
        path: 'wind-energy-tutorial',
        name: 'windenergytutorial',
        component: WindEnergyTutorial
      },
      {
        path: 'wind-facts',
        name: 'windfacts',
        component: WindFacts
      },
      {
        path: 'glossary',
        name: 'glossary',
        component: Glossary
      },
      {
        path: 'careers',
        name: 'careers',
        component: Careers
      },
      {
        path: 'news',
        name: 'news',
        component: News
      },
      {
        path: 'contact',
        name: 'contact',
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
