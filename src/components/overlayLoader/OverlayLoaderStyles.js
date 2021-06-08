import styled from 'styled-components';

// Components
import Loader from '../loader/Loader';

export const LoaderWrapper = styled.div`
  position: fixed;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 90;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LoaderStyled = styled(Loader)`
  position: fixed;
  top: calc(50% - 40px);
`;
