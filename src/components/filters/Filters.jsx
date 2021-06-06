import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { setFilters } from '../../actions/productsActions';

// Components
import Checkbox from '../checkbox/Checkbox';

// Reducers
import { getParams } from '../../reducers/productsReducer';

const Filters = () => {
  const params = useSelector(getParams);
  const dispatch = useDispatch();

  const handleOnChange = ({ target }) => {
    const { checked, name } = target;
    dispatch(setFilters(name, checked));
  };

  return (
    <>
      <Checkbox checked={params.active} id="Active" label="Active" onChange={handleOnChange} />
      <Checkbox checked={params.promo} id="Promo" label="Promo" onChange={handleOnChange} />
    </>
  );
};

export default Filters;
