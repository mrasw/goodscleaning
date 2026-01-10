<script setup>
    // import sec1_1 from '../../..//assets/images/sec1.1.jpeg'
    // import sec1_2 from '../../..//assets/images/sec1.2.jpeg'
    // import sec1_3 from '../../..//assets/images/sec1.3.jpeg'
    // import sec1_4 from '../../..//assets/images/sec1.4.jpeg'
    // import sec1_5 from '../../..//assets/images/sec1.5.jpeg'
    // import sec1_6 from '../../..//assets/images/sec1.6.jpeg'
    import sec1_1 from '../../..//assets/images/home/hero/sec1.1.webp'
    import sec1_2 from '../../..//assets/images/home/hero/sec1.2.webp'
    import sec1_3 from '../../..//assets/images/home/hero/sec1.3.webp'
    import sec1_4 from '../../..//assets/images/home/hero/sec1.4.webp'
    import sec1_5 from '../../..//assets/images/home/hero/sec1.5.webp'
    import sec1_6 from '../../..//assets/images/home/hero/sec1.6.webp'

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/autoplay';

    import { Icon } from "@iconify/vue";

    import { ref, watch, computed } from 'vue';
    const props = defineProps(({
        app: Object,
    }))

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

    const imageStyle = computed(() => {
        // Formula: basePosition + (width * multiplier)
        // Adjust multiplier sesuai kebutuhan
        return {
            sec1_1: {
                // objectPosition: `${50 + (props.app.width * 0.01)}% ${60 + (props.app.width * 0.01)}%` // 60% + 0.01% per pixel
                objectPosition: `50% ${58 + (props.app.width * 0.01)}%` // 60% + 0.01% per pixel
            },
            sec1_2: {
                objectPosition: `30% ${50 + (props.app.width * 0.008)}%`
            },
            sec1_5: {
                objectPosition: `40% ${70 + (props.app.width * 0.008)}%`
            },
            sec1_4: {
                objectPosition: `50% ${70 + (props.app.width * 0.008)}%`
            },
            sec1_6: {
                objectPosition: `45% ${70 + (props.app.width * 0.007)}%`
            }
        }
    })



</script>

<template>
    
        <!-- section 1 desktop -->
        <section v-if="props.app.isDesktopDevice">
            <div 
                class=" mt-3 h-full bg-putih dark:bg-gradient-hijau rounded-md relative"
            >

                <div class="grid grid-rows-9">
                    <div class="row-start-2 row-span-7 place-items-center my-auto">
                        <div class="">
                            <!-- Container dengan overflow hidden -->
                            <div class="overflow-hidden">
                                <!--line negative margin -->
                                <div
                                    class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl not-dark:text-gradient-hijau-100 dark:text-kuning-3 dark:text-shadow-3d-left font-poppins-900 tracking-tighter my-3 mx-3"
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
                                    class="text-kuning-2 text-xs md:text-xl sm:text-base block font-poppins-700"
                                >
                                    #CuciCepatTetapHemat
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="row-start-9">
                        <div class="mb-3 mx-5 flex justify-between">
                            <div class="flex items-center">
                                <span class="text-abu font-poppins text-xs">
                                    <!-- Expert dalam mengatasi noda membandel, dan memberikan hasil maksimal. -->
                                </span>
                            </div>
                            <div  
                                class=""
                                :class="[]"
                            >
                                <!-- <button
                                    class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none  font-poppins font-bold"
                                >
                                    <Icon icon="mdi:location" width="24" height="24" class="not-dark:text-kuning-2 dark:text-hijau-text shrink-0" />
                                    Temukan Kami
                                </button> -->

                                <a href="https://www.google.com/maps/place/Goods+Cleaning/@-6.4889342,106.7948356,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c35e46e1bbd3:0xf5471f2cec4db3ec!8m2!3d-6.4889342!4d106.7974159!16s%2Fg%2F11w1xz35t6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none  font-poppins font-bold"
                                    :class="[props.app.isDesktopDevice?'sm:btn-sm md:btn-md btn-xs':'']"
                                >
                                    
                                    <Icon icon="mdi:location" class="not-dark:text-kuning-2 sm:size-7 size-5 dark:text-hijau-text shrink-0" />
                                    Temukan Kami
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- section 1 mobile -->
        <section v-if="props.app.isMobileDevice">
            <div 
                class=" h-62 mt-3 bg-putih dark:bg-gradient-hijau rounded-md content-end"
            >
                <div class="grid place-items-center mb-3">
                    <div class="">
                        <!-- Container dengan overflow hidden -->
                        <div class="overflow-hidden w-full">
                            <!--line negative margin -->
                            <div
                                class="text-[clamp(3rem,15vw,5rem)] not-dark:text-gradient-hijau-100 dark:text-kuning-3 dark:text-shadow-3d-left font-poppins-900 tracking-tighter my-3 mx-3"
                            >
                                <div>
                                    <div class="block leading-[0.8]">GOODS</div>
                                    <div class="block leading-[0.8]">CLEANING</div>
                                </div>
                            </div>
                        </div>

                        <!-- hashtag -->
                        <div class="text-end w-full">
                            <span 
                                class="text-kuning-2 text-xs block font-poppins-700 px-3"
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
                :class="[props.app.isDesktopDevice?'h-120':'h-62']"
            >
                <Swiper 
                    :modules="[Navigation, Pagination, A11y, Autoplay]" 
                    :autoplay="{
                        delay: 2000,     
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
                            loading="eager"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_2" class="object-cover w-full h-full object-[40%_70%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_2" 
                            :style="imageStyle.sec1_2"
                            class="object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_4" class="object-cover w-full h-full object-[50%_80%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_4" 
                            :style="imageStyle.sec1_4"
                            class="object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <!-- <img :src="param.imgSec1.sec1_6" class="object-cover w-full h-full object-[15%_45%]" /> -->
                        <img 
                            :src="param.imgSec1.sec1_6" 
                            :style="imageStyle.sec1_6"
                            class="object-cover w-full h-full"
                            loading="lazy"
                        />
                        <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        

</template>