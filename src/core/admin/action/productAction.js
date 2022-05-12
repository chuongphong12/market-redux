import * as actionType from "../constant/actionType/productActionType";

export const setProducts = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

export const fetchFindAll = () => {
    return {
        type: actionType.FETCH_FIND_ALL
    }
}
export const fetchDeleteById = (id) => {
    return {
        type: actionType.FETCH_DELETE_BY_ID,
        payload: id
    }
}