
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cardInfo:{},
}

const creditCardSlice = createSlice({
    name:"credit",
    initialState,
    reducers:{
        postCardInfo:(state, action)=>{
            state.cardInfo = action.payload
        }
    }
})

export default creditCardSlice.reducer

export const cardInfo = (state)=> state.credit.cardInfo
export const {postCardInfo}= creditCardSlice.actions