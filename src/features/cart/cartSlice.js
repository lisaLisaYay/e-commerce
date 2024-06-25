import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:{
            reducer:(state,action)=>{
                const item = state.cartItems.find((item)=>item.id===action.payload.id)
                if(item){
                    item.amount++
                } else {
                    state.cartItems.push(action.payload)
                }
            },
            prepare:({id, image, price, rating, title})=>{
                return {
                    payload:{
                    id,
                    image,
                    price,
                    rating,
                    title,
                    amount:1,
                    }
                }
            }
        },
        addItem:(state, action)=>{
            const currentItem = state.cartItems.find((item)=> item.id===action.payload.id)
            if(action.payload.action==="increase"){
                currentItem.amount++
            } else if(action.payload.action==="decrease"&&currentItem.amount>1){
                currentItem.amount--
            }
        },
        clearCart:(state)=>{
            state.cartItems =[]
        },
        deleteCartItem:(state, action)=>{
           const currentItems = state.cartItems.filter((item)=> item.id!==action.payload.id)
           state.cartItems = currentItems
        }
    }
})

export default cartSlice.reducer

export const cartItems = (state)=> state.cart.cartItems
export const totalItems = (state)=> state.cart.totalItems

export const totalItemsPrice = (state)=> state.cart.cartItems.reduce((total,{amount,price})=>total+price*amount,0)
export const totalItemsAmount =(state)=> state.cart.cartItems.reduce((total,{amount})=>total+ amount,0)

export const {addToCart, addItem, clearCart, deleteCartItem} = cartSlice.actions