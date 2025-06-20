import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice"

export const strore = configureStore({
    reducer : {
        product : productReducer
    }
})