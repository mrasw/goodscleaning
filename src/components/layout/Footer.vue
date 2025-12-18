<script setup>
import GoodsCleanig from '../../assets/images/GoodsCleaning.svg'
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
            :class="[props.app.isDesktopDevice ? 'px-16 py-21' : 'px-3 py-4']">
            <div class="" :class="[props.app.isDesktopDevice ? 'flex flex-row gap-9' : 'grid']">
                <div class="basis-5/12">
                    <aside>
                        <div :class="[props.app.isDesktopDevice ? 'space-y-6' : 'space-y-4']">
                            <div>
                                <img :src="[GoodsCleanig]" :class="[props.app.isDesktopDevice ? 'w-52' : 'w-18']" alt="">
                            </div>
                            <div>
                                <p>
                                    We are a team of passionate cleaning experts who take pride in delivering the
                                    highest standard of service. With years of experience in the industry, we’ve
                                    perfected our cleaning methods to ensure every job is done right.
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
                <div class="basis-7/12" :class="[props.app.isDesktopDevice ? 'grid grid-flow-col lg:gap-14 md:gap-4' : 'grid gap-8']">
                    <div :class="[props.app.isDesktopDevice?'grid grid-cols-2':'grid grid-cols-2']">
                        <div class="">
                            <nav class="space-y-2">
                                <div>
                                    <article class="prose">
                                        <h4 class="text-white">Company</h4>
                                    </article>
                                </div>
                                <div>
                                    <div>
                                        <a class="link link-hover">Home</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">About us</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Our Services</a>
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
                                <div>
                                    <div>
                                        <a class="link link-hover">Basic Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Deep Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">White Shoes Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Leather Shoes Cleaning</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Extra Service</a>
                                    </div>
                                    <div>
                                        <a class="link link-hover">Other Service</a>
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
                                        <Icon icon="mdi:location" width="24" height="24" class="text-kuning-2 shrink-0" />
                                        <div>
                                            <h6 class="font-semibold">Bojong Gede</h6>
                                            <span class="text-sm">Jl. Kp. Masjid No.43, Bojonggede</span>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3 mt-2">
                                        <Icon icon="mage:whatsapp-filled" width="24" height="24" class="text-kuning-2 shrink-0" />
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
                                        <Icon icon="mdi:location" width="24" height="24" class="text-kuning-2 shrink-0" />
                                        <div>
                                            <h6 class="font-semibold">Depok</h6>
                                            <span class="text-sm">Jl. Al-Barkah No.4, Sawangan, Depok</span>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3 mt-2">
                                        <Icon icon="mage:whatsapp-filled" width="24" height="24" class="text-kuning-2 shrink-0" />
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