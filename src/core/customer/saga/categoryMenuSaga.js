import {call, put} from "redux-saga/effects";
import * as categoryMenuActionType from "../action/categoryMenuAction";
import {notifyError} from "../../../utils/notify";
import categoryApi from "../api/categoryApi";


export function* fetchFindAll() {
    let response = yield call(categoryApi.findAll);

    let {status, data} = response;

    if (status === 200) {
        // console.log(data)
        yield put(categoryMenuActionType.setCategories(data));
    } else {
        notifyError("Có lỗi xảy ra");
    }

}