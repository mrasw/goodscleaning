<script setup>
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useHomeData } from '../../../../composeables/useHomeData';


const props = defineProps({
    app: Object,
})

const { reviews, loadReviews } = useHomeData()

console.log(reviews)

onMounted(() => {
    loadReviews()
})

const chunk = (arr, size) =>
    arr.reduce((acc, _, i) =>
        (i % size ? acc : [...acc, arr.slice(i, i + size)]),
        []);

const containerRef = ref(null);
const itemsPerSlide = ref(1);

const computeItemsPerSlide = () => {
    const width = containerRef.value?.clientWidth || 0;

    if (width >= 1024) itemsPerSlide.value = 4;   // Desktop
    else if (width >= 768) itemsPerSlide.value = 3; // Tablet
    else if (width >= 500) itemsPerSlide.value = 2; // Large phone
    else itemsPerSlide.value = 1; // Small phone
};

onMounted(() => {
    computeItemsPerSlide();
    window.addEventListener("resize", computeItemsPerSlide);
});

onUnmounted(() => {
    window.removeEventListener("resize", computeItemsPerSlide);
});

const slides = computed(() => chunk(reviews.value, itemsPerSlide.value));

// Navigation
const activeSlide = ref(0);

const goToSlide = (i) => {
    const el = containerRef.value;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
};

const onScroll = (e) => {
    const el = e.target;
    activeSlide.value = Math.round(el.scrollLeft / el.clientWidth);
};
</script>

<template>
    <!-- testimonials -->
    <section>
        <div class="">
            <div>
                <div class="justify-items-center">
                    <div class="w-full">
                        <div class="text-center">
                            <span
                                class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                                TESTIMONIALS
                            </span>
                        </div>
                        <div class="mt-10 text-center">
                            <div>
                                <span class=" font-poppins-600 text-hijau-text"
                                :class="[props.app.isDesktopDevice?'text-5xl':'text-3xl']"
                                >
                                    Our Happy Cutomers
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div ref="containerRef"
                            class="flex overflow-x-auto snap-x snap-mandatory space-x-6 pt-4 scrollbar-hide scrollbar-hidden"
                            @scroll="onScroll">

                            <div v-for="(group, slideIndex) in slides" :key="slideIndex"
                                class="snap-center shrink-0 w-full">
                                <div class="grid gap-4" :class="{
                                    'grid-cols-1': itemsPerSlide === 1,
                                    'grid-cols-2': itemsPerSlide === 2,
                                    'grid-cols-3': itemsPerSlide === 3,
                                    'grid-cols-4': itemsPerSlide === 4,
                                }">

                                    <div v-for="(review, index) in group" :key="index"
                                        class="card  px-4 py-6 text-hijau-text">
                                        <!-- <div class="size-20 bg-gray-200 rounded mb-2"></div> -->
                                        <div class="size-20 rounded-full mb-2">
                                            <img :src="[review.authorAttribution.photoUri]" alt="">
                                        </div>
                                        <h1 class="font-bold">{{ review.authorAttribution.name }}</h1>
                                        <div class="rating rating-xs">
                                            <input type="radio" :name="['rating' + '-' + slideIndex + '-' + index]"
                                                class="mask mask-star-2 bg-orange-400" aria-label="1 star"
                                                :checked="[review.rating === 1]" />
                                            <input type="radio" :name="['rating' + '-' + slideIndex + '-' + index]"
                                                class="mask mask-star-2 bg-orange-400" aria-label="2 star"
                                                :checked="[review.rating === 2]" />
                                            <input type="radio" :name="['rating' + '-' + slideIndex + '-' + index]"
                                                class="mask mask-star-2 bg-orange-400" aria-label="3 star"
                                                :checked="[review.rating === 3]" />
                                            <input type="radio" :name="['rating' + '-' + slideIndex + '-' + index]"
                                                class="mask mask-star-2 bg-orange-400" aria-label="4 star"
                                                :checked="[review.rating === 4]" />
                                            <input type="radio" :name="['rating' + '-' + slideIndex + '-' + index]"
                                                class="mask mask-star-2 bg-orange-400" aria-label="5 star"
                                                :checked="[review.rating === 5]" />
                                        </div>
                                        <p class="text-sm">{{ review.originalText.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pagination Dots -->
                        <div class="flex justify-center items-center space-x-2">
                            <button v-for="(s, i) in slides.length" :key="i" @click="goToSlide(i)"
                                class=" rounded-full  bg-gray-400 transition"
                                :class="activeSlide === i ? 'bg-hijau-text scale-115' : 'opacity-40'"
                                v-bind:class="[props.app.isDesktopDevice?'size-3': 'size-2']"
                                >
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- end of testimonials -->


</template>