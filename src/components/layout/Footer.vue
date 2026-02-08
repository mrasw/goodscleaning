<script setup>
import GoodsCleanig from '../../assets/images/GoodsCleaning.webp'
import { ref } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
    app: Object,
})
</script>

<template>

    <!-- footer -->
    <section>
        <footer class="footer sm:footer-horizontal bg-hijau-text rounded-b-md text-white"
            :class="[props.app.isDesktopDevice ? 'md:px-16 sm:px-8 px-5 md:py-21 sm:py-10 py-7' : 'px-3 py-4']">
            <div class="" :class="[props.app.isDesktopDevice ? 'sm:flex sm:flex-row ' : 'grid']">
                <div class="basis-4/12">
                    <aside>
                        <div :class="[props.app.isDesktopDevice ? 'space-y-4 md:space-y-6' : 'space-y-4']">
                            <div :class="[props.app.isDesktopDevice?'':'']">
                                <img :src="[GoodsCleanig]" :class="[props.app.isDesktopDevice ? 'md:w-40 sm:w-26 w-20' : 'w-18']" alt="">
                            </div>
                            <div>
                                <p class="md:text-sm text-xs">
                                    Kami adalah tim profesional yang berpengalaman dalam perawatan sepatu. Dengan standar kerja tinggi dan perhatian pada setiap detail, kami memastikan setiap pasang sepatu ditangani dengan metode terbaik. Berbekal pengalaman bertahun-tahun, kami terus menyempurnakan proses pencucian agar hasil yang diberikan selalu maksimal bersih, rapi, dan layak dipercaya.
                                </p>
                            </div>
                        </div>
                        <div class="flex gap-8 mt-6">
                            <a href="https://www.facebook.com/goodscleaning/" target="_blank">
                                <Icon icon="entypo-social:facebook" width="24" height="24" style="color: #fff" />
                            </a>
                            <a href="https://www.instagram.com/goodscleaning_/" target="_blank">
                                <Icon icon="mdi:instagram" width="24" height="24" style="color: #fff" />
                            </a>
                            <a href="https://wa.me/6285819423066" target="_blank">
                                <Icon icon="streamline-logos:whatsapp-logo-block" width="24" height="24"
                                    style="color: #fff" />
                            </a>
                        </div>
                    </aside>
                </div>

                <div class="basis-1/12">
                </div>

                <div class="basis-7/12" :class="[props.app.isDesktopDevice ? 'grid lg:grid-flow-col md:gap-12 sm:gap-4 gap-3' : 'grid gap-8']">
                    <div :class="[props.app.isDesktopDevice?'grid grid-cols-2':'grid grid-cols-2']">
                        <div class="">
                            <nav class="space-y-2">
                                <div>
                                    <article class="prose">
                                        <h4 class="text-white">Company</h4>
                                    </article>
                                </div>
                                <div class="space-y-1">
                                    <div>
                                        <a href="/" class="link link-hover">Home</a>
                                    </div>
                                    <div>
                                        <a href="/aboutus" class="link link-hover">About us</a>
                                    </div>
                                    <div>
                                        <a href="/services" class="link link-hover">Our Services</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Testimonials</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Contact</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div class="">
                            <nav class="space-y-2">
                                <div>
                                    <article class="prose">
                                        <h4 class=" text-white">Our Services</h4>
                                    </article>
                                </div>
                                <div class="space-y-1">
                                    <div>
                                        <a class="">Basic Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="">Deep Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="">White Shoes Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="">Leather Shoes Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="">Extra Service</a>
                                    </div>
                                    <div>
                                        <a class="">Other Service</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div>
                        <nav class="space-y-2">
                            <article class="prose">
                                <h4 class="text-white">Locations</h4>
                            </article>
                            <div class="grid space-y-5">
                                <div class="inline-block">
                                    <div class="flex items-start gap-3">
                                        <div class="my-auto">
                                            <Icon icon="mdi:location" width="24" height="24" class="text-kuning-2 shrink-0" v-if="props.app.isDesktopDevice"/>
                                            <Icon icon="mdi:location" width="20" height="20" class="text-kuning-2 shrink-0" v-if="!(props.app.isDesktopDevice)"/>
                                        </div>
                                        <div>
                                            <h6 class="font-semibold">Bojong Gede</h6>
                                            <!-- <span class="">Jl. Kp. Masjid No.43, Bojonggede</span> -->
                                            <a 
                                                href="https://www.google.com/maps/place/Goods+Cleaning/@-6.4889342,106.7948356,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c35e46e1bbd3:0xf5471f2cec4db3ec!8m2!3d-6.4889342!4d106.7974159!16s%2Fg%2F11w1xz35t6?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                                class="link link-hover"
                                                target="_blank"
                                            >
                                                Jl. Kp. Masjid No.43, Bojonggede
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3 mt-2">
                                        <div class="my-auto">
                                            <div class="my-auto">
                                                <Icon icon="mage:whatsapp-filled" width="24" height="24" class="text-kuning-2 shrink-0" v-if="props.app.isDesktopDevice"/>
                                                <Icon icon="mage:whatsapp-filled" width="20" height="20" class="text-kuning-2 shrink-0" v-if="!(props.app.isDesktopDevice)"/>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 class="font-semibold">Contact Us</h6>
                                            <a href="https://wa.me/6285819423066" target="_blank" class="text-sm  hover:underline">
                                                +62 858-1942-3066
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="inline-block">
                                    <div class="flex items-start gap-3">
                                        <div class="my-auto">
                                            <Icon icon="mdi:location" width="24" height="24" class="text-kuning-2 shrink-0" v-if="props.app.isDesktopDevice"/>
                                            <Icon icon="mdi:location" width="20" height="20" class="text-kuning-2 shrink-0" v-if="!(props.app.isDesktopDevice)"/>
                                        </div>
                                        <div>
                                            <h6 class="font-semibold">Depok</h6>
                                            <a 
                                                href="https://www.google.com/maps/place/Goods+Cleaning/@-6.4325125,106.7785688,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69e900489918b1:0x9fc0ae1e75d7a24!8m2!3d-6.4325125!4d106.7834344!16s%2Fg%2F11yd1fcmpw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                                                class="link link-hover"
                                                target="_blank"
                                            >
                                                Jl. Al-Barkah No.4, Sawangan, Depok
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3 mt-2">
                                        <div class="my-auto">
                                            <Icon icon="mage:whatsapp-filled" width="24" height="24" class="text-kuning-2 shrink-0" v-if="props.app.isDesktopDevice"/>
                                            <Icon icon="mage:whatsapp-filled" width="20" height="20" class="text-kuning-2 shrink-0" v-if="!(props.app.isDesktopDevice)"/>
                                        </div>
                                        <div>
                                            <h6 class="font-semibold">Contact Us</h6>
                                            <a href="https://wa.me/6285885243062" target="_blank" class="text-sm  hover:underline">
                                                +62 858-8524-3062
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="mt-10">
                                    <div>
                                        <div class="flex">
                                            <Icon icon="mdi:location" class="m-0" width="24" height="24"
                                                :style="{ color: '#E8C100' }" />
                                            <h6>Depok Location</h6>
                                        </div>
                                        <span>Jl. Al-Barkah No.4, Sawangan, Depok</span>
                                    </div>
                                    <div class="mt-2">
                                        <div class="flex">
                                            <Icon icon="mage:whatsapp-filled" class="m-0" width="24" height="24"
                                                :style="{ color: '#E8C100' }" />
                                            <h6>Contact Us</h6>
                                        </div>
                                        <a href="https://wa.me/6285885243062" target="_blank">+62 858-8524-3062</a>
                                    </div>
                                    <div></div>
                                </div> -->
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    </section>
    <!-- end of footer -->
</template>