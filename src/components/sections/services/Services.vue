<script setup>
import { ref, onMounted, computed } from 'vue';
import { Icon } from "@iconify/vue";


const props = defineProps({
    app: Object,
})

const services = ref([
    {
        'image': '',
        'nama': 'Basic Cleaning',
        'desc': 'Mencuci hanya bagian luar (Footer, Upper, Midsol, dan Tali Sepatu)',
        'waktu': '2',
        'harga': '35000',
    },
    {
        'image': '',
        'nama': 'Deep Cleaning',
        'desc': 'Mencuci secara menyeluruh untuk sepatu berwarna (Footer, Upper, Midsol, dan Tali Sepatu)',
        'waktu': '3',
        'harga': '40000',
    },
    {
        'image': '',
        'nama': 'White Shoes Cleaning',
        'desc': 'Mencuci secara menyeluruh khusus sepatu putih (Footer, Upper, Midsol, dan Tali Sepatu)',
        'waktu': '3',
        'harga': '45000',
    },
    {
        'image': '',
        'nama': 'Leather Shoes Cleaning',
        'desc': 'Mencuci secara menyeluruh khusus sepatu kulit (Footer, Upper, Midsol, dan Tali Sepatu)',
        'waktu': '3',
        'harga': '45000',
    },
    {
        'image': '',
        'nama': 'Extra Service - One Day',
        'desc': 'Jasa tambahan untuk mempercepat pencucian menjadi 1 hari (Khusus: Basic, Deep, Whites Shoes dan Leather Shoes Cleaning)',
        'waktu': '1',
        'harga': '35000',
    },
])
</script>
<template>
    <section>
        <div class="">
            <div class="text-center">
                <span
                    class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                    Services
                </span>
            </div>

            <div class="grid mt-10 gap-6 text-hijau-text"
                :class="[props.app.isDesktopDevice ? 'grid-cols-[repeat(auto-fit,minmax(390px,1fr))]' : 'grid-flow-row']">

                <div class="card w-90 shadow-sm mx-auto" v-for="service in services">
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
    </section>
</template>