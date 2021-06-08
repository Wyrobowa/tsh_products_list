import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { requestGetUser } from '../../actions/userActions';

// Components
import Filters from '../filters/Filters';
import Search from '../search/Search';
import UserWidget from '../userWidget/UserWidget';

// Enums
import { AppRoute } from '../../routing/AppRoute.enum';
import { HeaderInfo } from './Header.enum';

// Reducers
import { getUser } from '../../reducers/userReducer';

// Styles
import * as Styled from './HeaderStyles';

const Header = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('bearerToken');

    if (token) {
      dispatch(requestGetUser());
    }
  }, [dispatch]);

  return (
    <Styled.Header>
      <Styled.Title to={AppRoute.home}>{HeaderInfo.title}</Styled.Title>
      <Styled.Box>
        <Search />
        <Filters />
      </Styled.Box>
      <UserWidget user={user} />
    </Styled.Header>
  );
};

export default Header;
