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
  height: 48px;
`;

export const Name = styled.button`
  justify-content: center;
  align-items: center;
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.black2};
  border-radius: 50%;
  width: 46px;
  height: 46px;
  text-transform: uppercase;
  font-size: 26px;
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  flex-flow: column;
  display: flex;
  border-radius: 4px;
  min-width: 184px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 8px 32px rgba(17, 18, 20, 0.158514);
`;
