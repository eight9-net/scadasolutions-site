import { createRouter, createWebHashHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Home from '../views/Home.vue';

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
        component: () => import('../views/Company.vue')
      },
      {
        path: 'scada',
        name: 'scada',
        component: () => import('../views/Scada.vue')
      },
      {
        path: 'communications',
        name: 'communications',
        component: () => import('../views/Communications.vue')
      },
      {
        path: 'scope-of-work-process',
        name: 'scopeofworkprocess',
        component: () => import('../views/ScopeOfWorkProcess.vue')
      },
      {
        path: 'request-a-quote',
        name: 'requestaquote',
        component: () => import('../views/RequestAQuote.vue')
      },
      {
        path: 'wind-energy-tutorial',
        name: 'windenergytutorial',
        component: () => import('../views/WindEnergyTutorial.vue')
      },
      {
        path: 'careers',
        name: 'careers',
        component: () => import('../views/Careers.vue')
      },
      {
        path: 'sample',
        name: 'sample',
        component: () => import('../views/Sample.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
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
