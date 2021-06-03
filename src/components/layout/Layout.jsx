import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Header } from '../header/Header';

// Styles
import * as Styled from './LayoutStyles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Styled.Container>{children}</Styled.Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
