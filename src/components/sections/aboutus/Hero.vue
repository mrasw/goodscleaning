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
            :class="['px-28']"
        >
            <div :class="[props.app.isDesktopDevice?'space-y-14':'']">
                <div class="text-center space-y-8">
                    <div class="text-6xl w-2/3 mx-auto font-poppins-700">Cleaning Your Shoes with Care and Compassion</div>
                    <div class="w-3/4 mx-auto">Tim kami berdedikasi untuk memberikan sepatu yang bersih, terawat, dan nyaman dipakai, dengan menggunakan produk terbaik serta teknik pembersihan yang teruji.</div>
                </div>
                <div>
                    <img :src="hero1" class="object-cover h-120 w-full rounded-3xl" :style="imageStyle.hero1" alt="">
                </div>
            </div>
        </div>
    </section>
    <!-- end of hero -->

</template>