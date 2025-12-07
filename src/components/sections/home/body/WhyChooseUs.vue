<script setup>
import { ref, onMounted, computed } from 'vue';
import { Icon } from "@iconify/vue";

const props = defineProps({
    app: Object,
})
const features = ref([
    {
        'feature': 'Experience & Reliable',
        'icon': "vaadin:medal",
    },
    {
        'feature': 'Good Products',
        'icon': "streamline-plump:ok-hand-solid",
    },
    {
        'feature': 'Flexible Scheduling',
        'icon': "hugeicons:date-time",
    },
    {
        'feature': 'Transparent Pricing',
        'icon': "entypo:price-tag",
    },
])
</script>

<template>

    <section class="">
        <div class="container mx-auto px-4 md:px-8">
            <div class="grid  items-center"
                :class="[props.app.isDesktopDevice?'grid-cols-2 gap-34':'gap-6']"
            >
                <div class="relative w-full mx-auto flex justify-center" :class="[props.app.isDesktopDevice ? '' : 'max-w-3xs order-2']">

                    <!-- padding agar area “keluar” floating tetap punya ruang -->
                    <div class="mt-[10%] mr-[10%] relative aspect-[3/4] w-3/4">
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
                    :class="[props.app.isDesktopDevice?'':'order-1']"
                >
                    <div>
                        <span class="font-poppins text-base text-hijau-text 
                                underline underline-offset-8 decoration-hijau-decoration">
                            WHY CHOOSE US
                        </span>
                    </div>

                    <div class="mt-6 md:mt-10">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-poppins-600 text-hijau-text">
                            Why Clients Love Our Cleaning Services
                        </h2>

                        <div class="mt-6 md:mt-8 text-hijau-text"
                        :class="[props.app.isDesktopDevice?'gap-6 md:gap-8':'gap-4']"
                        >
                            <div>
                                <p class="text-base md:text-lg font-poppins-300 leading-relaxed">
                                    Kami berkomitmen pada kualitas, keandalan, dan kepedulian di setiap layanan.
                                    Dengan produk aman, jadwal jelas, dan harga transparan, kami hadir untuk
                                    memberikan kenyamanan serta kepuasan maksimal bagi setiap pelanggan.
                                </p>
                            </div>

                            <div class="">
                                <ul class="grid grid-cols-1 sm:grid-cols-2 font-poppins-500"
                                :class="[props.app.isDesktopDevice?'gap-4':'gap-2']"
                                >
                                    <li v-for="(item, index) in features" :key="index" class="flex items-center gap-3">
                                        <!-- <Icon :icon="[item.icon]" width="16" height="16"  :style="{color: '#E8C100'}"/> -->
                                        <span class="text-3xl text-hijau-100">•</span>
                                        <span>{{ item.feature }}</span>
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