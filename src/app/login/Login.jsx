import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { clearLogin, requestLogin } from '../../actions/appStatusActions';

// Components
import Field from '../../components/field/Field';
import Button from '../../components/button/Button';

// Enums
import { AppRoute } from '../../routing/AppRoute.enum';
import { HeaderInfo } from '../../components/header/Header.enum';

// Images
import image from '../../common/img/login.png';

// Reducers
import { getLoginStatus } from '../../reducers/appStatusReducer';

// Styles
import * as Styled from './LoginStyles';
import Message from '../../components/message/Message';

const initState = {
  username: '',
  password: '',
};

const Login = () => {
  const [login, setLogin] = useState(initState);
  const loginStatus = useSelector(getLoginStatus);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (loginStatus.loggedIn) {
      history.push(AppRoute.home);
    }
  }, [history, loginStatus.loggedIn]);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    setLogin({
      ...login,
      [name]: value,
    })
  };

  const handleMessageOnClick = () => {
    dispatch(clearLogin());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(requestLogin(login));
    setLogin(initState);
  };

  return (
    <Styled.Layout>
      {(loginStatus.errorMsg) && (
        <Message text={loginStatus.errorMsg} type="danger" onClick={handleMessageOnClick} />
      )}
      <Styled.ImageWrapper>
        <img src={image} alt="Login" />
      </Styled.ImageWrapper>
      <Styled.Section>
        <Styled.HeaderTitle to={AppRoute.home}>{HeaderInfo.title}</Styled.HeaderTitle>
        <Styled.Title size={30}>Login</Styled.Title>
        <Styled.LoginForm>
          <Field
            id="Username"
            label="Username"
            onChange={handleOnChange}
            placeholder="Enter username"
            required
            value={login.username}
          />
          <Field
            id="Password"
            label="Password"
            onChange={handleOnChange}
            placeholder="Enter username"
            required
            type="password"
            value={login.password}
          />
          <Button id="Login" onClick={handleSubmit} type="submit">Log in</Button>
        </Styled.LoginForm>
        <Styled.ForgotPasswordLink to="#">Forgot password?</Styled.ForgotPasswordLink>
      </Styled.Section>
    </Styled.Layout>
  );
};

export default Login;
