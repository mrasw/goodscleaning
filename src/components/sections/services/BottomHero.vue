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
        <div class="rounded-2xl bg-kuning-3 grid gap-16 py-12">
            <div class="grid gap-10">
                <div class="px-22 ">
                    <img :src="bottomheroimg" alt="">
                </div>
                <div class="text-center text-3xl text-hijau-text font-poppins-700">
                    <span>#CuciCepatTetapHemat</span>
                </div>
            </div>
            <div class=" text-center">
                <a class="btn btn-lg text-kuning border-none shadow-none bg-hijau-text font-poppins font-bold text-3xl" href="https://wa.me/6285819423066" target="_blank">
                    <Icon icon="ic:baseline-whatsapp" width="28" height="28" class="kuning-3" />
                    <span>
                        Cuci Sekarang
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>