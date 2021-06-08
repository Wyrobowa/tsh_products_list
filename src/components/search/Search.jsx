import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { requestGetProducts, setSearch } from '../../actions/productsActions';

// Icons
import icon from '../../common/icons/search.png';

// Reducers
import { getParams } from '../../reducers/productsReducer';

// Styles
import * as Styled from './SearchStyles';

const Search = () => {
  const params = useSelector(getParams)
  const dispatch = useDispatch();

  const handleOnChange = ({ target }) => {
    const { value } = target;
    dispatch(setSearch(value));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (params?.search) {
      dispatch(requestGetProducts());
    }
  };

  return (
    <Styled.Search>
      <Styled.SearchField id="Search" onChange={handleOnChange} placeholder="Search" type="search" value={params.search} />
      <Styled.SearchButton category="search" id="SearchButton" onClick={handleOnSubmit} type="submit">
        <Styled.Image src={icon} alt="Search" />
      </Styled.SearchButton>
    </Styled.Search>
  );
};

export default Search;
