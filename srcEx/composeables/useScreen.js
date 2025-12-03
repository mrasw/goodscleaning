import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useScreen() {
    const width = ref(window.innerWidth)
    const height = ref(window.innerHeight)

    const onResize = () => {
        width.value = window.innerWidth
        height.value = window.innerHeight
    }

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
