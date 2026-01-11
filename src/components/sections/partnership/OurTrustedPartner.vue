<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from "@iconify/vue";
const props = defineProps({
    app: Object,
})

console.log(props.app)
</script>


<template>
    <!-- partner with us -->
    <section>
        <div class="grid" :class="[props.app.isDesktopDevice?'lg:gap-30 md:gap-20 gap-10':'gap-20']">
            <div class="grid " :class="[props.app.isDesktopDevice ? 'lg:grid-cols-2 gap-16 ' : 'px-3 gap-6']">
                <div class="flex flex-col "
                    :class="[props.app.isDesktopDevice ? ' h-fit gap-4 md:order-1 order-2' : 'h-fit gap-3 order-2']"
                >
                    <!-- Top component dengan width 100% -->
                    <div class="bg-gray-200 grow w-full aspect-5/4"
                        :class="[props.app.isDesktopDevice ? ' rounded-3xl' : ' rounded-2xl']"></div>

                    <!-- Bottom container dengan width sama -->
                    <div class="flex w-full"
                        :class="[props.app.isDesktopDevice?'gap-4':'gap-3']"
                    >
                        <div class="flex-1 aspect-square bg-gray-200 "
                            :class="[props.isDesktopDevice ? 'rounded-3xl' : 'rounded-2xl']"></div>
                        <div class="flex-1 aspect-square bg-gray-200 "
                            :class="[props.isDesktopDevice ? 'rounded-3xl' : 'rounded-2xl']"></div>
                        <div class="flex-1 aspect-square bg-gray-200 "
                            :class="[props.isDesktopDevice ? 'rounded-3xl' : 'rounded-2xl']"></div>
                    </div>
                </div>
                <div class="content-center"
                :class="[props.app.isDesktopDevice?'md:order-2 order-1':'order-1']"
                >
                    <div class="grid"
                    :class="[props.app.isDesktopDevice?'md:gap-10 gap-6':'gap-6']"
                    >
                        <div>
                            <span
                                class="font-poppins text-base md:text-lg text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                                PARTNER KAMI
                            </span>
                        </div>
                        <div class="grid"
                            :class="[props.app.isDesktopDevice?'md:gap-8 gap-4':'gap-4']"
                        >
                            <div>
                                <span class="font-poppins-600 text-hijau-text"
                                    :class="[props.app.isDesktopDevice ? 'md:text-5xl sm:text-2xl text-xl  md:leading-15' : 'text-3xl']">
                                    Goods Cleaning  Depok
                                </span>
                            </div>
                            <div class="grid gap-5 ">
                                <p class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                    Jaringan Goods Cleaning terus berkembang melalui mitra yang telah membuka cabang di
                                    berbagai kota.
                                </p>
                                <p class="md:text-base text-sm font-poppins-300 text-hijau-text">
                                    Kehadiran mereka menjadi bukti nyata bahwa sistem kerja kami terbukti efektif,
                                    menguntungkan, dan berkelanjutan. Setiap toko mitra membawa standar layanan yang
                                    sama: sepatu bersih, rapi, dan nyaman dipakai.
                                </p>
                            </div>
                        </div>
                        <div class="text-hijau-text font-poppins-700 gap-4 grid">
                            <div class="flex gap-4"
                                :class="[props.app.isDesktopDevice?'':'text-sm']"
                                >
                                <Icon icon="mdi:location" class="text-hijau-text shrink-0 sm:size-6 size-5" v-if="props.app.isDesktopDevice"/>
                                <Icon icon="mdi:location" width="20" height="20" class="text-hijau-text shrink-0" v-if="!(props.app.isDesktopDevice)"/>
                                <p class="text-sm md:text-base">Kp. Kekupu, Jalan Masjid Jl. Al-Barkah No.04, RT 03/RW06, Pasir Putih, Kec. Sawangan,
                                    Kota Depok, Jawa Barat</p>
                            </div>
                            <div class="flex gap-4 items-center"
                                :class="[props.app.isDesktopDevice?'':'text-sm']"
                            >
                                <Icon icon="lsicon:time-one-filled" class="text-hijau-text shrink-0 sm:size-6 size-5" v-if="props.app.isDesktopDevice"/>
                                <Icon icon="lsicon:time-one-filled" width="19" height="19"
                                    class="text-hijau-text shrink-0" v-if="!(props.app.isDesktopDevice)"/>
                                <p class="text-sm md:text-base">Buka Setiap hari, Jam 11.00 – 16.00</p>
                            </div>
                            <div class="flex gap-4 items-center"
                                :class="[props.app.isDesktopDevice?'':'text-sm']"
                                >
                                <Icon icon="mage:whatsapp-filled"
                                    class="text-hijau-text shrink-0 sm:size-6 size-5" v-if="props.app.isDesktopDevice"/>
                                <Icon icon="mage:whatsapp-filled"
                                    width="20" height="20"
                                    class="text-hijau-text shrink-0" v-else-if="!(props.app.isDesktopDevice)"/>
                                <p class="text-sm md:text-base">085885243062</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="md:gap-16 gap-10" 
                    :class="[props.app.isDesktopDevice ? 'lg:flex lg:flex-row grid' : 'grid px-3']"
                >
                    <div class="content-center basis-3/5">
                        <div class="grid gap-10 px-6 py-8 bg-hijau-text rounded-2xl">
                            <div class="grid gap-8">
                                <div>
                                    <span class="font-poppins-600 text-white"
                                        :class="[props.app.isDesktopDevice ? 'md:text-4xl sm:text-2xl text-xl' : 'text-[28px]']">
                                        Berpartnerlah Bersama Kami — Kembangkan Bisnis Anda bersama Goods Cleaning
                                    </span>
                                </div>
                                <div class="">
                                    <span class="md:text-base text-sm font-poppins-300 text-white">
                                        Buka peluang usaha Anda dengan bergabung sebagai mitra resmi Goods Cleaning.
                                        Dapatkan dukungan sistem kerja yang telah terbukti, pelatihan intensif, dan
                                        akses untuk membangun bisnis pembersihan sepatu yang efisien dan berkelanjutan.
                                    </span>
                                </div>
                            </div>
                            <div class="">
                                <a href="https://forms.gle/qqPPtMrVgqyCXFRb7" target="_blank"
                                    class="btn text-kuning bg-hijau-text w-full dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold">
                                    Bergabung sebagai Partner
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="basis-2/5" v-if="props.app.isDesktopDevice">
                        <div class=" h-118 bg-gray-200 max-h-118 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of partner with us -->
</template>