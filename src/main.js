import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Import the store
import Vue3TouchEvents from 'vue3-touch-events'

const app = createApp(App)
app.use(Vue3TouchEvents)
app.use(router)
app.use(store) // Use the store
app.mount('#app')
