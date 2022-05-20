import { call, put, takeLatest } from 'redux-saga/effects';
import customerApi from '../../../../api/customerApi';
import { notifyError } from '../../../../utils/notify';
import { categoryActions } from './HomeSlice';

function* fetchAllCategory() {
	try {
		const response = yield call(customerApi.categoryApi.findAll);
		if (response.status === 200) {
			yield put(categoryActions.getCategorySuccess(response.data));
		} else {
			yield put(categoryActions.getCategoryFailure());
			notifyError('Không thể lấy danh mục');
		}
	} catch (e) {
		notifyError(e.message);
		yield put(categoryActions.getCategoryFailure(e.message));
	}
}

export default function* HomeSaga() {
	yield takeLatest(categoryActions.getCategory.type, fetchAllCategory);
}
