import {takeLatest, call, put} from 'redux-saga/effects'
import customerApi from "../../../../api/customerApi";
import {categoryActions} from "./HomeSlice";
import {notifyError} from "../../../../utils/notify";

function* fetchAllCategory() {
    let response = yield call(customerApi.categoryApi.findAll);

    let {status, data} = response;

    if (status === 200) {
        yield put(categoryActions.fetchCategory(data));
    } else {
        notifyError("Có lỗi xảy ra");
    }
}

export default function* HomeSaga() {
    yield takeLatest(categoryActions.fetchCategory.type, fetchAllCategory);
}