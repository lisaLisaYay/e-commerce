import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products"


export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(PRODUCTS_URL)
    return response.data
})

export const fetchSingleProduct = createAsyncThunk("products/fetchSingleProduct", async (id)=>{
    const response = await axios.get(`${PRODUCTS_URL}/${id}`)
    return response.data
})

export const fetchCategory = createAsyncThunk("products/fetchCategory", async (category)=>{
    const response = await axios.get(`${PRODUCTS_URL}/category/${category}`)
    return response.data
})

const initialState = {
    products:[],
    singleProduct:{},
    filteredProducts:[],
    productsStatus:"idle",
    singleProductStatus:"idle",
    filterProductsStatus:"idle"
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
    },
    extraReducers(builder){
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.productsStatus = "loading"
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.productsStatus = "succeeded"
            state.products = action.payload
        })
        .addCase(fetchSingleProduct.pending, (state)=>{
            state.singleProductStatus = "loading"
        })
        .addCase(fetchSingleProduct.fulfilled, (state, action)=>{
            state.singleProductStatus = "succeeded"
            state.singleProduct = action.payload
        })
        .addCase(fetchCategory.pending, (state)=>{
            state.filterProductsStatus = "loading"
        })
        .addCase(fetchCategory.fulfilled, (state, action)=>{
            state.filterProductsStatus ="succeeded"
            state.filteredProducts= action.payload
        })
    }
})

export default productSlice.reducer

export const allProducts = (state)=> state.products.products
export const filterProduct = (state)=> state.products.filteredProducts
export const singleProduct = (state)=> state.products.singleProduct

export const categoryStatus = (state)=> state.products.filterProductsStatus
export const productStatus = (state)=> state.products.singleProductStatus