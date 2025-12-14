<script setup>
    import Hero from '../components/sections/aboutus/Hero.vue';
    import AboutUs from '../components/sections/aboutus/AboutUs.vue';
    import OurLocation from '../components/sections/aboutus/OurLocation.vue';
    import Footer from '../components/layout/Footer.vue';
    import Testimonials from '../components/layout/Testimonials.vue';

    import { useAppStore } from '../../srcEx/stores/app';
    import { ref, computed, onMounted,  } from 'vue';

    const app = useAppStore()
</script>

<template>
    <div class="w-full grid gap-20 bg-white ">
        <Hero :app="app"/>
        <AboutUs :app="app" />
        <OurLocation :app="app"/>
        <Testimonials :app="app"/>

        <Footer :app="app"/>
    </div>


</template>