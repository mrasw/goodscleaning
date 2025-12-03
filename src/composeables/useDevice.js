import { computed } from 'vue'

export function useDevice() {

    const ua = navigator.userAgent.toLowerCase()

    const isAndroid = /android/.test(ua)
    const isIOS = /iphone|ipad|ipod/.test(ua)
    const isMobileDevice = /android|iphone|ipad|ipod/.test(ua)
    const isDesktopDevice = !isMobileDevice

    const deviceType = computed(() => {
        if (isMobileDevice) {
            if (/ipad/.test(ua)) return 'tablet'
            return 'mobile'
        }
        return 'desktop'
    })

    return {
        isAndroid,
        isIOS,
        isMobileDevice,
        isDesktopDevice,
        deviceType
    }
}
