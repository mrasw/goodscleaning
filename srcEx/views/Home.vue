<script setup>
import Navbar from "../components/layout/Navbar.vue";
import sec1 from "../assets/images/sec1.png";
import sec1_1 from "../assets/images/sec1.1.jpeg";
import sec1_2 from "../assets/images/sec1.2.jpeg";
import sec1_3 from "../assets/images/sec1.3.jpeg";
import sec1_4 from "../assets/images/sec1.4.jpeg";
import sec1_5 from "../assets/images/sec1.5.jpeg";
import sec1_6 from "../assets/images/sec1.6.jpeg";
import goodscleaning from '../assets/images/goodscleaning.jpg'


import { useAppStore } from "../stores/app";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// CSS wajib
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { ref, watch } from "vue";



const app = useAppStore();
console.log("device asli", app);

watch(
    () => app.isMobileScreen,
    (newVal, oldVal) => {
        console.log("mobile screen changed:", oldVal);
        console.log("mobile screen changed:", newVal);
    }
);

watch(
    () => app.width,
    (v) => {
        console.log("width", v);
    }
);

const param = ref({
    imgGC: goodscleaning,
    imgSec1: {
        'sec1': sec1,
        'sec1_1': sec1_1,
        'sec1_2': sec1_2,
        'sec1_3': sec1_3,
        'sec1_4': sec1_4,
        'sec1_5': sec1_5,
        'sec1_6': sec1_6,
    },
});
</script>

<style scoped>
.font-roboto {
    font-family: "Roboto", sans-serif;
}

.font-roboto-700 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
}

.font-roboto-900 {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
}
</style>

<template>
    <Navbar />

    <!-- section 1 -->
    <section class="h-96 py-4" :class="[app.isDesktopDevice ? 'mx-8 my-4' : ' my-1']">
        <div class="grid mb-4">
            <div v-if="app.isDesktopDevice">
                <div class="grid grid-cols-12 mx-3">
                    <div class="col-span-8 grid grid-flow-col">
                        <article class="prose font-roboto-900 "
                            :class="[app.isDesktopDevice ? 'text-5xl' : 'text-2xl']">
                            <!-- <p class="lg:text-base md:text-tiny"></p> -->
                            <div class="leading-normal">
                                <div>
                                    <span class="text-blue-900">Tanggung Jawab Kami,</span>
                                </div>
                                <div class="mt-1">
                                    <span class="text-amber-600 mt-4">Kualitas Terbaik Sepatu Anda!</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="col-span-4 justify-items-end">
                        <div>
                            <div class="carousel carousel-horizontal rounded-box h-80 w-80">
                                <div class="carousel-item h-full">
                                    <img :src="param.imgSec1.sec1_1" />
                                </div>
                                <div class="carousel-item h-full">
                                    <img :src="param.imgSec1.sec1_2" />
                                </div>
                                <div class="carousel-item h-full">
                                    <img :src="param.imgSec1.sec1_3" />
                                </div>
                                <div class="carousel-item h-full">
                                    <img :src="param.imgSec1.sec1_4" />
                                </div>
                                <div class="carousel-item h-full">
                                    <img :src="param.imgSec1.sec1_5" />
                                </div>
                                <div class="carousel-item h-full">
                                    <img :src="param.imgSec1.sec1_6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="app.isMobileDevice">
                <div class="mx-2 my-2 justify-items-center">
                    <div class="relative h-85 w-85 overflow-hidden rounded-box ">
                        <!-- <Swiper 
                            :modules="[Navigation, Pagination, A11y]" 
                            :pagination="{
                                dynamicBullets: true,
                            }" 
                            :loop="true" 
                            :slides-per-view="1" 
                            :space-between="0" 
                            class="h-85 w-85"
                        > -->
                        <Swiper 
                            :modules="[Navigation, Pagination, A11y, Autoplay]" 
                            :autoplay="{
                                delay: 2000,     // ganti sesuai interval
                                disableOnInteraction: false
                            }"
                            :loop="true" 
                            :slides-per-view="1" 
                            :space-between="0" 
                            class="h-85 w-85"
                        >
                            <SwiperSlide>
                                <img :src="param.imgSec1.sec1_1" class="object-cover w-full h-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="param.imgSec1.sec1_2" class="object-cover w-full h-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="param.imgSec1.sec1_3" class="object-cover w-full h-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="param.imgSec1.sec1_4" class="object-cover w-full h-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="param.imgSec1.sec1_5" class="object-cover w-full h-full" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img :src="param.imgSec1.sec1_6" class="object-cover w-full h-full" />
                            </SwiperSlide>
                        </Swiper>
                        <!-- Layer text di atas carousel -->
                        <div
                            class="absolute z-10 items-center flex justify-center h-fit inset-x-0 bottom-0 bg-stone-900/40">
                            <div class="text-white text-xl font-bold px-3">
                                <span>Tanggung Jawab Kami,</span><span>Kualitas Terbaik Sepatu Anda!</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="grid grid-cols-6 my-8 ml-4">
            <div class="col-span-4">
                <div class="flex flex-wrap gap-2">
                    <div class="badge badge-soft">Basic Cleaning</div>
                    <div class="badge badge-soft">Deep Cleaning</div>
                    <div class="badge badge-soft">White Shoes</div>
                    <div class="badge badge-soft">Leather Shoes</div>
                    <div class="badge badge-soft">One Day Cleaning</div>
                    <div class="badge badge-soft">Unyellowing</div>
                    <div class="badge badge-soft">Repaint</div>
                    <div class="badge badge-soft">Reglue</div>
                    <div class="badge badge-soft">Repair</div>
                </div>
            </div>
            <div class="col-span-2">

            </div>
        </div>
        <div class="h-screen">

        </div>
    </section>
</template>
