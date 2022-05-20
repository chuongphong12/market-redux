import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import categoryReducer from '../features/customer/page/home/HomeSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
	category: categoryReducer,
});

const store = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
