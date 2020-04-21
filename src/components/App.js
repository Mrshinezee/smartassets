import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NotFound from '../pages/NotFound';
import store from '../store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
