<script setup>
import hero1 from '../../../assets/images/aboutushero1.jpeg'

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
            }
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
            :class="[props.app.isDesktopDevice?'px-28 pt-13':'px-3 pt-8']"
        >
            <div class="text-white" :class="[props.app.isDesktopDevice?'space-y-14':'space-y-8']">
                <div class="text-center"
                :class="[props.app.isDesktopDevice?'space-y-8':'space-y-3']"
                >
                    <div class="text-6xl w-2/3 mx-auto font-poppins-700" v-if="props.app.isDesktopDevice">Cleaning Your Shoes with Care and Compassion</div>
                    <div class="w-3/4 mx-auto font-poppins" v-if="props.app.isDesktopDevice">Tim kami berdedikasi untuk memberikan sepatu yang bersih, terawat, dan nyaman dipakai, dengan menggunakan produk terbaik serta teknik pembersihan yang teruji.</div>
                    <div class="text-2xl w-5/6 mx-auto font-poppins-700" v-if="props.app.isMobileDevice">Bringing Clean, Comfort, and Care Together</div>
                    <div class="w-8/9 mx-auto text-base font-poppins" v-if="props.app.isMobileDevice">Tim kami berdedikasi untuk memberikan sepatu yang bersih, terawat, dan nyaman dipakai, dengan menggunakan produk terbaik serta teknik pembersihan yang teruji.</div>
                </div>
                <div>
                    <img :src="hero1" class="object-cover h-120 w-full rounded-3xl" :style="imageStyle.hero1" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- end of hero -->

</template>