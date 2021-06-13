import styled from 'styled-components';

// Components
import Button from '../button/Button';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 80;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.blackOpacity};
`;

export const Modal = styled.div`
  position: relative;
  border-radius: 8px;
  box-sizing: border-box;
  width: 90%;
  min-height: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    width: 600px;
  }
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
