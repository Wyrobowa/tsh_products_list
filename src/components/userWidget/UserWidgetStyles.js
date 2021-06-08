import styled from 'styled-components';

export const UserWidget = styled.div`
  position: relative;
  grid-area: login;
  justify-self: end;
  align-self: center;
  width: fit-content;
  height: fit-content;
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  flex-flow: column;
  display: flex;
  min-width: 184px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 32px rgba(17, 18, 20, 0.158514);
`;
