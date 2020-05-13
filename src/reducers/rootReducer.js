import { combineReducers } from 'redux';
import auth from './auth';
import dashboard from './dashboard'
import coin from './coin'

export default combineReducers({
    auth,
    dashboard,
    coin
});