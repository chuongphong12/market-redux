import {takeLatest} from "redux-saga/effects";
import * as categoryActionType from "../admin/constant/actionType/categoryActionType";
import * as categorySaga from "../admin/saga/categorySaga";
import * as brandActionType from "../admin/constant/actionType/brandActionType";
import * as productMenuActionType from "../admin/constant/actionType/brandActionType";
import * as brandSaga from "../admin/saga/brandSaga";
import * as productMenuSaga from "../admin/saga/brandSaga";
import * as productActionType from "../admin/constant/actionType/productActionType";
import * as productSaga from "../admin/saga/productSaga";
import * as categoryMenuSaga from "../customer/saga/categoryMenuSaga";

export default function* mainSaga() {

// admin saga

    yield takeLatest(categoryActionType.FETCH_FIND_ALL, categorySaga.fetchFindAll);
    yield takeLatest(categoryActionType.FETCH_DELETE_BY_ID, categorySaga.fetchDeleteById);


    yield takeLatest(brandActionType.FETCH_FIND_ALL, brandSaga.fetchFindAll);
    yield takeLatest(brandActionType.FETCH_DELETE_BY_ID, brandSaga.fetchDeleteById);

    yield takeLatest(productActionType.FETCH_FIND_ALL, productSaga.fetchFindAll);
    yield takeLatest(productActionType.FETCH_DELETE_BY_ID, productSaga.fetchDeleteById);

// customer saga
    yield takeLatest(categoryMenuActionType.FETCH_FIND_ALL, categoryMenuSaga.fetchFindAll);
    yield takeLatest(productMenuActionType.FETCH_FIND_ALL, productMenuSaga.fetchFindAll);


} 