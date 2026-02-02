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


const numberWithDots = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

</script>
<template>
    <section>
        <div class="grid"
        :class="[props.app.isDesktopDevice?'sm:gap-20 gap-10':'gap-12']"
        >
            <div class="grid gap-6">
                <div class="text-center">
                    <span
                        class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                        LAINNYA
                    </span>
                </div>
                <div class="grid gap-6 text-hijau-text"
                    :class="[props.app.isDesktopDevice ? 'grid-cols-[repeat(auto-fit,minmax(310px,1fr))]' : 'grid-flow-row']">
    
                    <div class="card shadow-sm max-w-80 mx-auto" 
                    :class="[props.app.isDesktopDevice?' w-70 md:w-80':'w-full']"
                    v-for="service in services">
                        <!-- <figure>
                            <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes" />
                        </figure> -->
                        <div class="bg-gray-300 h-60 rounded-t-2xl"></div>
                        <div class="card-body">
                            <article class="prose ">
                                <h2 class="card-title text-hijau-text text-base md:text-lg">
                                    <!-- Card Title
                                    <div class="badge badge-secondary">NEW</div> -->
                                    {{ service.nama }}
                                </h2>
                            </article>
                            <p class="text-sm md:text-base">
                                <!-- A card component has a figure, a body part, and inside body there are title and actions parts -->
                                {{ service.desc }}
                            </p>
                            <div class="grid card-actions justify-end text-end font-bold">
                                <div class="grid gap-1 items-center justify-end" v-if="service.detail">
                                    <div 
                                        :class="[props.app.isDesktopDevice?'md:text-xl text-lg':'text-lg']" 
                                        v-for="sd in service.detail"
                                    >
                                    Size {{ sd.size }} Rp.{{ numberWithDots(sd.harga) }}
                                </div>
                                </div>
                                <div v-else>
                                    <div class="flex gap-1 items-center justify-end md:text-md text-sm">
                                        <Icon icon="lsicon:time-one-filled" width="16" height="16" class="text-hijau-text shrink-0"/>
                                        {{service.waktu}} Hari
                                    </div>
                                    <div :class="[props.app.isDesktopDevice?'md:text-xl text-lg':'text-lg']">Rp.{{ numberWithDots(service.harga) }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto">
                <div class="flex items-center"
                :class="[props.app.isDesktopDevice?'flex-row gap-2':'flex-col space-y-2']"
                >
                    <span class="text-hijau-text bg-kuning-3 font-poppins-500 px-2 block w-fit"
                    :class="[props.app.isDesktopDevice?'text-xl sm:text-2xl lg:text-3xl':'text-xl']"
                    >
                        Antar Jemput Gratis
                    </span>
                    <span class=" text-hijau-text font-poppins"
                    :class="[props.app.isDesktopDevice?'text-base sm:text-xl l':'text-sm']"
                    >
                        *Khusus Wilayah Bojonggede
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>