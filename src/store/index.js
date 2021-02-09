import { createStore } from "redux";
import reducers from "reducers/index.js";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from "@reduxjs/toolkit";
import rootSaga from 'sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
