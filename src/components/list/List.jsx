import React from 'react';
import PropTypes from 'prop-types';

// Components
import EmptyList from '../emptyList/EmptyList';
import ListItem from '../listItem/ListItem';

// Styles
import * as Styled from './ListStyles';
import Pagination from '../pagination/Pagination';

const List = ({ data, pagination }) => {
  return (
    <>
      {data.length > 0
        ? (
          <>
            <Styled.List>
              {data.map(item => (
                <ListItem item={item} key={item.id} />
              ))}
            </Styled.List>
            <Pagination data={pagination} />
          </>
        ) : (
          <EmptyList />
        )}
    </>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default List;
