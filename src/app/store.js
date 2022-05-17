import {applyMiddleware, combineReducers, configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
import categoryReducer from "../features/customer/page/home/HomeSlice";

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
    category: categoryReducer
});

const store = configureStore({
    reducer: combinedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
    enhancers: [applyMiddleware(sagaMiddleware)],
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export default store;