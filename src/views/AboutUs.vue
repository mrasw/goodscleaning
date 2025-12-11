<script setup>
    import Hero from '../components/sections/aboutus/Hero.vue';

    import { useAppStore } from '../../srcEx/stores/app';
    import { ref, computed, onMounted,  } from 'vue';

    const app = useAppStore()
</script>

<template>
    <div class="w-full bg-white
        [background-image:linear-gradient(to_bottom,#02402C,#05A672)]
        [background-size:100%_528px]
        [background-repeat:no-repeat]"
        
    >
        <Hero :app="app"/>
    </div>


</template>