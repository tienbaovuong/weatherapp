import { createSlice } from '@reduxjs/toolkit'

export const vietnamSlice = createSlice({
    name: "vietnam",
    initialState:[],
    reducers:{
        initiateVNCity:(state, action) =>{
            return state.concat(action.payload)
        },
        removeVNCity: (state, action) =>{
            state = state.filter(city =>{
                return city.city !== action.payload
            })
            return state
        },
        addVNCity: (state, action) =>{
            for(let data in action.payload){
                state = state.filter(city =>{
                    return city.city !== action.payload[data].city
                })
            }
            return state.concat(action.payload)
        }
    }
})
export const{initiateVNCity, removeVNCity, addVNCity}=vietnamSlice.actions

export default vietnamSlice.reducer