<script setup>
import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    app: Object,
})

</script>

<template>

    <!-- about us -->
    <section >
        <!-- <section> -->
        <div 
            :class="[props.app.isDesktopDevice?'px-13':'px-3']"
        >
            <div class="grid lg:grid-cols-2 items-center"
            :class="[props.app.isDesktopDevice?' gap-12':'gap-8']"
            >

                <!-- LEFT -->
                <div>
                    <div>
                        <span
                            class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            ABOUT US
                        </span>
                    </div>

                    <div class=" "
                    :class="[props.app.isDesktopDevice?'mt-10 space-y-8':'mt-6 space-y-6']"
                    >
                        <h2 class=" font-poppins-600 text-hijau-text leading-tight"
                        :class="[props.app.isDesktopDevice?'text-5xl':'text-[32px]']"
                        >
                            Bringing Clean, Comfort, and Care Together
                        </h2>

                        <p class="text-base font-poppins-300 text-hijau-text">
                            We are a team of passionate cleaning experts who take pride in delivering the
                            highest standard of service. With years of experience in the industry, we’ve
                            perfected our cleaning methods to ensure every job is done right.
                        </p>
                    </div>

                    <button
                        class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold"
                        :class="[props.app.isDesktopDevice?'mt-10':'mt-6']"
                    >
                        Learn More
                    </button>
                </div>

                <div class="flex gap-2 md:gap-4 justify-center">
                    <!-- Left: items end -->
                    <div class="grid grid-flow-row justify-items-end gap-2 md:gap-4 pb-13 w-1/2">
                        <div class="bg-gray-200 w-2/3 aspect-square rounded-3xl"></div>
                        <div class="bg-gray-200 w-full aspect-square rounded-3xl"></div>
                    </div>

                    <!-- Right: items start -->
                    <div class="grid grid-flow-row justify-items-start gap-2 md:gap-4 pt-13 w-1/2">
                        <div class="bg-gray-200 w-full aspect-square rounded-3xl"></div>
                        <div class="bg-gray-200 w-2/3 aspect-square rounded-3xl"></div>
                    </div>
                </div>

            </div>
        </div>

    </section>

    <!-- <section v-else-if="app.isMobileDevice">
        <div class="px-3">
            <div>
                <div>
                    <span
                        class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                        ABOUT US
                    </span>
                </div>
                <div class="mt-10">
                    <div>
                        <span class="text-5xl font-poppins-600 text-hijau-text">
                            Bringing Clean, Comfort, and Care Together
                        </span>
                    </div>
                    <div class="mt-6">
                        <span class="text-base font-poppins-300 text-hijau-text">
                            We are a team of passionate cleaning experts who take pride in delivering the
                            highest standard of service. With years of experience in the industry, we’ve
                            perfected our cleaning methods to ensure every job is done right.
                        </span>
                    </div>
                </div>
                <div class="mt-6" :class="[]">
                    <button
                        class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none  font-poppins font-bold">
                        Learn More
                    </button>
                </div>
            </div>
            <div class="flex gap-2 mt-8 justify-center">
                <div class="grid grid-flow-row justify-items-end gap-2 pb-13">
                    <div class="bg-gray-200 w-[62%] aspect-square rounded-3xl"></div>
                    <div class="bg-gray-200 size-40 aspect-square rounded-3xl"></div>
                </div>
                <div class="grid grid-flow-row justify-items-start gap-2 pt-13">
                    <div class="bg-gray-200 size-40 rounded-3xl"></div>
                    <div class="bg-gray-200 w-[62%] aspect-square rounded-3xl"></div>
                </div>
            </div>
        </div>
    </section> -->
    <!-- end of about us -->

</template>