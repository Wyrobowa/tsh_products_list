import React from 'react';

// Common
import { variables } from '../../common/variables';

// Components
import Text from '../text/Text';

// Images
import image from '../../common/img/empty_list.png';

// Styles
import * as Styled from './EmptyListStyles';

const EmptyList = () => {
  return (
    <Styled.EmptyList>
      <Styled.Box>
        <Styled.Image src={image} alt="Empty list" />
        <Text size={18}>Ooops… It’s empty here</Text>
        <Text size={14} color={variables.colors.grey2}>There are no products on the list</Text>
      </Styled.Box>
    </Styled.EmptyList>
  );
};

export default EmptyList;
