import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import PageLayout from '../layouts/PageLayout';
import { isAuthenticated } from '../utils/authorize'

/* eslint-disable react/jsx-props-no-spreading */
const PrivateRoute = ({ component: Component, isLoading, user, ...rest }) => {
  if (isLoading) {
    return (
      <PageLayout>
        <div>Loading...</div>
      </PageLayout>
    );
  }

  return (
    <Route
      {...rest}
      render={props => {
        const component = isAuthenticated() ? (
          <PageLayout>
            <Component {...props} />
          </PageLayout>
        ) : (
          <Redirect to="/login" />
        );
        return component;
      }}
    />
  );
};

PrivateRoute.defaultProps = {
  user: null,
};

PrivateRoute.propTypes = {
  component: PropTypes.shape({}).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
  }),
  isLoading: PropTypes.bool.isRequired,
};

export const mapStateToProps = ({ auth: { user, isLoading } }) => ({
  user,
  isLoading,
});

export default connect(mapStateToProps)(PrivateRoute);