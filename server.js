import express from "express"
import axios from "axios"
import cors from "cors"
import dotenv from "dotenv"

// dotenv.config()
dotenv.config({ path: ".env.server" })

const app = express()
app.use(cors())

app.get("/api/google-reviews", async (req, res) => {
    try {
        const placeId = req.query.placeId
        // console.log("REQ masuk → placeId =", placeId)
        // console.log("API KEY:", process.env.GOOGLE_API_KEY)

        // const url = "https://maps.googleapis.com/maps/api/place/details/json"
        // const response = await axios.get(url, {
        //     params: {
        //         place_id: placeId,
        //         fields: "reviews,rating,user_ratings_total",
        //         key: process.env.GOOGLE_API_KEY
        //     }
        // })
        
        const url = `https://places.googleapis.com/v1/places/${placeId}`
        const response = await axios.get(url, {
            headers: {
                "X-Goog-Api-Key": process.env.GOOGLE_API_KEY,
                "X-Goog-FieldMask": "reviews,rating,userRatingCount"
            }
        })

        // console.log(response)

        res.json(response.data)
    } catch (err) {
        console.error("Google API Error:", err.message)
        res.status(500).json({ error: "Failed fetching Google Reviews" })
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log("Backend Server running on port", PORT))
