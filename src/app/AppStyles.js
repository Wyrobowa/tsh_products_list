import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${styledNormalize}
  
  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-family: 'Nunito Sans', sans-serif;
    color: ${({ theme }) => theme.colors.fontMain};
  }
`;
