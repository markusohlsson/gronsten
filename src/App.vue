<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Navigation from './components/Navigation.vue'

</script>

<template>
  <Navigation />
  <RouterView/>
  <Footer />
</template>

<style scoped>

</style>
