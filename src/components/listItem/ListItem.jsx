import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

// Common
import { variables } from '../../common/variables';

// Components
import Button from '../button/Button';
import ButtonLink from '../buttonLink/ButtonLink';
import Rating from '../rating/Rating';

// Styles
import * as Styled from './ListItemStyles';

const ButtonLinkHOC = ButtonLink(Button);

const ListItem = ({ item }) => {
  const history = useHistory();

  return (
    <Styled.ListItem>
      <Styled.BoxWrapper>
        <Styled.Image src={item.image} alt={item.name} />
        <Styled.Box>
          <Styled.TextField bold htmlTag="p" size={18}>
            {item.name}
          </Styled.TextField>
          <Styled.TextField color={variables.colors.grey2} htmlTag="p" size={14}>
            {item.description}
          </Styled.TextField>
        </Styled.Box>
      </Styled.BoxWrapper>
      <Styled.Box>
        <Rating rate={item.rating} />
        <ButtonLinkHOC
          category="primary"
          disabled={!item.active}
          history={history}
          id={`ProductItem-${item.id}`}
          to="/product"
        >
          {item.active ? 'Show details' : 'Unavailable'}
        </ButtonLinkHOC>
      </Styled.Box>
    </Styled.ListItem>
  )
}

ListItem.propTypes = {
  item: PropTypes.shape({
    active: PropTypes.bool,
    description: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
  }),
};

export default ListItem;
