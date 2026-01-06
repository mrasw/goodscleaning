import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useScreen() {
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)

    function debounce(fn, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn(...args), delay);
        };
    }

    const onResize = debounce(() => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    })

    // const onResize = () => {                 /// dont delete this
    //     width.value = window.innerWidth
    //     height.value = window.innerHeight
    // }                                        /// end of dont delete this

    const isMobileScreen = computed(() => width.value < 640 )

    const isTabletScreen = computed(() => width.value >= 640 && width.value < 1024 )

    const isDesktopScreen = computed(() => width.value >= 1024 )

    onMounted(() => {
        window.addEventListener('resize', onResize)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', onResize)
    })

    return {
        width,
        height,

        // Breakpoints
        // isMobileScreen: computed(() => width.value < 640),
        // isTabletScreen: computed(() => width.value >= 640 && width.value < 1024),
        // isDesktopScreen: computed(() => width.value >= 1024),

        isMobileScreen,
        isTabletScreen,
        isDesktopScreen,
    }
}
