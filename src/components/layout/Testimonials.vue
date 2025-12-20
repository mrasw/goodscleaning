<script setup>
import { ref, onMounted, computed, onUnmounted, watch, nextTick } from 'vue';
import { useHomeData } from '../../composeables/useHomeData';

const props = defineProps({
    app: Object,
})

const { reviews, loadReviews } = useHomeData()

const containerRef = ref(null);
const itemsPerSlide = ref(1);
const server = import.meta.env.VITE_BACKEND_SERVER

// Function untuk compute items per slide
const computeItemsPerSlide = () => {
    const width = containerRef.value?.clientWidth || window.innerWidth;
    console.log(' Compute width:', width, 'container width:', containerRef.value?.clientWidth);

    if (width >= 1024) {
        itemsPerSlide.value = 4;   // Desktop
    } else if (width >= 768) {
        itemsPerSlide.value = 3; // Tablet
    } else if (width >= 500) {
        itemsPerSlide.value = 2; // Large phone
    } else {
        itemsPerSlide.value = 1; // Small phone
    }

    console.log(' Items per slide:', itemsPerSlide.value);
};

// Function untuk chunk array
const chunk = (arr, size) => {
    if (!arr || arr.length === 0) return [];
    return arr.reduce((acc, _, i) =>
        (i % size ? acc : [...acc, arr.slice(i, i + size)]),
        []);
};

// Computed untuk slides
const slides = computed(() => {
    console.log(' Computing slides...', {
        reviewsCount: reviews.value?.length || 0,
        itemsPerSlide: itemsPerSlide.value
    });

    const result = chunk(reviews.value, itemsPerSlide.value);
    console.log(' Slides result:', result.length, 'slides');
    return result;
});

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

// Load reviews dan setup
onMounted(async () => {
    console.log(' Component mounted');

    // Load reviews
    await loadReviews();
    console.log(' Reviews loaded:', reviews?.value);
    console.log(' Reviews loaded:', reviews.value?.length || 0);
    console.log(' Name loaded:', reviews.value[0]?.authorAttribution?.displayName || 0);
    console.log(' Photo loaded:', reviews.value[0]?.authorAttribution?.photoUri || 0);

    // Tunggu DOM render
    await nextTick();

    // Compute items per slide setelah DOM ready
    computeItemsPerSlide();

    // Setup resize listener
    window.addEventListener("resize", computeItemsPerSlide);

    // Debug info
    console.log(' Final state:', {
        containerWidth: containerRef.value?.clientWidth,
        itemsPerSlide: itemsPerSlide.value,
        slidesCount: slides.value.length
    });
});

onUnmounted(() => {
    window.removeEventListener("resize", computeItemsPerSlide);
});

// Watch untuk reviews changes
watch(reviews, (newReviews) => {
    if (newReviews && newReviews.length > 0) {
        console.log(' Reviews updated, recomputing...');
        nextTick(() => {
            computeItemsPerSlide();
        });
    }
}, { immediate: true });

// Watch untuk width changes
watch(() => props.app.width, () => {
    nextTick(() => {
        computeItemsPerSlide();
    });
});
</script>

<template>
    <section>
        <div>
            <div class="text-center">
                <span
                    class="font-poppins text-base text-hijau-text underline underline-offset-8 decoration-hijau-decoration">
                    TESTIMONI
                </span>
            </div>
            <div class="mt-10 text-center">
                <span class="font-poppins-600 text-hijau-text" :class="[app.isDesktopDevice ? 'text-5xl' : 'text-3xl']">
                    Apa Kata Mereka
                </span>
            </div>
        </div>

        <!-- Loading State -->
        <div v-if="reviews.length === 0" class="text-center py-10">
            <div class="loading loading-spinner text-hijau-text"></div>
            <p class="mt-4 text-hijau-text">Loading testimonials...</p>
        </div>

        <!-- Testimonials Slider -->
        <div v-else class="px-17">
            <!-- Debug Info  -->
            <!-- <div class="text-xs text-gray-500 mb-2">
                Debug: Items per slide: {{ itemsPerSlide }}, Reviews: {{ reviews.length }}, Slides: {{ slides.length }}
            </div> -->

            <div ref="containerRef"
                class="flex overflow-x-auto snap-x snap-mandatory space-x-6 pt-4 scrollbar-hide scrollbar-hidden"
                @scroll="onScroll">

                <div v-for="(group, slideIndex) in slides" :key="slideIndex" class="snap-center shrink-0 w-full">
                    <div class="grid gap-4" :class="{
                        'grid-cols-1': itemsPerSlide === 1,
                        'grid-cols-2': itemsPerSlide === 2,
                        'grid-cols-3': itemsPerSlide === 3,
                        'grid-cols-4': itemsPerSlide === 4,
                    }">

                        <div v-for="(review, index) in group" :key="index" class="card px-4 py-6 text-hijau-text">
                            <!-- <p>{{ review.authorAttribution?.photoUri  }}</p> -->
                            <div class="size-20 rounded-full mb-2 overflow-hidden">
                                <!-- <img :src="review.authorAttribution?.photoUri || ''"
                                    :alt="review.authorAttribution?.displayName || 'User'" class="w-full h-full object-cover"> -->
                                <img :src="`http://${server}/api/google-photo?url=${encodeURIComponent(review.authorAttribution.photoUri)}` || ''"
                                    :alt="review.authorAttribution?.displayName || 'User'" class="w-full h-full object-cover">
                            </div>
                            <h1 class="font-bold">{{ review.authorAttribution?.displayName || 'Anonymous' }}</h1>

                            <!-- Rating Stars -->
                            <div class="rating rating-xs">
                                <input type="radio" disabled :name="`rating-${slideIndex}-${index}`"
                                    class="mask mask-star-2 bg-orange-400" aria-label="1 star"
                                    :checked="review.rating === 1" />
                                <input type="radio" disabled :name="`rating-${slideIndex}-${index}`"
                                    class="mask mask-star-2 bg-orange-400" aria-label="2 star"
                                    :checked="review.rating === 2" />
                                <input type="radio" disabled :name="`rating-${slideIndex}-${index}`"
                                    class="mask mask-star-2 bg-orange-400" aria-label="3 star"
                                    :checked="review.rating === 3" />
                                <input type="radio" disabled :name="`rating-${slideIndex}-${index}`"
                                    class="mask mask-star-2 bg-orange-400" aria-label="4 star"
                                    :checked="review.rating === 4" />
                                <input type="radio" disabled :name="`rating-${slideIndex}-${index}`"
                                    class="mask mask-star-2 bg-orange-400" aria-label="5 star"
                                    :checked="review.rating === 5" />
                            </div>

                            <p class="text-sm mt-2">{{ review.originalText?.text || review.text?.text || '' }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination Dots -->
            <div v-if="slides.length > 1" class="flex justify-center items-center space-x-2 mt-6">
                <button v-for="(s, i) in slides.length" :key="i" @click="goToSlide(i)"
                    class="rounded-full bg-gray-400 transition-all duration-200" :class="[
                        activeSlide === i ? 'bg-hijau-text scale-125' : 'opacity-40',
                        app.isDesktopDevice ? 'size-3' : 'size-2'
                    ]" :aria-label="`Go to slide ${i + 1}`">
                </button>
            </div>
        </div>
    </section>
</template>