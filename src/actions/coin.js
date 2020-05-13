import toastr from 'toastr';
import API from '../utils/API'
import {
    GET_COIN_REQUEST,
    GET_COIN_SUCCESS,
    GET_COIN_ERROR,
  } from '../constants';

  const selectedCoinRequest = () => ({
    type: GET_COIN_REQUEST,
  });
  
  const selectedCoinSuccess = coin => ({
    type: GET_COIN_SUCCESS,
    coin,
  });
  
  const selectedCoinError = error => ({
    type: GET_COIN_ERROR,
    error,
  });

  export const fetchedCoin = (coinId) => dispatch => {
    dispatch(selectedCoinRequest());
    API.get(`/coin/${coinId}`)
    .then(selected => {
        dispatch(selectedCoinSuccess(selected.data.coin));
        toastr.success('Fetched coin successfully');
      })
      .catch(error => {
        dispatch(selectedCoinError(error));
        toastr.error(error.message);
      });

  };