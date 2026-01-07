<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    app: Object,
})

</script>


<template>
        <!-- partner with us -->
        <section>
            <div class="grid"
            :class="[props.app.isDesktopDevice?'grid-cols-2 gap-16 px-16':' gap-6 px-3']"
            >
                <div class="content-center">
                    <div 
                        class="grid "
                        :class="[props.app.isDesktopDevice?'gap-10':'gap-6']"
                        >
                        <div>
                            <span
                                class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            BERMITRA BERSAMA GOODS CLEANING
                            </span>
                        </div>
                        <div class="grid gap-8">
                            <div>
                                <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice?'text-5xl':'text-[28px]']"
                                >
                                    Bermitra Bersama Goods Cleaning
                                </span>
                            </div>
                            <div class="grid gap-5">
                                <p class="text-base font-poppins-300 text-hijau-text">
                                    Goods Cleaning membuka peluang bagi Anda untuk bergabung dan menjadi bagian dari ekosistem kami dalam menghadirkan upgrade pencucian sepatu kualitas lebih eksklusif, proses lebih modern, namun tetap hemat bagi pelanggan.
                                </p>
                                <p class="text-base font-poppins-300 text-hijau-text">
                                    Didukung sistem yang telah teruji, metode perawatan profesional, serta pelatihan dan dukungan operasional, kami membantu Anda memberikan layanan pencucian sepatu yang bernilai lebih dan dipercaya.
                                </p>
                            </div>
                        </div>
                        <div class="">
                            <a
                                href="/partnership"
                                class="btn dark:text-kuning dark:bg-hijau-text bg-kuning text-hijau-text border-none shadow-none font-poppins font-bold"
                                :class="[props.app.isDesktopDevice?'':'btn-sm']"
                            >
                                Bermitra Goods Cleaing
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col "
                :class="[props.app.isDesktopDevice?' h-fit gap-4':'h-fit gap-3']"
                >
                    <!-- Top component dengan width 100% -->
                    <div class="bg-gray-200 grow w-full aspect-5/4"
                    :class="[props.app.isDesktopDevice?' rounded-3xl':' rounded-2xl']"
                    ></div>
                    
                    <!-- Bottom container dengan width sama -->
                    <div 
                        class="flex w-full"
                        :class="[props.app.isDesktopDevice?'gap-4':'gap-3']"
                    >
                        <div class="flex-1 aspect-square bg-gray-200 "
                        :class="[props.isDesktopDevice?'rounded-3xl':'rounded-2xl']"
                        ></div>
                        <div class="flex-1 aspect-square bg-gray-200 "
                        :class="[props.isDesktopDevice?'rounded-3xl':'rounded-2xl']"
                        ></div>
                        <div class="flex-1 aspect-square bg-gray-200 "
                        :class="[props.isDesktopDevice?'rounded-3xl':'rounded-2xl']"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
        <!-- end of partner with us -->
</template>