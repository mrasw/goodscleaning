import { ref } from "vue"
// import { fetchGoogleReviews } from "@/api/services/googleService"
import { fetchGoogleReviews } from "../api"

export function useHomeData() {
    const reviews = ref([])

    // async function loadReviews() {
    //     const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID
    //     const apiKey  = import.meta.env.VITE_GOOGLE_API_KEY

    //     reviews.value = await fetchGoogleReviews(placeId, apiKey)
    //     console.log(reviews.value)
    //     // reviews.value = await fetchGoogleReviews(import.meta.env.VITE_GOODSCLEANING_PLACE_ID)
    // }
    
    const loadReviews = async () => {
        reviews.value = await fetchGoogleReviews(import.meta.env.VITE_GOOGLE_PLACE_ID)
        // console.log(reviews.value)
    }

    return { reviews, loadReviews }
}
