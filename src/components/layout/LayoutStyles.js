import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.paddings.mainMobile};
  padding-top: 55px;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ theme }) => theme.paddings.mainTablet};
    padding-top: 55px;
  }

  @media ${({ theme }) => theme.mediaQueries.laptop} {
    padding: ${({ theme }) => theme.paddings.mainLaptop};
    padding-top: 55px;
  }
`;
