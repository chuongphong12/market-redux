import {call, put} from "redux-saga/effects";
import * as productMenuActionType from "../action/productMenuAction";
import {notifyError} from "../../../utils/notify";
import productApi from "../api/productApi";


export function* fetchFindAll() {
    let response = yield call(productApi.findAll);

    let {status, data} = response;

    if (status === 200) {
        // console.log(data)
        yield put(productMenuActionType.setPruducts(data));
    } else {
        notifyError("Có lỗi xảy ra");
    }

}