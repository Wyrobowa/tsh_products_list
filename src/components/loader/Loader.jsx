import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './LoaderStyles';

const Loader = ({ className }) => (
  <Styled.LoaderSpinner className={className}>
    <Styled.Spinner />
    <Styled.Spinner />
  </Styled.LoaderSpinner>
);

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: '',
};

export default Loader;
