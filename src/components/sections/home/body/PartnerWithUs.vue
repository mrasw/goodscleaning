<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
    app: Object,
})

console.log('oi')
</script>


<template>
        <!-- partner with us -->
        <section>
            <div class="grid gap-16"
            :class="[props.app.isDesktopDevice?'grid-cols-2 gap-16 px-16':'px-3']"
            >
                <div class="content-center">
                    <div class="grid gap-10">
                        <div>
                            <span
                                class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            PARTNER WITH US
                            </span>
                        </div>
                        <div class="grid gap-8">
                            <div>
                                <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice?'text-5xl':'text-3xl']"
                                >
                                    Grow Your Own Goods Cleaning Branch
                                </span>
                            </div>
                            <div class="grid gap-5">
                                <p class="text-base font-poppins-300 text-hijau-text">
                                    Ingin membuka cabang Goods Cleaning di kota Anda? Kami membuka kesempatan kemitraan bagi Anda yang ingin bergabung dan mengembangkan bisnis pembersihan sepatu profesional. Dapatkan dukungan operasional, pelatihan, dan sistem kerja yang telah terbukti.
                                </p>
                                <p class="text-base font-poppins-300 text-hijau-text">
                                    Hubungi kami sekarang dan jadilah bagian dari jaringan Goods Cleaning!
                                </p>
                            </div>
                        </div>
                        <div class="">
                            <a href="#" target="_blank"
                                class="btn dark:text-kuning dark:bg-hijau-text bg-kuning text-hijau-text border-none shadow-none font-poppins font-bold">
                                Join as Partner
                            </a>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col "
                :class="[props.app.isDesktopDevice?' h-[584px] gap-4':'h-[355px] gap-3']"
                >
                    <!-- Top component dengan width 100% -->
                    <div class="bg-gray-200 grow w-full"
                    :class="[props.app.isDesktopDevice?' rounded-3xl':' rounded-2xl']"
                    ></div>
                    
                    <!-- Bottom container dengan width sama -->
                    <div class="flex gap-4 w-full">
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