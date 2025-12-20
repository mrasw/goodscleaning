<script setup>

import { ref, onMounted, computed } from 'vue';

const props = defineProps({
    app: Object,
})

const layanan = ref([
    {
        'image': '',
        'layanan': 'Pakai Steam',
        'desc': 'Membersihkan dengan uap panas efektif mengangkat kotoran, membunnuh bakteri, dan menghilangkan bau dengan cara yang aman, higienis, dan ramah bahan.',
    },
    {
        'image': '',
        'layanan': '3 Hari Pengerjaan',
        'desc': 'Durasi paling cepat diantara brand pencucian lain',
    },
    {
        'image': '',
        'layanan': 'Antar Jemput Gratis',
        'desc': 'Khusus Wilayah Bojonggede',
    },
])

</script>
<template>
    <section>
        <div class="" :class="[props.app.isDesktopDevice?'px-17':'px-5']">
            <div>
                <span
                    class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                        TENTANG KAMI
                </span>
            </div>
            <div class="flex text-hijau-text"
                :class="[props.app.isDesktopDevice?'flex-row justify-between gap-15 ':'flex-col space-y-4']"
            >
                
                <!-- LEFT -->
                <div class="basis-3/5">

                    <div class=""
                    :class="[props.app.isDesktopDevice?'mt-10 space-y-8':'mt-6 space-y-6']"
                    >
                        <h2 class=" font-poppins-600 text-hijau-text leading-tight "
                        :class="[props.app.isDesktopDevice?'text-5xl':'text-[32px]']"
                        >
                            <span v-if="props.app.isDesktopDevice">
                                Alasan Mengapa Ribuan Pelanggan Mempercayai Goods Cleaning
                            </span>
                            <span v-if="props.app.isMobileDevice">
                                Alasan Mengapa Ribuan Pelanggan Mempercayai Goods Cleaning
                            </span>
                        </h2>
                    </div>
                </div>
                <div class="basis-2/5">
                    <span class="space-y-4" v-if="props.app.isDesktopDevice">
                        <p class="font-bold">Didirikan pada tahun 2022, Goods Cleaning hadir sebagai brand jasa perawatan dan pencucian sepatu profesional yang berfokus pada kualitas, kecepatan, dan kenyamanan pelanggan.</p>
                        <p>— Komitmen kami memberikan layanan shoe care modern yang memadukan teknologi pembersihan berbasis steam, standar kebersihan tinggi, serta sistem layanan antar jemput gratis agar pelanggan dapat menikmati kemudahan.</p>
                    </span>
                    <span class="space-y-2" v-if="props.app.isMobileDevice">
                        <p class="font-bold">Ubah Penampilan Sepatu Anda dengan Layanan Pembersihan Terpercaya & Ramah Lingkungan Biarkan kami merawat sepatu Anda agar kembali bersih, rapi, dan nyaman dipakai.</p>
                        <p>— Komitmen kami hanya menggunakan produk berkualitas serta aman untuk menjaga sepatu tetap awet sekaligus memberikan kenyamanan maksimal bagi Anda. Setiap layanan dirancang untuk menghadirkan hasil terbaik dengan cepat dan terjangkau.</p>
                    </span>
                </div>
            </div>
            <div class="grid gap-6 text-hijau-text"
                :class="[props.app.isDesktopDevice ? 'grid-cols-[repeat(auto-fit,minmax(390px,1fr))]  mt-20' : 'grid-flow-row mt-12']">
                <div class="card w-full" v-for="l in layanan">
                    <!-- <figure class="">
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" class="rounded-xl" />
                        </figure> -->
                    <div class="bg-gray-300 h-60 rounded-2xl"></div>
                    <div class="card-body px-0 text-center">
                        <h2 class="card-title mx-auto bg-kuning-3 px-2">{{ l.layanan }}</h2>
                        <p>{{ l.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>