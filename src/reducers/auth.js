import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_ERROR,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
  } from '../constants';
  
  export const initialState = {
    user: null,
    isLoading: false,
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
      case LOGIN_USER_REQUEST:
      case LOGOUT_USER_REQUEST:
      case CREATE_USER_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case GET_USER_SUCCESS:
      case LOGIN_USER_SUCCESS:
      case LOGOUT_USER_SUCCESS:
      case CREATE_USER_SUCCESS:
        return {
          ...state,
          user: action.user,
          isLoading: false,
          error: null,
        };
  
      case GET_USER_ERROR:
      case LOGIN_USER_ERROR:
      case LOGOUT_USER_ERROR:
      case CREATE_USER_ERROR:
        return {
          ...state,
          user: null,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };