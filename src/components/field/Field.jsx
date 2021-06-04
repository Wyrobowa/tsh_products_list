import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './FieldStyles';

const Field = ({ id, onChange, type, value, ...rest }) => {
  return (
    <>
      {type === 'input' && (
        <Styled.Input
          id={id}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
      {type === 'textarea' && (
        <textarea
          id={id}
          onChange={onChange}
          value={value}
          {...rest}
        />
      )}
    </>
  );
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['input', 'textarea']),
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  type: 'input',
};

export default Field;
