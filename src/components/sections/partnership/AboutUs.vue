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
            <div class="flex text-hijau-text"
                :class="[props.app.isDesktopDevice?'flex-row justify-between':'flex-col space-y-4']"
            >
                
                <!-- LEFT -->
                <div class="basis-3/5">
                    <div>
                        <span
                            class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                            PARTNER WITH US
                        </span>
                    </div>

                    <div class="w-5/6"
                    :class="[props.app.isDesktopDevice?'mt-10 space-y-8':'mt-6 space-y-6']"
                    >
                        <h2 class=" font-poppins-600 text-hijau-text leading-tight "
                        :class="[props.app.isDesktopDevice?'text-5xl':'text-[32px]']"
                        >
                            <span>
                                Grow Your Own Goods Cleaning Branch
                            </span>
                        </h2>
                    </div>
                </div>
                <div class="basis-2/5">
                    <span class="space-y-4 w-5/6">
                        <p class="font-bold">Jadilah mitra resmi kami dan kembangkan cabang layanan pembersihan sepatu profesional di kota Anda. Dengan sistem kerja yang telah terbukti, pelatihan intensif, dan dukungan penuh, Anda dapat membangun usaha yang efisien, hemat biaya, dan berdaya saing tinggi.</p>
                        <p>— Sebagai mitra, Anda tidak berjalan sendiri, kami menyediakan panduan, strategi pemasaran, serta jaringan brand terpercaya untuk memastikan bisnis Anda tumbuh stabil dan berkelanjutan.</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>