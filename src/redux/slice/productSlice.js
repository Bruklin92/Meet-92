import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk('fetchProduct', async () => {
    const responce = await fetch('http://localhost:5000/api/v1/products/list-products');
    const json = await responce.json();

    console.log(json);
    
    return json.data
})

const productSlice = createSlice({
    name: "product",
    initialState : {
        isLoading : false,
        data : null,
        isError: false
    },
    extraReducers : (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProduct.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;        
        });
    }
})

export default productSlice.reducer