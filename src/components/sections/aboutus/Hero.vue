<script setup>
// import hero1 from '../../../assets/images/aboutushero1.jpeg'
import AboutUs01 from '../../../assets/images/aboutus/AboutUs01.webp'

import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    app: Object,
})

    const imageStyle = computed(() => {
        // Formula: basePosition + (width * multiplier)
        // Adjust multiplier sesuai kebutuhan
        return {
            hero1: {
                objectPosition: `50% ${70 + (props.app.width * 0.008)}%`
            },
            AboutUs01: {
                objectPosition: `50% ${70 + (props.app.width * 0.008)}%`
            },
        }
    })
</script>
<template>
    <!-- hero -->
    <section>
        <div 
            class="
                bg-[linear-gradient(to_bottom,#02402C,#05A672)]
                bg-size-[100%_528px]
                bg-no-repeat"
            :class="[props.app.isDesktopDevice?'md:px-28 px-15 pt-13':'px-3 pt-8']"
        >
            <div class="text-white" :class="[props.app.isDesktopDevice?'space-y-14':'space-y-8']">
                <div class="text-center"
                :class="[props.app.isDesktopDevice?'space-y-8':'space-y-3']"
                >
                    <div class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl md:w-2/3 w-5/6 mx-auto font-poppins-700" v-if="props.app.isDesktopDevice">Bawa Kebersihan Sepatu Anda ke Level Baru</div>
                    <div class="md:w-3/4 w-8/9 md:text-md text-sm  mx-auto font-poppins" v-if="props.app.isDesktopDevice">Tim kami berdedikasi untuk memberikan sepatu yang bersih, terawat, dan nyaman dipakai, dengan menggunakan produk terbaik serta teknik pembersihan yang teruji.</div>
                    <div class="text-2xl w-5/6 mx-auto font-poppins-700" v-if="props.app.isMobileDevice">Bringing Clean, Comfort, and Care Together</div>
                    <div class="w-8/9 mx-auto text-base font-poppins" v-if="props.app.isMobileDevice">Tim kami berdedikasi untuk memberikan sepatu yang bersih, terawat, dan nyaman dipakai, dengan menggunakan produk terbaik serta teknik pembersihan yang teruji.</div>
                </div>
                <div>
                    <img :src="AboutUs01" class="object-cover h-120 w-full rounded-3xl" :style="imageStyle.AboutUs01" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- end of hero -->

</template>