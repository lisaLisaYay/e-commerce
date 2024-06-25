import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice"
import creditCardReducer from "./features/Peyment/creditCardSlice"

const store = configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer,
        credit:creditCardReducer
    }
})

export default store