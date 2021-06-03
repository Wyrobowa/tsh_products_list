import styled from 'styled-components';

export const Text = styled.h1`
  justify-content: flex-start;
  display: flex;
  
  ${({ bold }) => bold && `
    font-weight: bold;
  `}
  
  ${({ theme, color }) => theme && color && `
    color: ${color};
  `}
  
  ${({ size }) => size && `
    font-size: ${size}px;
  `}
`;
