import {call, put, select} from "redux-saga/effects";
import * as productAction from "../action/productAction";
import * as common from "../../../utils/common";
import {notifyError, notifySuccess} from "../../../utils/notify";
import productApi from "../api/productApi";

export function* fetchFindAll() {


    let response = yield call(productApi.findAll);
    let {status, data} = response;

    if (status === 200) {
        yield put(productAction.setProducts(data));
    } else {
        console.log("Có lỗi xảy ra")
    }

}

export function* fetchDeleteById({payload}) {

    let response = yield call(productApi.deleteById, payload);
    let {status} = response;

    if (status === 200) {

        let products = yield select(state => state.products);

        products = common.deleteById(products, payload);

        yield put(productAction.setProducts(products));

        notifySuccess("Đã xóa thành công");

    } else {
        notifyError("Có lỗi xảy ra");
    }


}



























