import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    brands: []
}

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        getBrands: (state, action) => {
            state.brands = action.payload;
        },
        fetchBrands: (state, action) => {
            state.brands = action.payload;
        }
    }
})

export const brandActions = brandSlice.actions;

export const brandSelector = (state) => state.brands;

const brandReducer = brandSlice.reducer;
export default brandReducer;
