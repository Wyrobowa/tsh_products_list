import React from 'react';
import PropTypes from 'prop-types';

// Components
import Text from '../text/Text';

// Styles
import * as Styled from './CheckboxStyles';

const Checkbox = ({ id, label, checked, onChange, ...rest }) => {
  return (
    <Styled.Label htmlFor={id}>
      <Styled.Input
        id={id}
        name={id.toLowerCase()}
        checked={checked ? 'checked' : false}
        onChange={onChange}
        type="checkbox"
        {...rest}
      />
      <Styled.Checkmark />
      {label && <Text size={14}>{label}</Text>}
    </Styled.Label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  label: null,
};

export default Checkbox;
