import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

// Common
import { breakpoints } from '../common/variables';

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  
  body {
    background-color: ${({ theme }) => theme.colors.grey};
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.black2};
  }
  
  #root {
    overflow-x: auto;
    min-width: ${breakpoints.mobile}px;
  }
`;
