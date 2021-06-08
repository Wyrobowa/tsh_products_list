import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import Text from '../../components/text/Text';

export const Layout = styled.div`
  display: flex;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  display: none;

  @media ${({ theme }) => theme.mediaQueries.laptop} {
    display: block;
    height: 100vh;

    > * {
      height: 100vh;
    }
  }
`;

export const Section = styled.div`
  flex-flow: column;
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.paddings.mainMobile};
  padding-top: 50px;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    padding: ${({ theme }) => theme.paddings.mainLaptop};
    padding-top: 50px;
  }
`;

export const LoginForm = styled.form`
  flex-flow: column;
  display: flex;
  margin-top: 20px;
  
  > input, button {
    margin-bottom: 20px;
  }
  
  > button {
    margin-top: 20px;
  }
`;

export const HeaderTitle = styled(Link)`
  margin-bottom: 100px;
  font-size: 24px;
  line-height: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black2};
`;

export const Title = styled(Text)`
  margin-bottom: 30px;
`;

export const ForgotPasswordLink = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey2};
`;
