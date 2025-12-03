import { defineStore } from 'pinia'
import { useScreen } from '../composeables/useScreen'
import { useDevice } from '../composeables/useDevice'

export const useAppStore = defineStore('app', () => {
    const screen = useScreen()
    const device = useDevice()

    return {
        ...screen,
        ...device

        // // reactive dari useScreen
        // width: screen.width,
        // height: screen.height,
        // isMobileScreen: screen.isMobileScreen,
        // isTabletScreen: screen.isTabletScreen,
        // isDesktopScreen: screen.isDesktopScreen,

        // // non-reactive dari useDevice
        // deviceType: device.deviceType,
        // isMobileDevice: device.isMobileDevice,
        // isDesktopDevice: device.isDesktopDevice,
    }
})
