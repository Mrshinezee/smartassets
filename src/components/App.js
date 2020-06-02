import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from  '../pages/Dashboard';
import Coin from '../pages/Coin';
import Deposit from '../pages/Deposit'
import store from '../store';
import PublicRoute from '../partical/PublicRoute';
import PrivateRoute from '../partical/PrivateRoute';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/board" component={Dashboard} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/coin/:coinId" component={Coin} />
        <PrivateRoute exact path="/deposit" component={Deposit} />
        {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
        <PublicRoute component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
