import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { requestGetProducts } from '../../actions/productsActions';

// Icons
import icon from '../../common/icons/search.png';

// Styles
import * as Styled from './SearchStyles';

const Search = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = ({ target }) => {
    const { value } = target;
    setValue(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (value) {
      dispatch(requestGetProducts(`search=${value}`));
    }
  };

  return (
    <Styled.Search>
      <Styled.SearchField id="Search" onChange={handleOnChange} placeholder="Search" value={value} />
      <Styled.SearchButton category="search" id="SearchButton" onClick={handleOnSubmit} type="submit">
        <Styled.Image src={icon} alt="Search" />
      </Styled.SearchButton>
    </Styled.Search>
  );
};

export default Search;
