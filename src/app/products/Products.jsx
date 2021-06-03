import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { requestGetProducts } from '../../actions/productsActions';

// Components
import Layout from '../../components/layout/Layout';
import List from '../../components/list/List';

// Reducers
import { getProducts } from '../../reducers/productsReducer';

const Products = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetProducts('limit=5'));
  }, [dispatch]);

  return (
    <Layout>
      <List data={products} />
    </Layout>
  );
};

export default Products;
