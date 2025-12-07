<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    app: Object,
})
</script>


<template>
        <!-- join our team -->
        <section>
            <div class="grid gap-16"
            :class="[props.app.isDesktopDevice?'grid-cols-2 gap-16 px-16 py-21':'px-3 py-4']"
            >
                <div class="content-center">
                    <div>
                        <div>
                            <span
                                class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            Join Our Team
                            </span>
                        </div>
                        <div class="mt-10">
                            <div>
                                <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice?'text-5xl':'text-3xl']"
                                >
                                    Join Our Team of Professionals Cleaners
                                </span>
                            </div>
                            <div class="mt-8">
                                <span class="text-base font-poppins-300 text-hijau-text">
                                    Bergabunglah dengan tim Goods CLeaning dan rasakan suasana kerja yang profesional, suportif, dan penuh semangat. nda akan mendapatkan pengalaman berharga, mengasah keterampilan perawatan sepatu, dan menjadi bagian dari tim yang selalu menjaga kualitas terbaik.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="w-full h-[651px] bg-gray-200 max-h-[651px] rounded-3xl"></div>
                </div>
            </div>
        </section>
        <!-- end of join our team -->
</template>