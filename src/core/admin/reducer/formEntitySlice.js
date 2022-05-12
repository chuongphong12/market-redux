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

export const {setFormEntity} = formEntitySlice.actions;

export default formEntitySlice.reducer;