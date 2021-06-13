import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

// Common
import { variables } from '../../common/variables';

// Components
import Button from '../button/Button';
import ButtonLink from '../buttonLink/ButtonLink';
import Promo from '../promo/Promo';
import Rating from '../rating/Rating';

// Styles
import * as Styled from './ListItemStyles';

const ButtonLinkHOC = ButtonLink(Button);

const ListItem = ({ item }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Styled.ListItem>
      <Styled.BoxWrapper>
        <Styled.Image src={item.image} alt={item.name} />
        {item.promo && <Promo />}
        <Styled.Box>
          <Styled.TextField bold size={18}>
            {item.name}
          </Styled.TextField>
          <Styled.TextField color={variables.colors.grey5} size={14}>
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
          to={{
            pathname: `/product/${item.id}`,
            state: { background: location },
          }}
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
