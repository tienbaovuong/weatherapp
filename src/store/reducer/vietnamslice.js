import { createSlice } from '@reduxjs/toolkit'

export const vietnamSlice = createSlice({
    name: "vietnam",
    initialState:[],
    reducers:{
        initiateVNCity:(state, action) =>{
            return state.concat(action.payload)
        },
        removeVNCity: (state, action) =>{
            state.value.filter(city =>{
                return city.city !== action.payload
            })
        }
    }
})
export const{initiateVNCity, removeVNCity}=vietnamSlice.actions

export default vietnamSlice.reducer