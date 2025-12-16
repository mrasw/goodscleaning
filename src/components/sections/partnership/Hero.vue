<script setup>

import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    app: Object,
})

</script>
<template>
    <section>
        <div class="
            bg-linear-to-b from-hijau-text to-hijau-1 space-y-8 pt-13 pb-11
        ">
            <div class="text-center">
                <article class="prose text-white font-poppins-500 mx-auto"
                :class="[props.app.isDesktopDevice?'text-6xl w-3/4':'text-2xl']"
                >
                    <span>Grow With Us<br>Become a Goods Cleaning Partner</span>
                </article>
            </div>
            <div class="text-center">
                <div class=" text-white font-poppins mx-auto w-3/4"
                :class="[props.app.isDesktopDevice?'text-xl':'text-base']"
                >
                    <span>
                        Bergabunglah menjadi bagian dari kami sebagai mitra maupun tim profesional dengan sistem kerja yang telah terbukti, pelatihan profesional, dan dukungan penuh, Anda dapat membangun karier atau bisnis yang cepat berkembang, hemat biaya, dan tetap berkualitas.
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>