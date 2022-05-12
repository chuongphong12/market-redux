import * as actionType from "../constant/actionType/productMenuActionType";

/**
 * set list product trên store
 */
export const setPruducts= (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        payload: products
    }
}

/**
 * dùng để gọi api
 */
export const fetchFindAll = () => {
    return {
        type: actionType.FETCH_FIND_ALL
    }
}