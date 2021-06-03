import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './ButtonStyles';

export const Button = ({ category, children, id, onClick, type }) => {
  return (
    <Styled.Button
      category={category}
      id={id}
      onClick={onClick}
      type={type}
    >
      {children}
    </Styled.Button>
  );
};

Button.propTypes = {
  category: PropTypes.oneOf(['primary', 'secondary', 'login']),
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
};

Button.defaultProps = {
  category: 'primary',
  children: null,
  onClick: null,
  type: 'button',
};
