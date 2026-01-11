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
        <div class="" :class="[props.app.isDesktopDevice?'':'px-5']">
            <div class="flex text-hijau-text"
                :class="[props.app.isDesktopDevice?'lg:flex-row flex-col justify-between space-y-4 md:space-y-6 lg:space-y-0':'flex-col space-y-4']"
            >
                
                <!-- LEFT -->
                <div class="basis-3/5 grid md:gap-10 gap-5">
                    <div>
                        <span
                            class="font-poppins text-base md:text-lg text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            BERMITRA BERSAMA GOODS CLEANING
                        </span>
                    </div>

                    <div class="w-5/6"
                    :class="[props.app.isDesktopDevice?' space-y-8':'mt-6 space-y-6']"
                    >
                        <h2 class=" font-poppins-600 text-hijau-text leading-tight "
                        :class="[props.app.isDesktopDevice?'md:text-5xl sm:text-2xl text-xl':'text-[32px]']"
                        >
                            <span>
                                Kembangkan Cabang Goods Cleaning Anda
                            </span>
                        </h2>
                    </div>
                </div>
                <div class="basis-2/5">
                    <span class="space-y-4 md:text-base text-sm w-5/6">
                        <p class="font-bold">Jadilah mitra resmi kami dan kembangkan cabang layanan pembersihan sepatu profesional di kota Anda. Dengan sistem kerja yang telah terbukti, pelatihan intensif, dan dukungan penuh, Anda dapat membangun usaha yang efisien, hemat biaya, dan berdaya saing tinggi.</p>
                        <p>— Sebagai mitra, Anda tidak berjalan sendiri, kami menyediakan panduan, strategi pemasaran, serta jaringan brand terpercaya untuk memastikan bisnis Anda tumbuh stabil dan berkelanjutan.</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>