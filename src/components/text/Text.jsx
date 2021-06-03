import React from 'react';
import PropTypes from 'prop-types';

// Common
import { variables } from '../../common/variables';

// Styles
import * as Styled from './TextStyles';

const Text = ({ bold, className, color, children, htmlTag, size }) => {
  return (
    <Styled.Text
      as={htmlTag}
      bold={bold}
      className={className}
      color={color}
      size={size}
    >
      {children}
    </Styled.Text>
  )
}

Text.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  htmlTag: PropTypes.string,
  size: PropTypes.number,
};

Text.defaultProps = {
  bold: false,
  className: '',
  color: variables.colors.black2,
  htmlTag: 'h1',
  size: 16,
};

export default Text;
