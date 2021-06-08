import styled from 'styled-components';

export const Promo = styled.div`
  position: absolute;
  top: 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 75px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.orange};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
`;
