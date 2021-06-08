import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Header from '../header/Header';
import OverlayLoader from '../overlayLoader/OverlayLoader';

// Reducers
import { getLoaderStatus } from '../../reducers/appStatusReducer';

// Styles
import * as Styled from './LayoutStyles';

const Layout = ({ children }) => {
  const loading = useSelector(getLoaderStatus);

  return (
    <>
      <Header />
      <div>
        {loading && <OverlayLoader />}
        <Styled.Container>{children}</Styled.Container>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
