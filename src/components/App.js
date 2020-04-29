import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from  '../pages/Dashboard';
import Coin from '../pages/Coin';
import store from '../store';
import PublicRoute from '../partical/PublicRoute'

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute exact path="/board" component={Dashboard} />
        <PublicRoute exact path="/login" component={Login} />
        <PublicRoute exact path="/coin" component={Coin} />
        <PublicRoute component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;