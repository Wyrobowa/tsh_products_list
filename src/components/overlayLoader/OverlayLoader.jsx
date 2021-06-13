import React from 'react';
import PropTypes from 'prop-types';

// Hooks
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

// Styles
import * as Styled from './OverlayLoaderStyles';

const OverlayLoader = ({ className, depth }) => {
  useLockBodyScroll();

  return (
    <Styled.LoaderWrapper className={className} depth={depth}>
      <Styled.LoaderStyled />
    </Styled.LoaderWrapper>
  );
};

OverlayLoader.propTypes = {
  className: PropTypes.string,
  depth: PropTypes.oneOf(['header', 'content', 'modal']),
};

OverlayLoader.defaultProps = {
  className: '',
  depth: 'content',
};

export default OverlayLoader;
