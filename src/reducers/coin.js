import {
    GET_COIN_REQUEST,
    GET_COIN_SUCCESS,
    GET_COIN_ERROR,
  } from '../constants';
  
  export const initialState = {
    selectedCoin: null,
    isLoading: false,
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_COIN_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case GET_COIN_SUCCESS:
        return {
          ...state,
          selectedCoin: action.coin,
          isLoading: false,
          error: null,
        };
  
      case GET_COIN_ERROR:
        return {
          ...state,
          selectedCoin: null,
          isLoading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };