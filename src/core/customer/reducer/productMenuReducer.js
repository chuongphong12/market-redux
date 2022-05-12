import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    products: [], isLoading: false,
}

const productMenuSlice = createSlice({
    name: "productMenu",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const {setProducts} = productMenuSlice.actions;

export default productMenuSlice.reducer;