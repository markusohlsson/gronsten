import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../components/Products.vue'
import Bigardar from '../components/Bigardar.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/produkter',
      name:'Produkter',
      component: Products
    },
    {
      path:'/bigardar',
      name:'Bigårdar',
      component: Bigardar
    },
    {
      path:'/om-oss',
      name:'Om Oss',
      component: About
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: Contact
    }
  ]
})

export default router
