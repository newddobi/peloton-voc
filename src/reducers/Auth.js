import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER_SUCCESS,
} from "constants/ActionTypes.js";

const INIT_STATE = {
    signInFlag: false,
    signOutFlag: false,
    signUpFlag: false,
    signInSuccessFlag: false,
};

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case SIGNIN_USER: {
            return {
                ...state,
                signInSuccessFlag: true,
            };
        }
        case SIGNUP_USER_SUCCESS: {
            return {
                ...state,
                signUpFlag: true,
            };
        }
        case SIGNIN_USER_SUCCESS: {
            return {
                ...state,
                signInFlag: true,
            };
        }
        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state,
                signOutFlag: true,
            };
        }
        default:
            return state;
    }
};
