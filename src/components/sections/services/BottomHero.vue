<script setup>
    import { ref, onMounted, computed } from 'vue';
    import bottomheroimg from '../../../assets/images/bottomhero.svg'
    import { Icon } from "@iconify/vue";

    
    const props = defineProps({
        app: Object,
    })

</script>

<style scoped>

</style>

<template>
    <section>
        <div class="rounded-2xl bg-kuning-3 grid py-12"
        :class="[props.app.isDesktopDevice?'md:gap-16 sm:gap-10 gap-8':'gap-6']"
        >
            <div class="grid"
            :class="[props.app.isDesktopDevice?'sm:gap-10 gap-5':'gap-3']"
            >
                <div :class="[props.app.isDesktopDevice?'px-22':'px-3']">
                    <img :src="bottomheroimg" alt="">
                </div>
                <div class="text-center text-hijau-text font-poppins-700"
                :class="[props.app.isDesktopDevice?'text-lg sm:text-2xl lg:text-3xl':'text-xs']"
                >
                    <span>#CuciCepatTetapHemat</span>
                </div>
            </div>
            <div class=" text-center">
                <a 
                    class="btn  text-kuning border-none shadow-none bg-hijau-text font-poppins font-bold"
                    :class="[props.app.isDesktopDevice?'md:btn-lg sm:btn-md btn-sm':'md:text-sm sm:text-xs btn-sm']"
                    href="https://wa.me/6285819423066" target="_blank"
                >
                    <Icon icon="ic:baseline-whatsapp" class="kuning-3 md:size-7 sm:size-6 size-5" v-if="props.app.isDesktopDevice"/>
                    <Icon icon="ic:baseline-whatsapp" width="20" height="20" class="kuning-3" v-if="! (props.app.isDesktopDevice)"/>
                    <span class="text-lg sm:text-2xl lg:text-3xl ">
                        Cuci Sekarang
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>