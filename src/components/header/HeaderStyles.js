import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 144px;
  padding: ${({ theme }) => theme.paddings.main};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled(Link)`
  font-size: 24px;
  line-height: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black2};
`;
