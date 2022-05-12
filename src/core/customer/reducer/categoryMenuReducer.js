import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    isLoading: false,
}

const categoryMenuSlice = createSlice({
    name: "categoryMenu",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        }
    }
})

export const {setCategories} = categoryMenuSlice.actions;

export default categoryMenuSlice.reducer;