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
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.blue2};
    background-color: ${({ theme }) => theme.colors.blue2};
  }
  
  ${({ theme, category }) => category && category === 'login' && `
    background-color: ${theme.colors.white};
    color: ${theme.colors.blue};
    
    &:hover {
      border-color: ${theme.colors.blue2};
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue2};
    }
  `}
  
  ${({ theme, category }) => category && category === 'transparent' && `
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${theme.colors.black2};
    
    &:hover {
      background-color: transparent;
      color: ${theme.colors.black2};
    }
  `}
  
  ${({ theme, category }) => category && category === 'dropdownItem' && `
    border: none;
    width: 100%;
    padding: 20px 24px;
    background-color: transparent;
    text-align: left;
    color: ${theme.colors.black2};
    
    &:hover {
      background-color: transparent;
      color: ${theme.colors.black2};
    }
  `}
  
  &:disabled {
    cursor: not-allowed;
    border-color: ${({ theme }) => theme.colors.grey2};
    background-color: ${({ theme }) => theme.colors.grey2};
  }
`;
