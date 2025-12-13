<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Home from './views/Home.vue';
  import Navbar from './components/layout/Navbar.vue';

  import Footer from './components/layout/Footer.vue';
  
  import { useAppStore } from '../srcEx/stores/app';

  const app = useAppStore();

  import { ref, watch, computed,watchEffect } from 'vue';
  import { useRoute } from 'vue-router';

  
  const route = useRoute()
  watchEffect(() => console.log(route, route.path))
</script>

<template>
  <!-- <Home /> -->
    <div class="" :class="app.isDesktopDevice ? 'px-8 py-5' : 'px-4 py-2'">
        <Navbar :path="route.path"/>
        
        <router-view/>

        <!-- <Footer :app="app" :class="[app.isDesktopDevice?'mt-30':'mt-14']"/> -->
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
