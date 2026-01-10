<script setup>
import { ref, onMounted, computed } from 'vue';
import { Icon } from "@iconify/vue";

const props = defineProps({
    app: Object,
})
const features = ref([
    {
        'feature': 'Berpengalaman & Terpercaya',
        'icon': "vaadin:medal",
    },
    {
        'feature': 'Penjadwalan Flexible',
        'icon': "hugeicons:date-time",
    },
    {
        'feature': 'Produk Aman & Berkualitas',
        'icon': "streamline-plump:ok-hand-solid",
    },
    {
        'feature': 'Harga Transparan & Hemat',
        'icon': "entypo:price-tag",
    },
])
</script>

<template>

    <section class="">
        <div class="container mx-auto sm:px-4 md:px-8 px-5">
            <div class="grid  items-center"
                :class="[props.app.isDesktopDevice?'lg:grid-cols-2 md:gap-34 sm:gap-17 gap-9':'gap-10']"
            >
                <div class="relative w-full mx-auto flex justify-center" :class="[props.app.isDesktopDevice ? 'order-2 lg:order-1' : 'max-w-3xs order-2']">

                    <!-- padding agar area “keluar” floating tetap punya ruang -->
                    <div class="mt-[10%] mr-[10%] relative aspect-3/4 w-3/4">
                        <!-- MAIN IMAGE -->
                        <div class="absolute inset-0 bg-gray-300 rounded-3xl"></div>
                        <!-- FLOATING IMAGE -->
                        <div class="absolute 
                            -top-[15%]
                            -right-[15%]
                            w-1/2
                            aspect-square
                            bg-gray-200 
                            rounded-2xl 
                            shadow-xl">
                        </div>
                    </div>
                </div>

                <!-- Content Section -->
                <div 
                    :class="[props.app.isDesktopDevice?'order-1 lg:order-2':'order-1']"
                >
                    <div>
                        <span class="font-poppins text-base md:text-lg text-hijau-text 
                                underline underline-offset-8 decoration-hijau-decoration">
                            KENAPA HARUS GOODS CLEANING
                        </span>
                    </div>

                    <div class="mt-6 md:mt-10">
                        <h2 class=" font-poppins-600 text-hijau-text"
                            :class="[props.app.isDesktopDevice?'md:text-5xl sm:text-2xl text-xl':'text-[28px]']"
                        >
                            Mengapa Goods Cleaning menjadi pilihan
                        </h2>

                        <div class="mt-6 md:mt-8 text-hijau-text"
                        :class="[props.app.isDesktopDevice?'gap-6 md:gap-8':'gap-4']"
                        >
                            <div>
                                <p class="md:text-base text-sm  font-poppins-300 leading-relaxed">
                                    Kami percaya perawatan sepatu harus praktis, cepat, dan terjangkau. Dengan teknologi steam uap, proses pencucian lebih efektif dan aman untuk berbagai material. Didukung durasi pengerjaan ±3 hari serta layanan antar jemput, Goods Cleaning hadir sebagai solusi upgrade pencucian bagi yang ingin sepatu bersih maksimal tanpa mengorbankan waktu dan biaya.
                                </p>
                            </div>

                            <div class="">
                                <ul class="grid grid-cols-1 sm:grid-cols-2 font-poppins-500"
                                :class="[props.app.isDesktopDevice?'md:gap-4 sm:gap-3 gap-2 mt-6':'gap-2 mt-4']"
                                >
                                    <li v-for="(item, index) in features" :key="index" class="flex items-center md:gap-3 sm:gap-2 gap-1">
                                        <Icon :icon="item.icon" class="text-hijau-text size-3 sm:size-4 md:size-5"/>
                                        <span class="text-sm md:text-md">{{ item.feature }}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>