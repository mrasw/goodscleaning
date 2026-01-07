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
        :class="[props.app.isDesktopDevice?'gap-16':'gap-6']"
        >
            <div class="grid"
            :class="[props.app.isDesktopDevice?'gap-10':'gap-3']"
            >
                <div :class="[props.app.isDesktopDevice?'px-22':'px-3']">
                    <img :src="bottomheroimg" alt="">
                </div>
                <div class="text-center text-hijau-text font-poppins-700"
                :class="[props.app.isDesktopDevice?'text-3xl':'text-xs']"
                >
                    <span>#CuciCepatTetapHemat</span>
                </div>
            </div>
            <div class=" text-center">
                <a 
                    class="btn  text-kuning border-none shadow-none bg-hijau-text font-poppins font-bold"
                    :class="[props.app.isDesktopDevice?'text-3xl btn-lg':'md:text-sm sm:text-xs btn-sm']"
                    href="https://wa.me/6285819423066" target="_blank"
                >
                    <Icon icon="ic:baseline-whatsapp" width="28" height="28" class="kuning-3" v-if="props.app.isDesktopDevice"/>
                    <Icon icon="ic:baseline-whatsapp" width="20" height="20" class="kuning-3" v-if="! (props.app.isDesktopDevice)"/>
                    <span>
                        Cuci Sekarang
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>