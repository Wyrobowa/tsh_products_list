import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

// Components
import ModalRoute from '../components/modalRoute/ModalRoute';

// Containers
import Login from '../app/login/Login';
import Product from '../app/product/Product';
import Products from '../app/products/Products';

// Enums
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={AppRoute.home} component={Products} />
        <Route path={AppRoute.products} component={Products} />
        <Route path={AppRoute.product} component={Product} />
        <Route path={AppRoute.login} component={Login} />

        <Redirect to={AppRoute.home} />
      </Switch>

      <ModalRoute background={background} path={AppRoute.product} component={Product} />
    </>
  );
};
