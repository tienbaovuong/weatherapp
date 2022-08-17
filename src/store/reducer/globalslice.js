import { createSlice } from '@reduxjs/toolkit'

export const globalSlice = createSlice({
    name: "global",
    initialState:[],
    reducers:{
        initiateGlobalCity:(state, action) =>{
            return state.concat(action.payload)
        },
        removeGlobalCity: (state, action) =>{
            state = state.filter(city =>{
                return city.city !== action.payload
            })
            return state
        },
        addGlobalCity: (state, action) =>{
            for(let data in action.payload){
                state = state.filter(city =>{
                    return city.city !== action.payload[data].city
                })
            }
            return state.concat(action.payload)
        }
    }
})
export const{initiateGlobalCity, removeGlobalCity, addGlobalCity}=globalSlice.actions

export default globalSlice.reducer