import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Products from '../components/Products.vue';
import Bigardar from '../components/Bigardar.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

const router = createRouter({
  history: createWebHistory('/gronsten/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Hem' } // Example of setting a default title
    },
    {
      path: '/produkter',
      name: 'Produkter',
      component: Products,
      meta: { title: 'Produkter' }
    },
    {
      path: '/bigardar',
      name: 'Bigårdar',
      component: Bigardar,
      meta: { title: 'Bigårdar' }
    },
    {
      path: '/om-oss',
      name: 'Om Oss',
      component: About,
      meta: { title: 'Om Oss' }
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Contact,
      meta: { title: 'Kontakt' }
    }
  ]
});

// Set document title dynamically based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' | ' + 'Grönstenen Biodling'; // Default title if no meta.title is specified
  next();
});

export default router;
