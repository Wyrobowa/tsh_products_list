import styled from 'styled-components';

// Components
import Loader from '../loader/Loader';

export const LoaderWrapper = styled.div`
  position: fixed;
  z-index: 90;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LoaderStyled = styled(Loader)`
  position: fixed;
`;
