import { compose, createStore } from "redux";
import reducers from "reducers/index.js";
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from "@reduxjs/toolkit";
import rootSaga from 'sagas/index.js';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        reducers,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
