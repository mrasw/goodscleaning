<script setup>
import { ref, onMounted, computed } from 'vue';

import { Icon } from "@iconify/vue";

const props = defineProps({
    app: Object,
})

console.log(props.app.isDesktopDevice)

const location = ref([
    {
        'image': '',
        'name':'Bojonggede',
        'detail': 'Gg. H. Toyib, Jl. R.H. Panji II, RW04 Jl. Kp. Masjid No.43 RT 02, Bojonggede, Kabupaten Bogor, Jawa Barat',
        'jadwal': 'Buka Setiap hari, Jam 09.00 – 20.00',
        'telp': '085819423066',
    },
    {
        'image': '',
        'name':'Depok',
        'detail': 'Kp. Kekupu, Jalan Masjid Jl. Al-Barkah No.04, RT 03/RW06, Pasir Putih, Kec. Sawangan, Kota Depok, Jawa Barat',
        'jadwal': 'Buka Setiap hari, Jam 11.00 – 16.00',
        'telp': '085885243062',
    },
])
</script>

<template>
    <section>
        <div class="text-hijau-text font-poppins-700"
        :class="[props.app.isDesktopDevice?' mx-17':'mx-5']"
        >
            <div class="text-center">
                <span :class="[props.app.isDesktopDevice?'text-5xl':'text-[28px]']">Lokasi Kami</span>
            </div>
            <div class="grid gap-6 "
                :class="[props.app.isDesktopDevice ? 'grid-cols-2 mt-10' : 'grid-flow-row mt-6']">
                <div class="card bg-kuning-3 px-6 w-full shadow-sm" v-for="loc in location">
                    <figure :class="[props.app.isDesktopDevice?'pt-10':'pt-6']">
                        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body ">
                        <h2 class="card-title">{{ loc.name }}</h2>
                        <div class="flex gap-4">
                            <Icon icon="mdi:location" width="16" height="16" class="text-hijau-text shrink-0" />
                            <p>{{loc.detail}}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <Icon icon="lsicon:time-one-filled" width="16" height="16" class="text-hijau-text shrink-0"/>
                            <p>{{loc.jadwal}}</p>
                        </div>
                        <div class="flex gap-4 items-center">
                            <Icon icon="mage:whatsapp-filled" width="16" height="16" class="text-hijau-text shrink-0" />
                            <p>{{loc.telp}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>