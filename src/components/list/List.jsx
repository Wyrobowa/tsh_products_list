import React from 'react';
import PropTypes from 'prop-types';

// Components
import ListItem from '../listItem/ListItem';

// Styles
import * as Styled from './ListStyles';

const List = ({ data }) => {
  return (
    <Styled.List>
      {data.length > 0 && data.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </Styled.List>
  )
}

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default List;
