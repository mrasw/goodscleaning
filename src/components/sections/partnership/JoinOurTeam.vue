<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    app: Object,
})
</script>


<template>
    <!-- join our team -->
    <section>
        <div class="grid" :class="[props.app.isDesktopDevice ? 'grid-cols-2 gap-16 px-16' : 'px-3 gap-6']">
            <div :class="[props.app.isDesktopDevice?'':'order-2']">
                <div 
                    class="w-full bg-gray-200 max-h-[651px] rounded-3xl"
                    :class="[props.app.isDesktopDevice?'aspect-4/5':'aspect-square']"
                >
                </div>
            </div>
            <div class="content-center"
                :class="[props.app.isDesktopDevice?'':'order-1']"
            >
                <div class="grid"
                :class="[props.app.isDesktopDevice?'gap-10':'gap-6']"
                >
                    <div>
                        <span
                            class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            BERGABUNG BERSAMA KAMI
                        </span>
                    </div>
                    <div class="grid"
                    :class="[props.app.isDesktopDevice?'gap-8':'gap-4']"
                    >
                        <div>
                            <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice ? 'text-5xl' : 'text-3xl']">
                                Menjadi Bagian dari Tim Profesional Goods Cleaning
                            </span>
                        </div>
                        <div class="">
                            <span class="text-base font-poppins-300 text-hijau-text">
                                Bergabunglah dengan Goods Cleaning dan ambil peran penting dalam menghadirkan layanan terbaik.
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