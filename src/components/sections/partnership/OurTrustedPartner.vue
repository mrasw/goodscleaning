<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Icon } from "@iconify/vue";
const props = defineProps({
    app: Object,
})

console.log('oi')
</script>


<template>
    <!-- partner with us -->
    <section>
        <div class="grid gap-40">
            <div class="grid gap-16" :class="[props.app.isDesktopDevice ? 'grid-cols-2 gap-16 px-16' : 'px-3']">
                <div class="flex flex-col "
                    :class="[props.app.isDesktopDevice ? ' h-[584px] gap-4' : 'h-[355px] gap-3']">
                    <!-- Top component dengan width 100% -->
                    <div class="bg-gray-200 grow w-full"
                        :class="[props.app.isDesktopDevice ? ' rounded-3xl' : ' rounded-2xl']"></div>

                    <!-- Bottom container dengan width sama -->
                    <div class="flex gap-4 w-full">
                        <div class="flex-1 aspect-square bg-gray-200 "
                            :class="[props.isDesktopDevice ? 'rounded-3xl' : 'rounded-2xl']"></div>
                        <div class="flex-1 aspect-square bg-gray-200 "
                            :class="[props.isDesktopDevice ? 'rounded-3xl' : 'rounded-2xl']"></div>
                        <div class="flex-1 aspect-square bg-gray-200 "
                            :class="[props.isDesktopDevice ? 'rounded-3xl' : 'rounded-2xl']"></div>
                    </div>
                </div>
                <div class="content-center">
                    <div class="grid gap-10">
                        <div>
                            <span
                                class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                                PARTNER KAMI
                            </span>
                        </div>
                        <div class="grid gap-8">
                            <div>
                                <span class="font-poppins-600 text-hijau-text leading-15"
                                    :class="[props.app.isDesktopDevice ? 'text-5xl' : 'text-3xl']">
                                    Goods Cleaning <br> Depok
                                </span>
                            </div>
                            <div class="grid gap-5">
                                <p class="text-base font-poppins-300 text-hijau-text">
                                    Jaringan Goods Cleaning terus berkembang melalui mitra yang telah membuka cabang di
                                    berbagai kota.
                                </p>
                                <p class="text-base font-poppins-300 text-hijau-text">
                                    Kehadiran mereka menjadi bukti nyata bahwa sistem kerja kami terbukti efektif,
                                    menguntungkan, dan berkelanjutan. Setiap toko mitra membawa standar layanan yang
                                    sama: sepatu bersih, rapi, dan nyaman dipakai.
                                </p>
                            </div>
                        </div>
                        <div class="text-hijau-text font-poppins-700 gap-4 grid">
                            <div class="flex gap-4">
                                <Icon icon="mdi:location" width="24" height="24" class="text-hijau-text shrink-0" />
                                <p>Kp. Kekupu, Jalan Masjid Jl. Al-Barkah No.04, RT 03/RW06, Pasir Putih, Kec. Sawangan,
                                    Kota Depok, Jawa Barat</p>
                            </div>
                            <div class="flex gap-4 items-center">
                                <Icon icon="lsicon:time-one-filled" width="24" height="24"
                                    class="text-hijau-text shrink-0" />
                                <p>Buka Setiap hari, Jam 11.00 – 16.00</p>
                            </div>
                            <div class="flex gap-4 items-center">
                                <Icon icon="mage:whatsapp-filled" width="24" height="24"
                                    class="text-hijau-text shrink-0" />
                                <p>085885243062</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="gap-16 " 
                    :class="[props.app.isDesktopDevice ? 'flex flex-row px-16' : 'grid px-3']"
                >
                    <div class="content-center basis-3/5">
                        <div class="grid gap-10 px-6 py-8 bg-hijau-text rounded-2xl">
                            <div class="grid gap-8">
                                <div>
                                    <span class="font-poppins-600 text-white"
                                        :class="[props.app.isDesktopDevice ? 'text-4xl' : 'text-3xl']">
                                        Berpartnerlah Bersama Kami — Kembangkan Bisnis Anda bersama Goods Cleaning
                                    </span>
                                </div>
                                <div class="">
                                    <span class="text-base font-poppins-300 text-white">
                                        Buka peluang usaha Anda dengan bergabung sebagai mitra resmi Goods Cleaning.
                                        Dapatkan dukungan sistem kerja yang telah terbukti, pelatihan intensif, dan
                                        akses untuk membangun bisnis pembersihan sepatu yang efisien dan berkelanjutan.
                                    </span>
                                </div>
                            </div>
                            <div class="">
                                <a href="https://forms.gle/qqPPtMrVgqyCXFRb7" target="_blank"
                                    class="btn text-kuning bg-hijau-text w-full dark:bg-kuning dark:text-hijau-text border-none shadow-none font-poppins font-bold">
                                    Join as Partner
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="basis-2/5">
                        <div class=" h-118 bg-gray-200 max-h-118 rounded-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of partner with us -->
</template>