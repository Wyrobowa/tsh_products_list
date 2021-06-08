import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Components
import ButtonLink from '../buttonLink/ButtonLink';
import Button from '../button/Button';

// Enums
import { AppRoute } from '../../routing/AppRoute.enum';
import { HeaderInfo } from '../header/Header.enum';

// Styled
import * as Styled from './UserWidgetStyles';
import { clearUser } from '../../actions/userActions';
import { clearLogin } from '../../actions/appStatusActions';

const ButtonLinkHOC = ButtonLink(Button);

const UserWidget = ({ user }) => {
  const [userMenu, setUserMenu] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    setUserMenu(!userMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('userId');

    dispatch(clearUser());
    dispatch(clearLogin());
  };

  return (
    <Styled.UserWidget>
      {user
        ? (
          <>
            <Styled.Avatar src={user.avatar} alt={user.username} onClick={handleOnClick} />
            {userMenu && (
              <Styled.UserMenu>
                <Button category="dropdownItem" id="Logout" onClick={handleLogout}>Logout</Button>
              </Styled.UserMenu>
            )}
          </>
        ) : (
          <ButtonLinkHOC
            category="login"
            history={history}
            id="Login"
            to={AppRoute.login}
          >
            {HeaderInfo.loginButton}
          </ButtonLinkHOC>
        )}
    </Styled.UserWidget>
  );
};

export default UserWidget;
