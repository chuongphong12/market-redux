import * as actionTypes from "../constant/actionType/brandActionType";

export const setBrands =(brands) => {
    return {
        type : actionTypes.SET_BRANDS,
        payload : brands
    }
}

export const fetchFindAll = () => {
    return {
        type : actionTypes.FETCH_FIND_ALL
    }
}

export const fetchDeleteById = (id) =>{
    return{
        type : actionTypes.FETCH_DELETE_BY_ID,
        payload : id
    }
}