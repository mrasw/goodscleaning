<script setup>
    import { ref, watch, computed } from 'vue';
    import { Vue3Marquee } from "vue3-marquee";

    const props = defineProps({
        app: Object,
    })

    const tagLines = ref(['Cuci Cepat Tetap Hemat',])

</script>

<template>
    <section>
        <Vue3Marquee 
            class="mt-3 rounded-md font-poppins text-kuning-3 bg-hijau-text overflow-hidden"
            :clone="true"
        >
            <span v-for="(tag, index) in tagLines" :key="index"
                class="flex items-center"
                :class="[props.app.isDesktopDevice?'text-xl':'text-xs']"
            >
                <span v-if="index == 0" class="mx-4 text-3xl text-kuning-3">•</span>
                <span class="font-poppins-500 text-base">
                    {{ tag }}
                </span>
                <span v-if="index < tagLines.length - 1" class="mx-4 text-3xl text-kuning-3">•</span>
            </span>
        </Vue3Marquee>
    </section>
</template>
                    