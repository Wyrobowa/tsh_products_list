import styled from 'styled-components';

export const List = styled.div`
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  grid-template-columns: 1fr;
  display: grid;

  @media ${({ theme }) => theme.mediaQueries.mobile} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
