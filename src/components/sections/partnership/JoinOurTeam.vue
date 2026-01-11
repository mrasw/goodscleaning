<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    app: Object,
})
</script>


<template>
    <!-- join our team -->
    <section>
        <div class="grid" :class="[props.app.isDesktopDevice ? 'md:grid-cols-2 md:gap-16 gap-6' : 'px-3 gap-6']">
            <div :class="[props.app.isDesktopDevice?'md:order-1 order-2':'order-2']">
                <div 
                    class="w-full bg-gray-200 max-h-[651px] rounded-3xl"
                    :class="[props.app.isDesktopDevice?'aspect-4/5':'aspect-square']"
                >
                </div>
            </div>
            <div class="content-center"
                :class="[props.app.isDesktopDevice?'md:order-2 order-1':'order-1']"
            >
                <div class="grid"
                :class="[props.app.isDesktopDevice?'md:gap-10 gap-6':'gap-6']"
                >
                    <div>
                        <span
                            class="font-poppins text-base md:text-lg text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            BERGABUNG BERSAMA KAMI
                        </span>
                    </div>
                    <div class="grid"
                    :class="[props.app.isDesktopDevice?'md:gap-8 gap-4':'gap-4']"
                    >
                        <div>
                            <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice ? 'md:text-5xl sm:text-2xl text-xl' : 'text-[28px]']">
                                Menjadi Bagian dari Tim Profesional Goods Cleaning
                            </span>
                        </div>
                        <div class="">
                            <span class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                Bergabunglah dengan Goods Cleaning dan ambil peran penting dalam menghadirkan layanan terbaik.
                            </span>
                        </div>
                    </div>
                    <div class="">
                        <!-- class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold"> -->
                        <a href="https://forms.gle/qqPPtMrVgqyCXFRb7" target="_blank"
                            class="btn dark:text-kuning dark:bg-hijau-text bg-kuning text-hijau-text border-none shadow-none font-poppins font-bold"
                            :class="[props.app.isDesktopDevice?'md:btn-md btn-sm':'btn-sm']"
                        >
                            Gabung Tim
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of join our team -->
</template>