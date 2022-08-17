import { configureStore } from '@reduxjs/toolkit'
import citiesDataReducer from "./reducer/citiesdataslice.js";
import weatherReducer from "./reducer/weatherslice.js";
import vietnamReducer from "./reducer/vietnamslice.js";
import globalReducer from "./reducer/globalslice.js";

export default configureStore({
    reducer: {
        citiesData: citiesDataReducer,
        weather: weatherReducer,
        vietnam: vietnamReducer,
        global: globalReducer
    },
})