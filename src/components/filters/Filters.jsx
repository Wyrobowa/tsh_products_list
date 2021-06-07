import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { setFilters } from '../../actions/productsActions';

// Components
import Checkbox from '../checkbox/Checkbox';

// Reducers
import { getParams } from '../../reducers/productsReducer';

// Styles
import * as Styled from './FiltersStyles';

const Filters = () => {
  const params = useSelector(getParams);
  const dispatch = useDispatch();

  const handleOnChange = ({ target }) => {
    const { checked, name } = target;
    dispatch(setFilters(name, checked));
  };

  return (
    <Styled.Filters>
      <Checkbox checked={params.active} id="Active" label="Active" onChange={handleOnChange} />
      <Checkbox checked={params.promo} id="Promo" label="Promo" onChange={handleOnChange} />
    </Styled.Filters>
  );
};

export default Filters;
