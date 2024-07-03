import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../components/Products.vue'
import Bigardar from '../components/Bigardar.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

const router = createRouter({
  history: createWebHistory('/gronsten/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
