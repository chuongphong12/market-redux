import {takeLatest, call, put} from 'redux-saga/effects'
import customerApi from "../../../../api/customerApi";
import {categoryActions} from "./HomeSlice";
import {notifyError} from "../../../../utils/notify";

function* fetchAllCategory() {
	try {
		const response = yield call(customerApi.categoryApi.findAll);
		yield put(categoryActions.fetchCategory(response.data));
	} catch (e) {
		notifyError(e.message);
		yield put(categoryActions.getCategoryFailure(e.message));
	}
}

export default function* HomeSaga() {
	yield takeLatest(categoryActions.fetchCategory.type, fetchAllCategory);
}