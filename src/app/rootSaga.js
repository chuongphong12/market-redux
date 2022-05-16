import {all} from 'redux-saga/effects';
import HomeSaga from "../features/customer/page/home/HomeSaga";

export default function* rootSaga() {
    yield all([HomeSaga()]);
}