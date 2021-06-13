import styled from 'styled-components';

export const Star = styled.span`
  margin-right: 5px;
  font-size: 13px;
  
  &:before {
    content: "\\2606";
    color: ${({ theme }) => theme.colors.grey4};
  }

  ${({ theme, checked }) => checked && `
    &:before {
      content: "\\2605";
      color: ${theme.colors.orange};
    }
  `}
`;

export const Rating = styled.div`
  display: flex;
  margin-bottom: 15px;
`;
