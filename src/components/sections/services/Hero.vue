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
            "
            :class="[props.app.isDesktopDevice?'':'px-3']"
            >
            <div class="text-center">
                <article class="prose text-white font-poppins-500 mx-auto px-5"
                :class="[props.app.isDesktopDevice?'text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-2/3':'text-2xl']"
                >
                    <span>Layanan Kebersihan Profesional Kami</span>
                </article>
            </div>
            <div class="text-center px-3">
                <article class="prose text-white font-poppins mx-auto"
                :class="[props.app.isDesktopDevice?'md:text-md text-sm':'text-base']"
                >
                    <span>
                        Kami menawarkan berbagai layanan pembersihan profesional yang dirancang khusus untuk memenuhi kebutuhan personal Anda.
                    </span>
                </article>
            </div>
        </div>
    </section>
</template>