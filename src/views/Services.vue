<script setup>
    import Hero from '../components/sections/services/Hero.vue';
    import Footer from '../components/layout/Footer.vue';
    import Services from '../components/sections/services/Services.vue';
    import OtherServices from '../components/sections/services/OtherServices.vue';
    import BottomHero from '../components/sections/services/BottomHero.vue';

    // import { useAppStore } from '../../srcEx/stores/app';
    import { useAppStore } from '../stores/app';
    import { ref, computed, onMounted,  } from 'vue';

    const app = useAppStore()
</script>
<template>
    <div class="w-full grid gap-12 bg-white">

        <Hero :app="app" />
        <div class=" grid" 
        :class="[app.isDesktopDevice?'px-17 gap-20':'px-5 gap-8']">
            <Services :app="app"/>
            <OtherServices :app="app"/>
            <BottomHero :app="app"/>
        </div>
        <Footer :app="app"/>
    </div>
</template>