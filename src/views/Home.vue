<script setup>
import Navbar from '../components/layout/Navbar.vue';
import sec1_1 from "../assets/images/sec1.1.jpeg";
import sec1_2 from "../assets/images/sec1.2.jpeg";
import sec1_3 from "../assets/images/sec1.3.jpeg";
import sec1_4 from "../assets/images/sec1.4.jpeg";
import sec1_5 from "../assets/images/sec1.5.jpeg";
import sec1_6 from "../assets/images/sec1.6.jpeg";

import { useAppStore } from '../../srcEx/stores/app';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Vue3Marquee } from "vue3-marquee";

const app = useAppStore();
import { ref, watch, computed } from 'vue';

const param = ref({
    imgSec1: {
        'sec1_1': sec1_1,
        'sec1_2': sec1_2,
        'sec1_3': sec1_3,
        'sec1_4': sec1_4,
        'sec1_5': sec1_5,
        'sec1_6': sec1_6,
    },
});

const mottos = ref(['PROFESIONAL', 'CEPAT', 'TERJANGKAU', 'TERPERCAYA',])

const imageStyle = computed(() => {

    // Formula: basePosition + (width * multiplier)
    // Adjust multiplier sesuai kebutuhan

    return {
        sec1_1: {
            // objectPosition: `${50 + (app.width * 0.01)}% ${60 + (app.width * 0.01)}%` // 60% + 0.01% per pixel
            objectPosition: `50% ${58 + (app.width * 0.01)}%` // 60% + 0.01% per pixel
        },
        sec1_2: {
            objectPosition: `30% ${50 + (app.width * 0.008)}%`
        },
        sec1_5: {
            objectPosition: `40% ${70 + (app.width * 0.008)}%`
        },
        sec1_4: {
            objectPosition: `50% ${70 + (app.width * 0.008)}%`
        },
        sec1_6: {
            objectPosition: `45% ${70 + (app.width * 0.007)}%`
        }
    }
})

</script>

<template>
    <div class="" :class="app.isDesktopDevice ? 'px-8 py-5' : 'px-4 py-2'">
        <Navbar />

        <!-- section 1 desktop -->
        <section v-if="app.isDesktopDevice">
            <div 
                class=" mt-3 h-120 bg-putih dark:bg-gradient-hijau rounded-md relative"
            >
                <div class="absolute inset-0 grid place-items-center">
                    <div class="">
                        <!-- Container dengan overflow hidden -->
                        <div class="overflow-hidden">
                            <!--line negative margin -->
                            <div
                                class="text-9xl not-dark:text-gradient-hijau-100 dark:text-kuning-3 dark:text-shadow-3d-left font-poppins-900 tracking-tighter my-3 mx-3"
                            >
                                <div>
                                    <div class="block leading-[0.8]">GOODS</div>
                                    <div class="block leading-[0.8]">CLEANING</div>
                                </div>
                            </div>
                        </div>

                        <!-- hashtag -->
                        <div class="text-end dark:text-center">
                            <span 
                                class="text-kuning-2 text-xl block font-poppins-700"
                            >
                                #CuciCepatTetapHemat
                            </span>
                        </div>
                    </div>
                </div>
                <div class="h-full content-end">
                    <div class="mb-3 mx-5 flex justify-between">
                        <div class="flex items-center">
                            <span class="text-abu font-poppins text-xs">
                                Expert dalam mengatasi noda membandel, dan memberikan hasil maksimal.
                            </span>
                        </div>
                        <div  
                            class=""
                            :class="[]"
                        >
                            <button
                                class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none  font-poppins font-bold"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- section 1 mobile -->
        <section v-if="app.isMobileDevice">
            <div 
                class=" h-62 mt-3 bg-putih dark:bg-gradient-hijau rounded-md content-end"
            >
                <div class="grid place-items-center mb-3">
                    <div class="">
                        <!-- Container dengan overflow hidden -->
                        <div class="overflow-hidden">
                            <!--line negative margin -->
                            <div
                                class="text-6xl not-dark:text-gradient-hijau-100 dark:text-kuning-3 dark:text-shadow-3d-left font-poppins-900 tracking-tighter my-3 mx-3"
                            >
                                <div>
                                    <div class="block leading-[0.8]">GOODS</div>
                                    <div class="block leading-[0.8]">CLEANING</div>
                                </div>
                            </div>
                        </div>

                        <!-- hashtag -->
                        <div class="text-end ">
                            <span 
                                class="text-kuning-2 text-xs block font-poppins-700"
                            >
                                #CuciCepatTetapHemat
                            </span>
                        </div>
                    </div>
                    <div class="pt-6 w-full px-3">
                        <button
                            class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none w-full  font-poppins font-bold"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="mt-3"
                :class="[app.isDesktopDevice?'h-120':'h-62']"
            >
                <Swiper 
                    :modules="[Navigation, Pagination, A11y, Autoplay]" 
                    :autoplay="{
                        delay: 2000,     // ganti sesuai interval
                        disableOnInteraction: false
                    }" 
                    :loop="true" 
                    :slides-per-view="1" 
                    :space-between="0" 
                    class="h-full rounded-md"
                >
                    <SwiperSlide>
                            <!-- <img :src="param.imgSec1.sec1_1" class="object-cover w-full h-full object-[50%_80%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_1" 
                            :style="imageStyle.sec1_1"
                            class="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_2" class="object-cover w-full h-full object-[40%_70%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_2" 
                            :style="imageStyle.sec1_2"
                            class="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                    <!-- <SwiperSlide>
                        <img :src="param.imgSec1.sec1_3" class="object-cover h-full object-[40%_70%]" />
                    </SwiperSlide> -->
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_5" class="object-cover w-full h-full object-[50%_80%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_5" 
                            :style="imageStyle.sec1_5"
                            class="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_4" class="object-cover w-full h-full object-[50%_80%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_4" 
                            :style="imageStyle.sec1_4"
                            class="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_6" class="object-cover w-full h-full object-[15%_45%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_6" 
                            :style="imageStyle.sec1_6"
                            class="object-cover w-full h-full"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <section>
            <Vue3Marquee :clone="true"
                class="mt-3 rounded-md font-poppins text-kuning-3 bg-hijau-text p-2 overflow-hidden">
                <span v-for="(motto, index) in mottos" :key="index"
                    :class="[app.isDesktopDevice?'text-xl':'text-xs']"
                >
                    <span v-if="index == 0" class="mx-9 text-kuning-3">•</span>
                    {{ motto }}
                    <span v-if="index < mottos.length - 1" class="mx-9 text-kuning-3">•</span>
                </span>
            </Vue3Marquee>
        </section>
    </div>
</template>

<style></style>