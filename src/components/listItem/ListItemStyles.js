import styled from 'styled-components';

// Components
import Text from '../text/Text';

export const ListItem = styled.div`
  flex-flow: column;
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Box = styled.div`
  flex-flow: column;
  display: flex;
  padding: 0 24px;
  
  &:last-of-type {
    padding-bottom: 16px;
  }
`;

export const BoxWrapper = styled(Box)`
  height: 100%;
  padding: 0;
  
  ${Box} {
    height: 100%;
  }
`;

export const TextField = styled(Text)`
  margin-top: 15px;
  line-height: 18px;

  &:nth-of-type(2) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    height: 50px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
