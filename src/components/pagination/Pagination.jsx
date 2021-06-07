import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import { setPagination } from '../../actions/productsActions';

// Styles
import * as Styled from './PaginationStyles';
import { getPagesList } from '../../helpers/paginationHelper';

const Pagination = ({ data }) => {
  const [pagesList, setPagesList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setPagesList(getPagesList(data.totalPages, data.currentPage));
  }, [data])

  const handleOnClick = ({ target }) => {
    const selectedPage = parseInt(target.getAttribute('data-page'));
    dispatch(setPagination(selectedPage, data.itemsPerPage));
  };

  return (
    <Styled.Pagination>
      <Styled.Page
        data-page={1}
        disabled={data.currentPage === 1}
        onClick={handleOnClick}
      >
        First
      </Styled.Page>
      {pagesList.map(page => (
        <Styled.Page
          data-page={page}
          disabled={!page}
          isCurrentPage={page === data.currentPage}
          key={page}
          onClick={handleOnClick}
        >
          {page || '...'}
        </Styled.Page>
      ))}
      <Styled.Page
        data-page={data.totalPages}
        disabled={data.currentPage === data.totalPages}
        onClick={handleOnClick}
      >
        Last
      </Styled.Page>
    </Styled.Pagination>
  );
};

Pagination.propTypes = {
  data: PropTypes.shape({
    currentPage: PropTypes.number,
    itemCount: PropTypes.number,
    itemsPerPage: PropTypes.number,
    totalItems: PropTypes.number,
    totalPages: PropTypes.number,
  }).isRequired,
};

export default Pagination;
