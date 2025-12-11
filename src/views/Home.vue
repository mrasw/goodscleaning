<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Hero from '../components/sections/home/Hero.vue';
import Marquee from '../components/sections/home/Marquee.vue';
import Body from '../components/sections/home/Body.vue';

import { useAppStore } from '../../srcEx/stores/app';

const app = useAppStore();
import { ref, watch, computed,watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
watchEffect(() => console.log(route, route.path))

</script>

<template>
    <!-- <div class="" :class="app.isDesktopDevice ? 'px-8 py-5' : 'px-4 py-2'">
        <Navbar :path="route.path"/>

    </div> -->
    <Hero :app="app"/>
    <Marquee :app="app"/>
    <Body :app="app"/>
</template>

<style></style>