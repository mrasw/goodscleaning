<script setup>
    import Hero from '../components/sections/aboutus/Hero.vue';
    import AboutUs from '../components/sections/aboutus/AboutUs.vue';
    import OurLocation from '../components/sections/aboutus/OurLocation.vue';
    import Footer from '../components/layout/Footer.vue';
    import Testimonials from '../components/sections/home/body/Testimonials.vue';

    import { useAppStore } from '../../srcEx/stores/app';
    import { ref, computed, onMounted,  } from 'vue';

    const app = useAppStore()
</script>

<template>
    <div class="w-full bg-white grid gap-20
        bg-[linear-gradient(to_bottom,#02402C,#05A672)]
        bg-size-[100%_528px]
        bg-no-repeat"
        :class="['pt-13']"
    >
        <Hero :app="app"/>
        <AboutUs :app="app" />
        <OurLocation :app="app"/>
        <Testimonials :app="app"/>

        <Footer :app="app"/>
    </div>


</template>