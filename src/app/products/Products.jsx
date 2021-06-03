import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Layout from '../../components/layout/Layout';

// Reducers
import { getProducts } from '../../reducers/productsReducer';
import { requestGetProducts } from '../../actions/productsActions';

export const Products = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetProducts());
  }, [dispatch]);

  return (
    <Layout>
      {products?.length > 0 && products.map(product => (
        <div key={product.id}>
          <div>{product.image}</div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.rating}</div>
          <div>{product.active}</div>
        </div>
      ))}
    </Layout>
  );
};
