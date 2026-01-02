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
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Go back to saved position on back/forward navigation
    } else if (to.hash) {
      // If there's a hash, scroll to the element with that selector
      return {
        el: to.hash,
        // Optional: add smooth behavior if the browser supports it
        behavior: 'smooth',
      };
    } else {
      return { top: 0 }; // Otherwise, scroll to the top of the page
    }
  },
});

export default router;
