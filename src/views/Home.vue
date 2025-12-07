<script setup>
import Navbar from '../components/layout/Navbar.vue';
import Hero from '../components/sections/home/Hero.vue';
import Marquee from '../components/sections/home/Marquee.vue';
import Body from '../components/sections/home/Body.vue';

import { useAppStore } from '../../srcEx/stores/app';

const app = useAppStore();
import { ref, watch, computed } from 'vue';

</script>

<template>
    <div class="" :class="app.isDesktopDevice ? 'px-8 py-5' : 'px-4 py-2'">
        <Navbar />

        <Hero :app="app"/>
        <Marquee :app="app"/>
        <Body :app="app"/>
    </div>
</template>

<style></style>