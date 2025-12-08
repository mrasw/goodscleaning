import axios from "axios";

export async function fetchGoogleReviews(placeId) {
    const res = await fetch(`http://localhost:3001/api/google-reviews?placeId=${placeId}`)
    // const res = await fetch(`http://192.168.1.2:3001/api/google-reviews?placeId=${placeId}`)
    const data = await res.json()
    // console.log(data)
    return data?.reviews || []
}
