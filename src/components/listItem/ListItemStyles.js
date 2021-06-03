import styled from 'styled-components';

// Components
import Text from '../text/Text';

export const ListItem = styled.div`
  flex-flow: column;
  display: flex;
  width: 210px;
  height: 400px;
`;

export const Row = styled(Text)`
  line-height: 16px;
`;

export const Image = styled.img`
  max-width: 210px;
  max-height: 160px;
`;
