import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout'

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
            <PageLayout>
                <Component {...props} />
            </PageLayout>
            )}
        />
    );
};

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired,
};

export default PublicRoute;