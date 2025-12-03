<script setup>
import GoodsCleanig from '../../assets/images/GoodsCleanig.svg'

import { useAppStore } from '../../../srcEx/stores/app';

import { ref } from 'vue';

const app = useAppStore()

const param = ref({
    image: GoodsCleanig
})
</script>

<style scoped>
.font-poppins {
    font-family: Poppins, sans-serif;
}

.font-poppins-700 {
    font-family: Poppins, sans-serif;
    font-weight: 700;
}

.font-poppins-900 {
    font-family: Poppins, sans-serif;
    font-weight: 900;
}
</style>

<template>
    <!-- <div class="navbar shadow-sm bg-linear-to-r from-hijau-0 to-hijau-100 rounded-md px-3"> -->
    <div class="navbar shadow-sm dark:bg-linear-to-r dark:from-hijau-0 dark:to-hijau-100 not-dark:bg-hijau-text rounded-md px-3">
        <div class="navbar-start">
            <img :src="param.image" alt="">
            <!-- <div class="avatar mr-1">
                <div class="w-8 rounded-full ">
                    <img :src="param.image" alt="">
                </div>
            </div>
            <a class="text-md font-bold">Goods Cleaning</a> -->
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 font-poppins font-bold text-white">
                <li><a>About Us</a></li>
                <!-- <li>
                <details>
                    <summary>Parent</summary>
                    <ul class="p-2 bg-base-100 w-40 z-1">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li> -->
                <li><a>Service</a></li>
                <li><a>Testimoni</a></li>
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
                    <!-- <li>
                        <a>Parent</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li>
                    <li><a>Item 3</a></li> -->
                </ul>
            </div>
            <div v-if="app.isDesktopDevice">
                <div class="">
                    <button class="btn bg-kuning border-none shadow-none text-hijau-text font-poppins font-bold">Contact Us</button>
                </div>
            </div>
        </div>
        <!-- <div class="navbar-end">
            <a class="btn">Button</a>
        </div> -->
    </div>
</template>