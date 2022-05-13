import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    products: [],
    loading: false,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        }
    }
});

export const productAction = productSlice.actions;

export const productSelector = (state) => state.product;

const productReducer = productSlice.reducer;
export default productReducer;