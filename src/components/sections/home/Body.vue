<script setup>
import { ref, watch, computed, onMounted, onUnmounted } from 'vue';
import AboutUs from './body/AboutUs.vue'
import WhyChooseUs from './body/WhyChooseUs.vue'
import Services from './body/Services.vue'
import Testimonials from './body/Testimonials.vue'
import JoinOurTeam from './body/JoinOurTeam.vue'
import Footer from './body/Footer.vue';
import PartnerWithUs from './body/PartnerWithUs.vue';


const props = defineProps({
    app: Object,
})

</script>

<template>
    <div 
        class="bg-putih mt-3 rounded-md "
        :class="[props.app.isDesktopDevice?'pt-30':'pt-8']"
    >

        <div class="grid"
        :class="[props.app.isDesktopDevice?'gap-30':'gap-14']"
        >
            <AboutUs :app="props.app" />

            <WhyChooseUs :app="props.app"/>

            <Services :app="props.app"/>

            <Testimonials :app="props.app"/>
            
            <PartnerWithUs :app="props.app"/>

            <JoinOurTeam :app="props.app"/>

            <Footer :app="props.app"/>
        </div>

    </div>
</template>