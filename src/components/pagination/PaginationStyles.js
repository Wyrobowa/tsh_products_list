import styled from 'styled-components';

export const Pagination = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  margin: 50px 0;
`;

export const Page = styled.div`
  margin-right: 15px;
  cursor: pointer;
  font-size: 14px;
  
  ${({ theme, disabled }) => disabled && `
    cursor: default;
    color: ${theme.colors.grey2};
    pointer-events: none;
  `}
  
  ${({ theme, isCurrentPage }) => isCurrentPage && `
    cursor: default;
    color: ${theme.colors.blue};
    pointer-events: none;
  `}
  
  &:last-of-type {
    margin-right: 0;
  }
`;

export const FirstPage = styled(Page)`
  margin-right: 32px;
`;

export const LastPage = styled(Page)`
  margin-left: 17px;
`;
