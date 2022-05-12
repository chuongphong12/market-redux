import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from "../core/admin/reducer/productSlice";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        //admin
        products: productReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
    enhancers: [applyMiddleware(sagaMiddleware)],
    devTools: process.env.NODE_ENV !== 'production',
});
