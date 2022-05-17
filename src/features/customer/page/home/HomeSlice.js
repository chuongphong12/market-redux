import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	category: [],
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		getCategory: (state, action) => {
			state.loading = true;
		},
		getCategorySuccess: (state, action) => {
			state.loading = false;
		},
		getCategoryFailure: (state, action) => {
			state.loading = false;
		},
		
		fetchCategory: (state, action) => {
			state.category = action.payload;
		},
	},
});


export const categoryActions = categorySlice.actions;

export const categorySelector = state => state.category;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
