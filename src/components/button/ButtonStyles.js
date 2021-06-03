import styled from 'styled-components';

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.paddings.button};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
`;
