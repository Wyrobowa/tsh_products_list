import React from 'react';
import { useHistory } from 'react-router-dom';

// Common
import { variables } from '../../common/variables';

// Components
import Button from '../button/Button';
import ButtonLink from '../buttonLink/ButtonLink';

// Styles
import * as Styled from './ListItemStyles';

const ButtonLinkHOC = ButtonLink(Button);

const ListItem = ({ item }) => {
  const history = useHistory();

  return (
    <Styled.ListItem>
      <Styled.Image src={item.image} alt={item.name} />
      <Styled.Row bold htmlTag="p" size={18}>
        {item.name}
      </Styled.Row>
      <Styled.Row color={variables.colors.grey2} htmlTag="p" size={14}>
        {item.description}
      </Styled.Row>
      <Styled.Row>{item.rating}</Styled.Row>
      <ButtonLinkHOC
        history={history}
        id={`ProductItem-${item.id}`}
        to="/product"
      >
        {item.active ? 'Show details' : 'Unavailable'}
      </ButtonLinkHOC>
    </Styled.ListItem>
  )
}

export default ListItem;
