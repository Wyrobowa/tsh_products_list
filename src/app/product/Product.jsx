import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// Actions
import { requestGetProduct } from '../../actions/productActions';

// Common
import { variables } from '../../common/variables';

// Components
import Promo from '../../components/promo/Promo';

// Reducers
import { getProduct } from '../../reducers/productReducer';

// Styles
import * as Styled from './ProductStyles';

const Product = () => {
  const product = useSelector(getProduct);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [, , id] = pathname.split('/');

  useEffect(() => {
    if (id) {
      dispatch(requestGetProduct(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {product && (
        <>
          <Styled.Image src={product.image} alt={product.name} />
          {product.promo && <Promo />}
          <Styled.Box>
            <Styled.TextField bold size={18}>
              {product.name}
            </Styled.TextField>
            <Styled.TextField color={variables.colors.grey5} size={14}>
              {product.description}
            </Styled.TextField>
          </Styled.Box>
        </>
      )}
    </>
  );
};

export default Product;
