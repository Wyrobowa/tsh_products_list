import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './OverlayLoaderStyles';

const OverlayLoader = ({ className }) => {
  return (
    <Styled.LoaderWrapper className={className}>
      <Styled.LoaderStyled />
    </Styled.LoaderWrapper>
  );
};

OverlayLoader.propTypes = {
  className: PropTypes.string,
};

OverlayLoader.defaultProps = {
  className: '',
};

export default OverlayLoader;
