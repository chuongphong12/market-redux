import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    formEntity: {},
    isLoading: false,
}

const formEntitySlice = createSlice({
    name: "formEntity",
    initialState,
    reducers: {
        setFormEntity: (state, action) => {
            state.formEntity = action.payload;
        }
    }
})

export const formEntityActions = formEntitySlice.actions;

export const formEntitySelector = (state) => state.formEntity;

const formEntityReducer = formEntitySlice.reducer;
export default formEntityReducer;