import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
        "logo login"
        "filters filters";
  display: grid;
  padding: ${({ theme }) => theme.paddings.mainMobile};
  padding-top: 20px;
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    height: 144px;
    padding: ${({ theme }) => theme.paddings.mainTablet};
  }

  @media ${({ theme }) => theme.mediaQueries.laptop} {
    grid-template-columns: 205px 1fr 90px;
    grid-template-areas:
        "logo filters login";
    padding: ${({ theme }) => theme.paddings.mainLaptop};
  }
  
  > * {
    margin-bottom: 30px;
  }
`;

export const Box = styled.div`
  grid-area: filters;
  flex-flow: column;
  align-items: center;
  display: flex;

  @media ${({ theme }) => theme.mediaQueries.tablet} {
    flex-flow: row;
  }
`;

export const Title = styled(Link)`
  grid-area: logo;
  justify-self: start;
  align-self: center;
  font-size: 24px;
  line-height: 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black2};
`;

export const LoginButton = styled.div`
  grid-area: login;
  justify-self: end;
  align-self: center;
  width: fit-content;
  height: fit-content;
`;
