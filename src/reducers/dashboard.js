import {
    GET_COINS_REQUEST,
    GET_COINS_SUCCESS,
    GET_COINS_ERROR,
  } from '../constants';
  
  export const initialState = {
    coins: null,
    isLoading: false,
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_COINS_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case GET_COINS_SUCCESS:
        return {
          ...state,
          coins: action.coins,
          isLoading: false,
          error: null,
        };
  
      case GET_COINS_ERROR:
        return {
          ...state,
          coins: null,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };