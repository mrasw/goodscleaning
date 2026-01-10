<script setup>
import before1 from '../../../../assets/images/before1.jpeg'
import before2 from '../../../../assets/images/before2.jpeg'
import after1 from '../../../../assets/images/after1.jpeg'
import after2 from '../../../../assets/images/after2.jpeg'
import casuala1 from '../../../../assets/images/casuala1.jpeg'
import casuala2 from '../../../../assets/images/casuala2.jpeg'
import casualb1 from '../../../../assets/images/casualb1.jpeg'
import casualb2 from '../../../../assets/images/casualb2.jpeg'
import resultba from '../../../../assets/videos/result.mp4'

import { ref, computed, onMounted } from 'vue'

const props = defineProps({
    app: Object,
})

const services = ref([
    {
        'name': 'Basic Cleaning',
        'desc': 'Mencuci hanya bagian luar (Footer, Upper, Midsol, dan Tali Sepatu)',
    },
    {
        'name': 'Deep Cleaning',
        'desc': 'Mencuci secara menyeluruh untuk sepatu berwarna',
    },
    {
        'name': 'White Shoes Cleaning',
        'desc': 'Mencuci secara menyeluruh khusus sepatu putih (Footer, Upper, Midsol, dan Tali Sepatu)',
    },
    {
        'name': 'Leather Shoes Cleaning',
        'desc': 'Mencuci secara menyeluruh khusus sepatu kulit (Footer, Upper, Midsol, dan Tali Sepatu)',
    },
    {
        'name': 'Extra Services',
        'desc': 'Jasa tambahan untuk mempercepat pencucian',
    },
    {
        'name': 'Other Services',
        'desc': 'Jasa lain seperti Unyellowing, Repaint, Reglue, dan Repair untuk berbagai ukuran sepatu',
    },
])
</script>

<template>
    <!-- services -->
    <section>
        <div :class="[props.app.isDesktopDevice ? 'md:mx-17' : 'mx-3']">
            <div>
                <div class="justify-items-center">
                    <div :class="[props.app.isDesktopDevice ? 'md:w-3/4 w-5/6 ' : 'w-full']">
                        <div class="text-center">
                            <span
                                class="font-poppins text-sm md:text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                                LAYANAN KAMI
                            </span>
                        </div>
                        <div class="mt-6 md:mt-10 text-center">
                            <div>
                                <span class="font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice?'md:text-5xl sm:text-2xl text-xl':'text-[28px]']"
                                >
                                    Solusi Upgrade Pencucian Sepatu Sesuai Kebutuhan Anda
                                </span>
                            </div>
                            <div class="mt-6">
                                <span class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                    Kami menghadirkan pengalaman perawatan sepatu yang dirancang untuk meng-upgrade standar kebersihan dan kualitas sepatu Anda. Dengan proses rapi, teliti, dan penuh perhatian pada detail, sepatu kembali bersih, terawat, dan tampil maksimal.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div 
                :class="[props.app.isDesktopDevice?'gap-10':'gap-8']"
                >
                    <!-- <div class="grid lg:grid-cols-3 lg:grid-flow-row grid-cols-2 grid-flow-row text-hijau-text gap-6" > -->
                    <!-- <div class="grid grid-flow-row text-hijau-text gap-6 mt-10 place-content-center justify-items-center"> -->
                    <div class="grid text-hijau-text gap-6 mt-10 place-content-center justify-items-center"
                        :class="[props.app.isDesktopDevice ? 'grid-cols-[repeat(auto-fit,minmax(330px,1fr))]' : 'grid-flow-row']">
                        <div class="card w-full px-5 sm:px-0" v-for="service in services">
                            <!-- <figure class="">
                                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes" class="rounded-xl" />
                                </figure> -->
                                <div>
                                    <div class="bg-gray-300 w-3/4 md:w-full aspect-video rounded-2xl mx-auto" ></div>
                                </div>
                            <div class="card-body px-0 text-center">
                                <h2 class="card-title mx-auto bg-kuning-3 px-2 text-base md:text-lg">{{ service.name }}</h2>
                                <p class="text-sm md:text-base">{{ service.desc }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="justify-items-center">
                        <div class="w-fit">
                            <!-- class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold" -->
                            <a
                                href="/services"
                                class="btn btn-xs sm:btn-sm md:btn-md text-hijau-text bg-kuning dark:bg-hijau-text dark:text-kuning border-none shadow-none font-poppins font-bold"
                                :class="[props.app.isDesktopDevice?'':'btn-sm']"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="[props.app.isDesktopDevice ? 'md:mt-30 sm:mt-17 mt-15' : 'mt-14']" class=""
            >
                <div class="text-center">
                    <span class="md:text-5xl sm:text-2xl text-xl font-poppins-600 text-hijau-text" v-if="props.app.isDesktopDevice">
                        Hasil Pencucian Kami
                    </span>
                    <span class="text-[28px] font-poppins-600 text-hijau-text" v-else-if="props.app.isMobileDevice">
                        Hasil Pencucian Kami
                    </span>
                </div>
                <div class="grid "
                :class="[props.app.isDesktopDevice ? 'grid-cols-[repeat(auto-fit,minmax(475px,1fr))] md:mt-15 mt-7 gap-6 ' : 'mt-6 gap-4']">
                    <div class="max-w-3xl mx-auto px-5 md:px-0">
                        <div>
                            <figure class="diff aspect-3/2 rounded-3xl" tabindex="0">
                                <div class="diff-item-1" role="img" tabindex="0">
                                    <img alt="daisy" :src="[before1]" />
                                </div>
                                <div class="diff-item-2" role="img">
                                    <img alt="daisy" :src="[after1]" />
                                </div>
                                <div class="diff-resizer"></div>
                            </figure>
                        </div>
                        <div class="flex justify-between  mt-4 "
                            :class="[props.app.isDesktopDevice?'gap-6':'gap-4']"
                        >
                            <div class="max-w-[339px] flex items-end">
                                <figure class="hover-gallery rounded-3xl">
                                    <img :src="[casualb1]" />
                                    <img :src="[casuala1]" />
                                </figure>
                            </div>
                            <div class="max-w-[339px] flex items-end">
                                <figure class="hover-gallery rounded-3xl">
                                    <img :src="[casualb2]" />
                                    <img :src="[casuala2]" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 md:px-0">
                        <div class="max-w-3xl mx-auto h-full">
                            <figure class="diff aspect-8/9 rounded-3xl h-full" tabindex="0">
                                <div class="diff-item-1" role="img" tabindex="0">
                                    <img alt="daisy" :src="[before2]" />
                                </div>
                                <div class="diff-item-2" role="img">
                                    <img alt="daisy" :src="[after2]" />
                                </div>
                                <div class="diff-resizer"></div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of services -->
</template>