import React from 'react';
import { useHistory } from 'react-router-dom';

// Components
import Button from '../button/Button';
import ButtonLink from '../buttonLink/ButtonLink';
import Search from '../search/Search';

// Enums
import { AppRoute } from '../../routing/AppRoute.enum';
import { HeaderInfo } from './Header.enum';

// Styles
import * as Styled from './HeaderStyles';

const ButtonLinkHOC = ButtonLink(Button);

const Header = () => {
  const history = useHistory();

  return (
    <Styled.Header>
      <Styled.Box>
        <Styled.Title to={AppRoute.home}>{HeaderInfo.title}</Styled.Title>
        <Search />
      </Styled.Box>
      <ButtonLinkHOC
        category="login"
        history={history}
        id="Login"
        to={AppRoute.login}
      >
        {HeaderInfo.loginButton}
      </ButtonLinkHOC>
    </Styled.Header>
  );
};

export default Header;
