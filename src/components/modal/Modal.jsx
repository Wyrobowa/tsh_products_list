import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Icons
import icon from '../../common/icons/close.svg';

// Reducers
import { getModalLoaderStatus } from '../../reducers/appStatusReducer';

// Styles
import * as Styled from './ModalStyles';
import OverlayLoader from '../overlayLoader/OverlayLoader';

const Modal = ({ children }) => {
  const loading = useSelector(getModalLoaderStatus);
  const history = useHistory();

  const goBack = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <Styled.ModalWrapper>
      <Styled.Modal>
        {loading && <OverlayLoader depth="modal" />}
        <Styled.ButtonStyled id="Close" onClick={goBack} category="close">
          <img src={icon} alt="Close" />
        </Styled.ButtonStyled>
        {children}
      </Styled.Modal>
    </Styled.ModalWrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
