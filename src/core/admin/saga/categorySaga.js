import {call, put, select} from "redux-saga/effects";
import * as categoryAction from "../action/categoryAction";
import * as common from "../../../utils/common";
import {notifyError, notifySuccess} from "../../../utils/notify";
import categoryApi from "../api/categoryApi";

export function* fetchFindAll() {


    let response = yield call(categoryApi.findAll);
    let {status, data} = response;

    if (status === 200) {
        yield put(categoryAction.setCategories(data));
    } else {
        console.log("Có lỗi xảy ra")
    }

}

export function* fetchDeleteById({payload}) {

    let response = yield call(categoryApi.deleteById, payload);
    let {status} = response;

    if (status === 200) {

        let categories = yield select(state => state.categories);

        categories = common.deleteById(categories, payload);

        yield put(categoryAction.setCategories(categories));

        notifySuccess("Đã xóa thành công");

    } else {
        notifyError("Có lỗi xảy ra");
    }


}



























