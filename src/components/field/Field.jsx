import React from 'react';
import PropTypes from 'prop-types';

// Styles
import * as Styled from './FieldStyles';

const Field = ({ id, label, onChange, type, value, ...rest }) => {
  return (
    <>
      {label && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
      {type === 'textarea'
        ? (
          <textarea
            id={id}
            name={id.toLowerCase()}
            onChange={onChange}
            value={value}
            {...rest}
          />
        ) : (
          <Styled.Input
            id={id}
            name={id.toLowerCase()}
            onChange={onChange}
            type={type}
            value={value}
            {...rest}
          />
        )}
    </>
  );
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['input', 'password', 'search', 'textarea']),
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  label: null,
  type: 'input',
};

export default Field;
