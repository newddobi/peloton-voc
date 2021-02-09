import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNOUT_USER,
    SIGNOUT_USER_SUCCESS,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS
  } from 'constants/ActionTypes.js';



  export const userSignUp = (user) => {
    return {
      type: SIGNUP_USER,
      payload: user
    };
  };
  export const userSignIn = (user) => {
    return {
      type: SIGNIN_USER,
      payload: user
    };
  };
  export const userSignOut = () => {
    return {
      type: SIGNOUT_USER
    };
  };
  export const userSignUpSuccess = (authUser) => {
    return {
      type: SIGNUP_USER_SUCCESS,
      payload: authUser
    };
  };
  
  export const userSignInSuccess = (authUser) => {
    return {
      type: SIGNIN_USER_SUCCESS,
      payload: authUser
    }
  };
  export const userSignOutSuccess = () => {
    return {
      type: SIGNOUT_USER_SUCCESS,
    }
  };
  