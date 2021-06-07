import styled from 'styled-components';

// Components
import { Text } from '../text/TextStyles';

export const EmptyList = styled.div`
  flex-flow: column;
  align-items: center;
  display: flex;
`;

export const Box = styled.div`
  flex-flow: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 600px;
  height: 344px;
  background-color: ${({ theme }) => theme.colors.white};

  ${Text} {
    margin-top: 10px;
  }
`;

export const Image = styled.img`
  margin-bottom: 10px;
  width: 36px;
  height: 45px;
`;
