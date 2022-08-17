import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
    name: 'weather',
    initialState:{
        "Sunny": "/image/sunny.png",
        "Cloudy": "/image/cloudy.png",
        "Rainy": "/image/rainy.png",
        "Snowy": "/image/snowy.png",
        "Thunderstorm": "/image/thunderstorm.png",
        "Tornado": "/image/tornado.png",
        "Blizzard": "/image/blizzard.png",
        "Drought": "/image/drought.png"
    },
    reducers:{
    }
})

export default weatherSlice.reducer