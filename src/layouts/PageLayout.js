import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;