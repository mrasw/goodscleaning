<script setup>
    import AboutUs01 from "../../../../assets/images/home/aboutus/AboutUs01.webp"
    import AboutUs02 from "../../../../assets/images/home/aboutus/AboutUs02.webp"
    import AboutUs03 from "../../../../assets/images/home/aboutus/AboutUs03.webp"
    import Toko from "../../../../assets/images/home/aboutus/Toko Goods Cleaning Oktober 2025.webp"

    const props = defineProps({
        app: Object,
    })

</script>

<template>

    <!-- about us -->
    <section >
        <!-- <section> -->
        <div 
            :class="[props.app.isDesktopDevice?'md:px-13 sm:px-6 px-5':'px-3']"
        >
            <div class="grid lg:grid-cols-2 items-center"
            :class="[props.app.isDesktopDevice?' gap-12':'gap-8']"
            >

                <!-- LEFT -->
                <div>
                    <div>
                        <span
                            class="font-poppins text-base md:text-lg text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            TENTANG KAMI
                        </span>
                    </div>

                    <div class=" "
                    :class="[props.app.isDesktopDevice?'md:mt-10 sm:mt-5 mt-3 md:space-y-8 space-y-5':'mt-6 space-y-6']"
                    >
                        <h2 class=" font-poppins-600 text-hijau-text leading-tight"
                        :class="[props.app.isDesktopDevice?'md:text-5xl sm:text-2xl text-xl':'text-[28px]']"
                        >
                            Bawa Kebersihan Sepatu Anda ke Level Baru
                        </h2>

                        <div class="md:space-y-7 space-y-4">
                            <p class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                Goods Cleaning hadir sebagai layanan perawatan sepatu profesional yang mengutamakan kualitas, kecepatan, dan kenyamanan.
                            </p>
                            <p class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                Dengan teknologi steam cleaning, durasi cepat, dan layanan antar jemput, kami menghadirkan pengalaman shoe care modern yang praktis untuk upgrade pencucian sepatu Anda.
                            </p>
                            <p class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                Kami berkomitmen menghadirkan sepatu Anda kembali dalam kondisi terbaik lebih bersih, dan siap mendukung setiap langkah Anda.
                            </p>
                        </div>
                    </div>

                    <!-- class="btn text-kuning bg-hijau-text dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold" -->
                    <a
                        href="/aboutus"
                        class="btn  dark:text-kuning dark:bg-hijau-text bg-kuning text-hijau-text border-none shadow-none font-poppins font-bold"
                        :class="[props.app.isDesktopDevice?'mt-10 md:btn-md sm:btn-sm btn-xs':'mt-6 btn-sm']"
                    >
                        Selengkapnya
                    </a>
                </div>

                <div class="flex gap-2 md:gap-4 justify-center">
                    <!-- Left: items end -->
                    <div class="grid grid-flow-row justify-items-end gap-2 md:gap-4 pb-13 w-1/2">
                        <div class="bg-gray-200 w-2/3 aspect-square rounded-3xl">
                            <img :src="AboutUs01" alt="" class="object-cover w-full h-full rounded-3xl" loading="lazy" decoding="async">
                        </div>
                        <div class="bg-gray-200 w-full aspect-square rounded-3xl">
                            <img :src="AboutUs03" alt="" class="object-cover w-full h-full rounded-3xl" loading="lazy" decoding="async">
                        </div>
                    </div>
                    
                    <!-- Right: items start -->
                    <div class="grid grid-flow-row justify-items-start gap-2 md:gap-4 pt-13 w-1/2">
                        <div class="bg-gray-200 w-full aspect-square rounded-3xl">
                            <img :src="Toko" alt="" class="object-cover w-full h-full rounded-3xl" loading="lazy" decoding="async">
                        </div>
                        <div class="bg-gray-200 w-2/3 aspect-square rounded-3xl">
                            <img :src="AboutUs02" alt="" class="object-cover w-full h-full rounded-3xl" loading="lazy" decoding="async">
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

</template>