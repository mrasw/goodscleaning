<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    app: Object,
})
</script>


<template>
    <!-- join our team -->
    <section>
        <div class="grid gap-16" :class="[props.app.isDesktopDevice ? 'grid-cols-2 gap-16 px-16' : 'px-3']">
            <div>
                <div class=" h-126 bg-gray-200 max-h-126 rounded-3xl"></div>
            </div>
            <div class="content-center">
                <div class="grid gap-10">
                    <div>
                        <span
                            class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            JOIN OUR TEAM
                        </span>
                    </div>
                    <div class="grid gap-8">
                        <div>
                            <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice ? 'text-5xl' : 'text-3xl']">
                                Join Our Team of Professionals Cleaners
                            </span>
                        </div>
                        <div class="">
                            <span class="text-base font-poppins-300 text-hijau-text">
                                Bergabunglah dengan tim Goods CLeaning dan rasakan suasana kerja yang
                                profesional, suportif, dan penuh semangat. nda akan mendapatkan pengalaman
                                berharga, mengasah keterampilan perawatan sepatu, dan menjadi bagian dari tim
                                yang selalu menjaga kualitas terbaik.
                            </span>
                        </div>
                    </div>
                    <div class="">
                        <a href="https://forms.gle/qqPPtMrVgqyCXFRb7" target="_blank"
                            class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold">
                            Join Team
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of join our team -->
</template>