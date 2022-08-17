import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: "global",
    initialState:[],
    reducers:{
        initiateGlobalCity:(state, action) =>{
            return state.concat(action.payload)
        },
        removeGlobalCity: (state, action) =>{
            state.value = state.value.filter(city =>{
                return city.city !== action.payload
            })
        }
    }
})
export const{initiateGlobalCity, removeGlobalCity}=globalSlice.actions

export default globalSlice.reducer