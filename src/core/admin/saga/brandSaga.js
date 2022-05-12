import {call, put, select} from "redux-saga/effects";
import * as brandAction from "../action/brandAction";
import * as common from "../../../utils/common";
import {notifyError, notifySuccess} from "../../../utils/notify";
import brandApi from "../api/brandApi";

export function* fetchFindAll() {
    let response = yield call(brandApi.findAll());
    let {status, data} = response;

    if (status === 200) {
        yield put(brandAction.setBrands(data));
    } else {
        console.log("Có lỗi xảy ra")
    }
}

export function* fetchDeleteById({payload}) {

    let response = yield call(brandApi.deleteId, payload);
    let {status} = response;

    if (status === 200) {

        let brands = yield select(state => state.brands);

        brands = common.deleteById(brands, payload);

        yield put(brandAction.setBrands(brands));

        notifySuccess("Đã xóa thành công");
    } else {
        notifyError("Có lỗi xảy ra");
    }
}