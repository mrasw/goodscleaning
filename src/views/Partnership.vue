<script setup>
    import Hero from '../components/sections/partnership/Hero.vue';
    import AboutUs from '../components/sections/partnership/AboutUs.vue';
    import OurTrustedPartner from '../components/sections/partnership/OurTrustedPartner.vue';
    import JoinOurTeam from '../components/sections/partnership/JoinOurTeam.vue';
    import Footer from '../components/layout/Footer.vue';

    import { useAppStore } from '../../srcEx/stores/app';
    import { ref, computed, onMounted,  } from 'vue';

    const app = useAppStore()

</script>


<template>
    <section>
        <Hero :app="app"/>
        <div class="grid px-15 bg-putih "
            :class="[app.isDesktopDevice?'pt-15 pb-20 gap-40':'pt-8']"
        >
            <AboutUs :app="app"/>
            <OurTrustedPartner :app="app"/>
            <JoinOurTeam :app="app"/>
        </div>
            <Footer :app="app" class=""/>
    </section>
</template>