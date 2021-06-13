import styled from 'styled-components';

// Components
import Loader from '../loader/Loader';
import * as LoaderStyles from '../loader/LoaderStyles';

export const LoaderWrapper = styled.div`
  position: absolute;
  z-index: 90;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  
  ${({ depth }) => depth === 'header' && `
    z-index: 10;
  `}
  
  ${({ depth }) => depth === 'content' && `
    z-index: 40;
    
    ${LoaderStyles.Loader} {
      position: fixed;
      top: 50%;
    }
  `}
  
  ${({ depth }) => depth === 'modal' && `
    position: absolute;
    z-index: 90;
    border-radius: 8px;
    
    ${LoaderStyles.Loader} {
      top: calc(50% - 50px);
    }
  `}
`;

export const LoaderStyled = styled(Loader)`
  position: fixed;
`;
