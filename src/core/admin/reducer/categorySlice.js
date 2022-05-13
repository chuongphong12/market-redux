import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    categories: [],
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
})
export const categoryActions = categorySlice.actions;

export const categorySelector = (state) => state.categories;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;