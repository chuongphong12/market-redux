import * as actionTypes from "../constant/actionType/brandActionType";
import {createSlice} from "@reduxjs/toolkit";

const brandSlice = (state = [], action) => {

    switch (action.type) {

        case actionTypes.SET_BRANDS:
            let {payload} = action;
            state = payload;
            return [...state];

        default:
            return [...state];

    }

}

const initialState = {
    brands: []
}

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        setBrands: (state, action) => {
            state.brands = action.payload;
        }
    }
})

export const {setBrands} = brandSlice.actions;

export default brandSlice;
