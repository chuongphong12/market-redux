import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	category: [],
};

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		getCategory: (state, action) => {
			state.loading = true;
		},
		getCategorySuccess: (state, action) => {
			state.loading = false;
			state.category = action.payload;
		},
		getCategoryFailure: (state, action) => {
			state.loading = false;
		},
	},
});

export const categoryActions = categorySlice.actions;

export const categorySelector = (state) => state.category;

const categoryReducer = categorySlice.reducer;
export default categoryReducer;
