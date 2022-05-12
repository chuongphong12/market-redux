import * as actionType from "../constant/actionType/categoryMenuActionType";

/**
 * set list categories trên store
 */
export const setCategories = (categories) => {
    return {
        type: actionType.SET_CATEGORIES,
        payload: categories
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