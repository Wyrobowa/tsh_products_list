import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { setFilters } from '../../actions/productsActions';

// Components
import Layout from '../../components/layout/Layout';
import List from '../../components/list/List';

// Reducers
import { getPagination, getProducts } from '../../reducers/productsReducer';

const Products = () => {
  const products = useSelector(getProducts);
  const pagination = useSelector(getPagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters('limit', 8));
  }, [dispatch]);

  return (
    <Layout>
      <List data={products} pagination={pagination} />
    </Layout>
  );
};

export default Products;
