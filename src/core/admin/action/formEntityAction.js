import * as actionType from "../constant/actionType/formEntityActionType";

export const setFormEntity = (formEntity) => {
    return {
        type: actionType.SET_FORM_ENTITY,
        payload: formEntity
    }
}