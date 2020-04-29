import toastr from 'toastr';
import API from '../utils/API'
import {
    GET_COINS_REQUEST,
    GET_COINS_SUCCESS,
    GET_COINS_ERROR,
  } from '../constants';

  const dashboardCoinsRequest = () => ({
    type: GET_COINS_REQUEST,
  });
  
  const dashboardCoinsSuccess = coins => ({
    type: GET_COINS_SUCCESS,
    coins,
  });
  
  const dashboardCoinsError = error => ({
    type: GET_COINS_ERROR,
    error,
  });

  export const fetchCoins = () => dispatch => {
    dispatch(dashboardCoinsRequest());
    API.get('/coins')
    .then(coins => {
        dispatch(dashboardCoinsSuccess(coins.data.coins));
        toastr.success('Fetched coins successfully');
      })
      .catch(error => {
        dispatch(dashboardCoinsError(error));
        toastr.error(error.message);
      });

  };