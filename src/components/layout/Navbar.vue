<script setup>
import GoodsCleanig from '../../assets/images/GoodsCleaning.svg'

import { useAppStore } from '../../../srcEx/stores/app';

import { ref } from 'vue';
import { Icon } from "@iconify/vue";

const app = useAppStore()

const param = ref({
    image: GoodsCleanig
})

const props = defineProps({
    path: String,
})
</script>


<template>
    <div class="navbar px-3"
        :class="[(props.path == '/')?'dark:bg-linear-to-r dark:from-hijau-0 dark:to-hijau-100 not-dark:bg-hijau-text rounded-md shadow-sm':'bg-hijau-text rounded-t-md']"
    >
        <div class="navbar-start">
            <img :src="param.image" alt="">
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 font-poppins font-bold text-white">
                <li><a href="/" :class="[(props.path == '/')?'underline underline-offset-8 decoration-kuning-3':'']">Home</a></li>
                <li><a href="/aboutus" :class="[(props.path == '/aboutus')?'underline underline-offset-8 decoration-kuning-3':'']">About Us</a></li>
                <li><a href="/services" :class="[(props.path == '/services')?'underline underline-offset-8 decoration-kuning-3':'']">Services</a></li>
                <li><a href="/partnership" :class="[(props.path == '/partnership')?'underline underline-offset-8 decoration-kuning-3':'']">Partnership</a></li>
            </ul>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end" v-if="app.isMobileDevice">
                <div tabindex="0" role="button" class="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class=" menu menu-sm dropdown-content 
                            dark:bg-linear-to-r dark:from-hijau-0 dark:to-hijau-100 not-dark:bg-hijau-text 
                            rounded-box z-11 mt-3 w-52 p-2 shadow font-poppins
                        "
                >
                    <li><a class="not-dark:text-gradient-hijau-100 dark:text-kuning-3">Contact Us</a></li>
                </ul>
            </div>
            <div v-if="app.isDesktopDevice">
                <div class="">
                    <a class="btn bg-kuning border-none shadow-none text-hijau-text font-poppins font-bold" href="https://wa.me/6285819423066" target="_blank">
                        <Icon icon="ic:baseline-whatsapp" width="24" height="24" :style="{ color: '#02402C' }" />
                        <span>
                            Contact Us
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    
</template>