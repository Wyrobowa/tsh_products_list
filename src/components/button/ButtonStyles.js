import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.paddings.button};
  background-color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  
  ${({ theme, category }) => category && category === 'login' && `
    background-color: ${theme.colors.white};
    color: ${theme.colors.blue};
  `}
  
  &:disabled {
    border-color: ${({ theme }) => theme.colors.grey2};
    background-color: ${({ theme }) => theme.colors.grey2};
  }
`;
