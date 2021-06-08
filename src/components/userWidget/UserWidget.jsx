import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const ButtonLinkHOC = ButtonLink(Button);

const UserWidget = ({ user }) => {
  const [userMenu, setUserMenu] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const userWidgetRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (!user.avatar) {
      setAvatarError(true);
    }
  }, [user.avatar]);

  const handleOnClick = () => {
    setUserMenu(!userMenu);
  };

  const handleOnError = () => {
    setAvatarError(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('bearerToken');
    localStorage.removeItem('userId');

    dispatch(clearUser());
    dispatch(clearLogin());
  };

  useOnClickOutside(userWidgetRef, () => setUserMenu(false));

  return (
    <Styled.UserWidget>
      {user
        ? (
          <div ref={userWidgetRef}>
            {!avatarError
              ? <Styled.Avatar
                  src={user.avatar}
                  alt={user.username}
                  onClick={handleOnClick}
                  onError={handleOnError}
                  ref={avatarRef}
                  title={user.username}
                />
              : <Styled.Name onClick={handleOnClick}>{user.username.charAt(0)}</Styled.Name>}
              {userMenu && (
                <Styled.UserMenu>
                  <Button category="dropdownItem" id="Logout" onClick={handleLogout}>Logout</Button>
                </Styled.UserMenu>
              )}
          </div>
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
