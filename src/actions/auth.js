import toastr from 'toastr';
import { manualLogin } from '../utils/authorize';
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

  const getUser = ({ id, email }) => ({ id, email });

  const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
  });
  
  const loginUserSuccess = user => ({
    type: LOGIN_USER_SUCCESS,
    user,
  });
  
  const loginUserError = error => ({
    type: LOGIN_USER_ERROR,
    error,
  });

  export const loginUser = ({ email, password, history }) => dispatch => {
    dispatch(loginUserRequest());
  
    const req = manualLogin(email, password);
  
    return req
      .then(user => {
        dispatch(loginUserSuccess(getUser(user.data)));
        const { token } = user.data;
        localStorage.setItem('smartassets', `bearer ${token}`);
        // if(manual){
        //     localStorage.setItem('smartassets', `bearer ${token}`);
        // }
        toastr.success('Login Success');
        history.push('/');
      })
      .catch(error => {
        dispatch(loginUserError(error));
        toastr.error(error.message);
      });
  };