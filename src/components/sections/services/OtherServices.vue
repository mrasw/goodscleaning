<script setup>
import { ref, onMounted, computed } from 'vue';
import { Icon } from "@iconify/vue";


const props = defineProps({
    app: Object,
})

const services = ref([
    {
        'image': '',
        'nama': 'Repaint',
        'desc': 'Mewarnai kembali pada bagian upper yang berbahan canvas (Hitam/Putih)',
        'waktu': '',
        'harga': '',
        'detail': [
            {
                'size': 'S',
                'harga': '115000',
            },
            {
                'size': 'M',
                'harga': '125000',
            },
            {
                'size': 'XL',
                'harga': '135000',
            },
        ]
    },
    {
        'image': '',
        'nama': 'Unyellowing',
        'desc': 'Menghilangkan noda kuning pada bagian midsole sepatu berwarna dasar putih (Plastic Polimer, Karet, EVA)',
        'waktu': '7',
        'harga': '60000',
        'detail': ''
    },
    {
        'image': '',
        'nama': 'Reglue All Size',
        'desc': 'Merekatkan kembali dengan menggunakan alat press',
        'waktu': '7',
        'harga': '100000',
        'detail': ''
    },
    {
        'image': '',
        'nama': 'Repair All Size',
        'desc': 'Menggantian sol aus atau rusak, menjahit ulang dengan teknik rapi dan benang kuat, serta perbaikan kulit mengelupas atau canvas sobek',
        'waktu': '7',
        'harga': '150000',
        'detail': ''
    },
])
</script>
<template>
    <section>
        <div class="grid gap-20">
            <div class="grid gap-6">
                <div class="text-center">
                    <span
                        class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                        LAINNYA
                    </span>
                </div>
                <div class="grid gap-6 text-hijau-text"
                    :class="[props.app.isDesktopDevice ? 'grid-cols-[repeat(auto-fit,minmax(390px,1fr))]' : 'grid-flow-row']">
    
                    <div class="card  w-85 shadow-sm mx-auto" v-for="service in services">
                        <!-- <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure> -->
                        <div class="bg-gray-300 h-60 rounded-t-2xl"></div>
                        <div class="card-body">
                            <article class="prose ">
                                <h2 class="card-title text-hijau-text">
                                    <!-- Card Title
                                    <div class="badge badge-secondary">NEW</div> -->
                                    {{ service.nama }}
                                </h2>
                            </article>
                            <p>
                                <!-- A card component has a figure, a body part, and inside body there are title and actions parts -->
                                {{ service.desc }}
                            </p>
                            <div class="grid card-actions justify-end text-end font-bold">
                                <div class="grid gap-1 items-center justify-end" v-if="service.detail">
                                    <div class="text-xl" v-for="sd in service.detail">Size {{ sd.size }} Rp {{ sd.harga }}</div>
                                </div>
                                <div v-else>
                                    <div class="flex gap-1 items-center justify-end">
                                        <Icon icon="lsicon:time-one-filled" width="16" height="16" class="text-hijau-text shrink-0"/>
                                        {{service.waktu}} Hari
                                    </div>
                                    <div class="text-xl">Rp. {{ service.harga }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto">
                <div class="flex items-center"
                :class="[props.app.isDesktopDevice?'flex-row':'flex-col space-y-2']"
                >
                    <span class="text-3xl text-hijau-text bg-kuning-3 font-poppins-500 px-2 block w-fit">
                        Antar Jemput Gratis
                    </span>
                    <span class="text-xl text-hijau-text font-poppins">
                        *Khusus Wilayah Bojonggede
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>