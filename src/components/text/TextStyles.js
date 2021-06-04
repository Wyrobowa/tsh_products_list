import styled from 'styled-components';

export const Text = styled.p`
  justify-content: flex-start;
  display: flex;
  margin: 0;
  padding: 0;
  
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
