import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SIGNIN_USER, SIGNUP_USER } from "constants/ActionTypes";

const createUserRequest = async (email, password) => {
    console.log(email, password);
};

const signInUserRequest = async (email, password) => {
    console.log(email, password);
};

function* createUserWithEmailPassword({ payload }) {
    const { email, password } = payload;
    try {
        const signUpUser = yield call(createUserRequest, email, password);

        console.log(signUpUser);
    } catch (error) {
        console.log("error :", error);
    }
}

function* signInUserProcess({ payload }) {
    const { email, password } = payload;
    try {
        const signInUser = yield call(signInUserRequest, email, password);
        console.log(signInUser);
    } catch (error) {
        console.log("error :", error);
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserProcess);
}

export default function* rootSaga() {
    yield all([fork(signInUser), fork(createUserAccount)]);
}
