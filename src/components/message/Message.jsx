import React from 'react';
import PropTypes from 'prop-types';

// Components
import Text from '../text/Text';

// Icons
import icon from '../../common/icons/close.svg';

// Styles
import * as Styled from './MessageStyles';

const Message = ({ text, type, onClick }) => {
  return (
    <Styled.Message type={type}>
      <Text size={14}>{text}</Text>
      <Styled.Icon src={icon} alt="Close" onClick={onClick} />
    </Styled.Message>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'info', 'danger']),
  onClick: PropTypes.func,
};

Message.defaultProps = {
  type: 'info',
  onClick: () => {},
};

export default Message;
